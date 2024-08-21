import { Variants } from "framer-motion";

const transition = {
  duration: 1,
  ease: "easeInOut",
  times: [0, 0.2, 0.5, 0.8, 1],
  repeatDelay: 1,
};

export const animateItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

// Fade animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: transition,
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -300 },
  show: {
    opacity: 1,
    y: 0,
    transition: transition,
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: transition,
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: transition,
  },
};

export const fadeUpLeft: Variants = {
  hidden: { opacity: 0, x: -100, y: 100 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: transition,
  },
};

export const fadeUpRight: Variants = {
  hidden: { opacity: 0, x: 100, y: 100 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: transition,
  },
};

// Flip animation
export const flipLeft: Variants = {
  hidden: { rotateY: -90, opacity: 0 },
  show: {
    rotateY: 0,
    opacity: 1,
    transition: transition,
  },
};

export const flipRight: Variants = {
  hidden: { rotateY: 90, opacity: 0 },
  show: {
    rotateY: 0,
    opacity: 1,
    transition: transition,
  },
};

export const flipUp: Variants = {
  hidden: { rotateX: 90, opacity: 0 },
  show: {
    rotateX: 0,
    opacity: 1,
    transition: transition,
  },
};

export const flipDown: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  show: {
    rotateX: 0,
    opacity: 1,
    transition: transition,
  },
};

export const zoomIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: transition,
  },
};

export const zoomInUp: Variants = {
  hidden: { scale: 0, opacity: 0, y: 100 },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: transition,
  },
};

export const zoomInDown: Variants = {
  hidden: { scale: 0, opacity: 0, y: -100 },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: transition,
  },
};

export const zoomOut: Variants = {
  hidden: { scale: 2, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: transition,
  },
};

export const zoomOutUp: Variants = {
  hidden: { scale: 2, opacity: 0, y: -100 },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: transition,
  },
};

export const zoomOutDown: Variants = {
  hidden: { scale: 2, opacity: 0, y: 100 },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: transition,
  },
};

export const zoomOutLeft: Variants = {
  hidden: { scale: 2, opacity: 0, x: -100 },
  show: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: transition,
  },
};

export const zoomOutRight: Variants = {
  hidden: { scale: 2, opacity: 0, x: 100 },
  show: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: transition,
  },
};
