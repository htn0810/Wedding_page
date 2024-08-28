import { IMAGES } from "@/constant/images.constant";
import Animate from "@/components/Animate";
import {
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeUp,
  zoomOut,
  zoomOutUp,
} from "@/constant/animate.constant";
import CustomImage from "@/components/CustomImage";

const Invitation = () => {
  return (
    <>
      <div>
        <Animate animateType={fadeUp}>
          <h5 className="text-lg lg:text-xl 2xl:text-4xl font-semibold text-center font-primary">
            Thân mời
          </h5>
        </Animate>
        <Animate animateType={fadeDown}>
          <p className="text-xs lg:text-lg 2xl:text-xl font-secondary font-light text-center mt-1 md:mt-4">
            ĐẾN DỰ LỄ CƯỚI CUẢ CHÚNG MÌNH
          </p>
        </Animate>
        <div className="grid grid-cols-8 gap-x-2 md:gap-x-4 lg:gap-x-6 2xl:gap-x-8 items-center mt-6 lg:mt-10 2xl:mt-14">
          <div className="col-span-3">
            <Animate animateType={fadeRight}>
              <CustomImage img={IMAGES.Thum2nd} />
            </Animate>
          </div>
          <div className="col-span-2">
            <Animate animateType={zoomOut}>
              <CustomImage img={IMAGES.MainThumb} />
            </Animate>
          </div>
          <div className="col-span-3">
            <Animate animateType={fadeLeft}>
              <CustomImage img={IMAGES.Thum3rd} />
            </Animate>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-20 lg:px-40 2xl:px-60 py-5 flex flex-col justify-center items-center">
        {/* Lịch */}
        <Animate animateType={zoomOutUp}>
          <h5 className="text-lg lg:text-xl 2xl:text-3xl font-semibold text-center font-primary animate-pulse">
            Tháng 9
          </h5>
        </Animate>
        <div className="w-[350px] h-[350px] mt-2 lg:mt-4 relative flex justify-center">
          <img
            src={IMAGES.Calendar.url}
            alt="Calendar-Img"
            className="w-full h-full object-cover filter grayscale"
          />
          <span className="absolute top-[50%] right-[6%] text-pink-400 animate-wiggle-more animate-infinite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              // className="size-6 md:size-8 lg:size-12"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </span>
        </div>
        <h5 className="font-secondary my-6 lg:my-8 2xl:my-10 text-center text-sm lg:text-lg 2xl:text-xl">
          TIỆC THÂN MẬT NHÀ GÁI TỔ ĐƯỢC TỔ CHỨC VÀO LÚC 12 GIỜ 00 PHÚT
        </h5>
        <div className="flex gap-x-4 md:gap-x-6 2xl:gap-x-10 items-center">
          <div className="flex flex-col items-center">
            <span className="text-sm lg:text-lg 2xl:text-xl">THÁNG</span>
            <span className="text-sm lg:text-lg 2xl:text-xl">09</span>
          </div>
          <div className="flex flex-col items-center border-l-2 border-black border-r-2 px-4 md:px-6 2xl:px-10">
            <span className="text-sm lg:text-lg 2xl:text-xl">THỨ 7</span>
            <span className="text-xl lg:text-3xl 2xl:text-5xl font-semibold">
              14
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm lg:text-lg 2xl:text-xl">NĂM</span>
            <span className="text-sm lg:text-lg 2xl:text-xl">2024</span>
          </div>
        </div>
        <p className="text-sm lg:text-lg 2xl:text-xl my-2 md:my-6">
          (Tức ngày 12 tháng 08 năm Giáp Thìn)
        </p>
        <h5 className="font-secondary mt-2 text-center text-sm lg:text-lg 2xl:text-xl">
          TẠI TƯ GIA
        </h5>
        <p className="text-center text-sm lg:text-lg 2xl:text-xl my-2">
          Số nhà 395 - Tổ 3 - Thị trấn Chi Đông - Mê Linh - Hà Nội
        </p>
        {/* Chỉ Đường */}
        <div className="flex gap-x-2 items-center cursor-pointer hover:scale-110 hover:text-red-800 transition-all mt-4 animate-bounce">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 lg:size-8 2xl:size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </span>
          <a
            href="https://maps.app.goo.gl/NGoPXQpnGnwX8nir9?g_st=ic"
            target="_blank"
            className="font-secondary mt-2 text-center text-sm lg:text-lg 2xl:text-xl"
          >
            CHỈ ĐƯỜNG
          </a>
        </div>
      </div>
    </>
  );
};

export default Invitation;
