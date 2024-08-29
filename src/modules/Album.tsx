import Animate from "@/components/Animate";
import CustomImage from "@/components/CustomImage";
import {
  fadeUpRight,
  fadeUpLeft,
  fadeLeft,
  fadeRight,
  fadeUp,
  fadeDown,
} from "@/constant/animate.constant";
import { IMAGES } from "@/constant/images.constant";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

const Album = () => {
  // const [isAppleDevice, setIsAppleDevice] = useState(false);
  // useEffect(() => {
  //   const userAgent = window.navigator.userAgent;

  //   const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  //   const isMacOS = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);

  //   setIsAppleDevice(isIOS || isMacOS);
  // }, []);
  return (
    <div className="mt-0 md:mt-6 w-full">
      <div className="grid grid-cols-2 gap-x-4 items-end">
        <Animate
          animateType={fadeRight}
          className="font-primary mt-2 text-center text-lg lg:text-2xl 2xl:text-4xl"
        >
          Album hình cưới
        </Animate>
        <Animate
          animateType={fadeLeft}
          className="w-full h-1 bg-black"
        ></Animate>
      </div>
      <div className="mt-6 lg:mt-10 2xl:mt-14 grid grid-cols-2 gap-x-4 lg:gap-x-8 2xl:gap-x-10">
        <div className="flex flex-col gap-y-4">
          <Animate animateType={fadeUpRight}>
            <CustomImage img={IMAGES.Album1} />
          </Animate>
          <Animate animateType={fadeUp}>
            <span className="text-xs sm:text-sm lg:text-lg 2xl:text-xl text-wrap">
              Ngày hôm nay tia nắng ấy chỉ thuộc về riêng em, em mong rằng sau
              này ngày nào thức dậy em cũng được thấy tia nắng ấy!
            </span>
          </Animate>
        </div>
        <div className="flex flex-col gap-y-4">
          <Animate animateType={fadeDown}>
            <span className="text-xs sm:text-sm lg:text-lg 2xl:text-xl text-wrap">
              Một ngày nắng đẹp em gặp anh, em bỗng biết rằng thì ra còn có
              những thứ đẹp hơn cả nắng, chính là nụ cười của anh!
            </span>
          </Animate>
          <Animate animateType={fadeUpLeft}>
            <CustomImage img={IMAGES.Album2} />
          </Animate>
        </div>
      </div>
      {/* <div className="mt-6 lg:mt-10 2xl:mt-14 grid grid-cols-2 gap-x-4 lg:gap-x-8 2xl:gap-x-10">
        <div className="h-full col-span-1">
          <Animate animateType={fadeRight} className="h-full">
            <CustomImage img={IMAGES.Album3} className="h-full" />
          </Animate>
        </div>
        <div className="col-span-1 flex flex-col gap-y-4 lg:gap-y-8 2xl:gap-y-10 h-full">
          <div className={`${isAppleDevice ? "h-1/2" : "h-full"}`}>
            <motion.img
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeLeft}
              className="h-full object-cover"
              src={IMAGES.Album4.url}
              alt="Image"
              srcSet={`
                ${IMAGES.Album4.xs} 480w,
                ${IMAGES.Album4.md} 1279w,
                ${IMAGES.Album4.xl} 1280w
                `}
              sizes="
                (max-width: 480px) 100vw,
                (max-width: 1279px) 100vw,
                (min-width: 1280px) 100vw
                "
            ></motion.img>
          </div>
          <div className={`${isAppleDevice ? "h-1/2" : "h-full"}`}>
            <motion.img
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeLeft}
              className="h-full object-cover"
              src={IMAGES.Album5.url}
              alt="Image"
              srcSet={`
                ${IMAGES.Album5.xs} 480w,
                ${IMAGES.Album5.md} 1279w,
                ${IMAGES.Album5.xl} 1280w
                `}
              sizes="
                (max-width: 480px) 100vw,
                (max-width: 1279px) 100vw,
                (min-width: 1280px) 100vw
                "
            ></motion.img>
          </div>
        </div>
      </div> */}
      <div className="mt-6 lg:mt-10 2xl:mt-14 grid grid-cols-2 gap-4 lg:gap-8 2xl:gap-10">
        <Animate animateType={fadeRight}>
          <CustomImage img={IMAGES.Album3} />
        </Animate>
        <Animate animateType={fadeLeft}>
          <CustomImage img={IMAGES.Album4} />
        </Animate>
        <Animate animateType={fadeRight}>
          <CustomImage img={IMAGES.Album6} />
        </Animate>
        <Animate animateType={fadeLeft}>
          <CustomImage img={IMAGES.Album7} />
        </Animate>
        <Animate animateType={fadeRight}>
          <CustomImage img={IMAGES.Album8} />
        </Animate>
        <Animate animateType={fadeLeft}>
          <CustomImage img={IMAGES.Album9} />
        </Animate>
        <Animate animateType={fadeRight}>
          <CustomImage img={IMAGES.Album10} />
        </Animate>
        <Animate animateType={fadeLeft}>
          <CustomImage img={IMAGES.Album11} />
        </Animate>
      </div>
    </div>
  );
};

export default Album;
