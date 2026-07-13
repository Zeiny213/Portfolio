"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

type MotionSectionProps = HTMLMotionProps<"section">;

export function MotionSection({ children, className = "", ...props }: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
