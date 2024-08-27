import Animate from "@/components/Animate";
import { fadeDown } from "@/constant/animate.constant";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="w-full h-dvh bg-gray-50 flex flex-col items-center justify-center">
      <motion.div
        style={{ display: "inline-block" }}
        animate={{
          y: [0, -20, 0], // Moves up, then down, then back to the start
        }}
        transition={{
          duration: 1, // Total duration for one loop (in seconds)
          repeat: Infinity, // Infinite loop
          repeatType: "loop", // Continuous looping
          ease: "easeInOut", // Smoother easing
        }}
        className=" text-black text-2xl lg:text-4xl 2xl:text-7xl font-primary text-center animate-bounce"
      >
        Trung Kien - Hai Anh
      </motion.div>
      <Animate
        animateType={fadeDown}
        className="text-xs lg:text-lg 2xl:text-xl font-secondary font-light text-center mt-1 md:mt-4"
      >
        WEDDING
      </Animate>
    </div>
  );
};

export default Intro;
