import { flipLeft, zoomInUp } from "@/constant/animate.constant";
import Animate from "@/components/Animate";
import CustomImage from "@/components/CustomImage";
import { IMAGES } from "@/constant/images.constant";
import { motion } from "framer-motion";

const animateItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Dresscode = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-x-4 lg:gap-x-6 2xl:gap-x-10 mt-8 lg:mt-10 2xl:mt-16">
        <div className="col-span-3">
          <Animate animateType={flipLeft}>
            <CustomImage img={IMAGES.Dresscode} />
          </Animate>
        </div>
        <div className="col-span-2 flex items-center justify-center flex-col">
          <Animate animateType={zoomInUp}>
            <span className="text-lg lg:text-2xl 2xl:text-4xl font-semibold font-primary mb-2 md:mb-6">
              Dress code
            </span>
          </Animate>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={zoomInUp}
            className="w-full md:w-3/4"
          >
            <motion.div variants={animateItem} className="w-full">
              <div className="w-full h-6 sm:h-10 bg-black mb-3 md:mb-4"></div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={zoomInUp}
            className="w-full md:w-3/4"
          >
            <motion.div variants={animateItem} className="w-full">
              <div className="w-full h-6 sm:h-10 bg-gray-500 mb-3 md:mb-4"></div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={zoomInUp}
            className="w-full md:w-3/4"
          >
            <motion.div variants={animateItem} className="w-full">
              <div className="w-full h-6 sm:h-10 bg-white border-2 border-black mb-3 md:mb-4"></div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={zoomInUp}
            className="w-full md:w-3/4"
          >
            <motion.div variants={animateItem} className="w-full">
              <div className="w-full h-6 sm:h-10 bg-pink-500 mb-3 md:mb-4"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <p className="text-center text-sm lg:text-lg 2xl:text-xl mt-6">
        Sự hiện diện của bạn là niềm vinh hạnh cho gia đình chúng mình!
      </p>
    </>
  );
};

export default Dresscode;
