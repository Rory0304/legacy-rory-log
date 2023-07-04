import type { Variants } from "framer-motion";

export const staggerImmediate: Variants = {
  animate: {
    transition: { staggerChildren: 0.01 },
  },
};

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0.3,
    transition: { duration: 0.3, willChange: "opacity" },
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, willChange: "opacity" },
  },
};

export const fadeInSlideToLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};
