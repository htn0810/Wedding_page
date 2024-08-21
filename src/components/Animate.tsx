import { animateItem } from "@/constant/animate.constant";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  animateType: Variants;
  children?: ReactNode;
  className?: string;
};

const Animate = (props: Props) => {
  const { animateType, children, className } = props;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={animateType}
    >
      <motion.div variants={animateItem} className={className}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Animate;
