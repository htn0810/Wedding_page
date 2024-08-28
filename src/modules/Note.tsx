import Animate from "@/components/Animate";
import CustomImage from "@/components/CustomImage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { fadeUpRight } from "@/constant/animate.constant";
import { IMAGES } from "@/constant/images.constant";
import QRCode from "@/assets/images/QR_code.webp";
import Countdown from "@/modules/Countdown";
import { FormState } from "@/types/commons.type";
import { useState } from "react";

const InitialState: FormState = {
  name: "",
  wish: "",
  accept: null,
};

const Note = () => {
  const [formState, setFormState] = useState<FormState>(InitialState);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | null>(null);

  const sendDataToGoogleSheet = () => {
    if (
      formState.name.trim() !== "" &&
      formState.wish.trim() !== "" &&
      formState.accept !== null
    ) {
      setIsSending(true);
      fetch(
        "https://script.google.com/macros/s/AKfycbzANzP2OpJrSR0Hf1iY71R2z8gNfXuR5EV_t9_yJBHeh2eBp59rmBoyJyw82MH-Yxei/exec",
        {
          method: "POST",
          cache: "no-cache",
          mode: "no-cors",
          redirect: "follow",
          body: JSON.stringify(formState),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((data) => {
          console.log(data);
          setFormState(InitialState);
          setErrors(null);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsSending(false));
    } else {
      const listErrs: string[] = [];
      if (formState.name.trim() === "") {
        listErrs.push("tên");
      }
      if (formState.wish.trim() === "") {
        listErrs.push("lời chúc");
      }
      if (formState.accept === null) {
        listErrs.push("tham gia");
      }
      setErrors("Vui lòng điền thông tin " + listErrs.join(", ") + "!");
    }
  };

  return (
    <>
      <div className="w-full my-4 lg:mt-6 2xl:mt-8 relative">
        <div className="relative w-24 h-32 sm:w-28 sm:h-36 lg:w-32 lg:h-44 2xl:w-40 2xl:h-56 ml-12 md:ml-40 lg:ml-60 2xl:ml-80 border-2 border-black">
          <div className="absolute left-[4%] top-[4%] md:left-[8%] md:top-[6%] w-full h-full object-cover z-50">
            <Animate animateType={fadeUpRight}>
              <CustomImage img={IMAGES.Note} />
            </Animate>
          </div>
        </div>
        <div className="h-20 lg:h-28 2xl:h-32 w-full bg-gray-900 absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
          <h5 className="font-primary mt-2 text-center text-xl lg:text-2xl 2xl:text-4xl text-white translate-x-full md:translate-x-0">
            Sổ lưu bút
          </h5>
        </div>
      </div>
      <div className="px-6 md:px-20 lg:px-40 2xl:px-60 py-5 flex flex-col justify-center items-center">
        <div className="w-full sm:w-1/2 flex flex-col gap-y-4 justify-center items-center">
          <input
            value={formState.name}
            onChange={(e) => {
              setFormState({ ...formState, name: e.target.value });
            }}
            type="text"
            placeholder="Tên của bạn"
            className="w-full border-2 border-black rounded-md px-3 py-2 text-xs lg:text-lg 2xl:text-xl"
          />
          <textarea
            value={formState.wish}
            onChange={(e) => {
              setFormState({ ...formState, wish: e.target.value });
            }}
            placeholder="Lời nhắn của bạn"
            className="w-full border-2 border-black rounded-md px-3 py-2 text-xs lg:text-lg 2xl:text-xl"
          ></textarea>
          <div className="w-full flex flex-col gap-y-2 bg-white border-2 border-black rounded-md px-3 py-2">
            <p className="font-secondary text-xs lg:text-lg 2xl:text-xl">
              Tham gia ngày vui của cô dâu và chú rể?
            </p>
            <div className="flex items-center gap-x-2 font-secondary">
              <input
                type="radio"
                id="join"
                checked={formState.accept === "Tham gia"}
                onChange={() =>
                  setFormState({ ...formState, accept: "Tham gia" })
                }
              />
              <label
                htmlFor="join"
                className="text-xs lg:text-lg 2xl:text-xl hover:text-gray-700"
              >
                Tham gia
              </label>
            </div>
            <div className="flex items-center gap-x-2 font-secondary">
              <input
                type="radio"
                id="busy"
                checked={formState.accept === "Bận"}
                onChange={() => setFormState({ ...formState, accept: "Bận" })}
              />
              <label
                htmlFor="busy"
                className="text-xs lg:text-lg 2xl:text-xl hover:text-gray-700"
              >
                Bận mất rồi!
              </label>
            </div>
            <div className="flex items-center gap-x-2 font-secondary">
              <input
                type="radio"
                id="answer-later"
                checked={formState.accept === "Trả lời sau"}
                onChange={() =>
                  setFormState({ ...formState, accept: "Trả lời sau" })
                }
              />
              <label
                htmlFor="answer-later"
                className="text-xs lg:text-lg 2xl:text-xl hover:text-gray-700"
              >
                Trả lời sau
              </label>
            </div>
          </div>
          <button
            onClick={sendDataToGoogleSheet}
            className={`text-xs lg:text-lg 2xl:text-xl  w-full border-2 border-black rounded-full px-3 py-2 font-secondary ${
              isSending
                ? "bg-black hover:bg-current"
                : "bg-white hover:bg-gray-900 hover:text-white"
            }`}
          >
            {isSending ? (
              <span className="inline-block size-3 lg:size-[18px] 2xl:size-5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
            ) : (
              <span>GỬI LỜI NHẮN</span>
            )}
          </button>
          {errors !== null && (
            <p className="text-xs lg:text-lg 2xl:text-xl text-red-500">
              {errors}
            </p>
          )}
          <Dialog>
            <DialogTrigger className="text-xs lg:text-lg 2xl:text-xl bg-white w-full border-2 border-black rounded-full px-3 py-2 font-secondary hover:bg-gray-900 hover:text-white">
              MỪNG CƯỚI
            </DialogTrigger>
            <DialogContent className="bg-white px-6">
              <DialogHeader>
                <DialogTitle className="hidden"></DialogTitle>
                <DialogDescription className="hidden"></DialogDescription>
              </DialogHeader>
              <div className="w-4/6 h-[180px] border-[1px] border-black relative">
                <img
                  src={IMAGES.Album4.xs}
                  alt="img"
                  className="w-full h-full object-cover absolute top-[-4px] left-[-8px]"
                />
                <div className="px-4 py-2 bg-black text-2xl font-primary text-white absolute right-[-60px] top-1/4">
                  Thanks!
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-4">
                <img src={QRCode} alt="QR" className="size-40 object-cover" />
                <div className="flex flex-col gap-y-1">
                  <span className="font-semibold font-secondary text-lg">
                    CHÚ RỂ
                  </span>
                  <span className="font-primary text-2xl">
                    Nguyen Trung Kien
                  </span>
                  <span>VietinBank</span>
                  <span>109868733373</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <p className="text-center text-sm lg:text-lg 2xl:text-xl mt-6">
          Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến
          đám cưới của tụi mình.
        </p>
        <div className="relative mt-10 border-2 border-black w-full sm:w-1/2 flex justify-center items-center gap-x-4 py-4">
          <Countdown />
        </div>
      </div>
    </>
  );
};

export default Note;
