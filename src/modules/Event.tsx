import Animate from "@/components/Animate";
import CustomImage from "@/components/CustomImage";
import { fadeLeft, fadeUpLeft, fadeUpRight } from "@/constant/animate.constant";
import { IMAGES } from "@/constant/images.constant";

const Event = () => {
  return (
    <>
      <div className="mt-6 relative">
        <CustomImage
          img={IMAGES.Event}
          className="w-full h-full object-cover"
        />
        <Animate animateType={fadeUpLeft}>
          <h5 className="font-semibold mt-2 text-center text-sm lg:text-lg 2xl:text-xl absolute bottom-1 md:bottom-4 left-1/2 -translate-x-1/2 font-primary">
            SỰ KIỆN
          </h5>
        </Animate>
      </div>
      <Animate animateType={fadeUpRight}>
        <h5 className="font-primary mt-2 text-center text-sm lg:text-lg 2xl:text-xl">
          QUAN TRỌNG
        </h5>
      </Animate>
      <div className="px-6 md:px-20 lg:px-40 2xl:px-60 py-5 flex flex-col justify-center items-center">
        {/* Timeline */}
        <div>
          <Animate animateType={fadeLeft}>
            <div className="flex gap-x-4 items-end mb-4">
              <span className="text-xs lg:text-lg 2xl:text-xl font-secondary font-light text-center">
                16:45
              </span>
              <span className="w-20 block h-[2px] bg-black"></span>
              <span className="text-xs lg:text-lg 2xl:text-xl font-secondary font-light text-center">
                Đón khách mời
              </span>
            </div>
          </Animate>
          <Animate animateType={fadeLeft}>
            <div className="flex gap-x-4 items-end mb-4">
              <span className="text-xs lg:text-lg 2xl:text-xl font-secondary font-light text-center">
                17:15
              </span>
              <span className="w-20 block h-[2px] bg-black"></span>
              <span className="text-xs lg:text-lg 2xl:text-xl font-secondary font-light text-center">
                Khai tiệc
              </span>
            </div>
          </Animate>
        </div>
      </div>
    </>
  );
};

export default Event;
