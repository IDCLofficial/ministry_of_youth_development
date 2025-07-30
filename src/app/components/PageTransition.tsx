"use client";
import { Easing, motion, MotionProps, Transition } from "framer-motion";
import React from "react";

interface PageTransitionProps extends MotionProps {
  children: React.ReactNode;
  type?: "fade" | "fadeUp";
  transition?: Transition<unknown>;
}

export default function PageTransition({ children, type = "fade", ...rest }: PageTransitionProps) {
  let initial, animate, transition, viewport;
  if (type === "fadeUp") {
    initial = { opacity: 0, y: 80 };
    animate = { opacity: 1, y: 0 };
    transition = { duration: 1, ease: "easeInOut" as Easing, ...rest.transition };
    viewport = { once: false, ...rest.viewport };
    return (
      <motion.div
        initial={initial}
        whileInView={animate}
        transition={transition}
        viewport={viewport}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
  // Default fade
  initial = { y: 40 };
  animate = { y: 0};
  transition = { duration: 1.3, ease: "easeInOut" as Easing, ...rest.transition };
  return (
    <motion.div initial={initial} whileInView={animate} transition={transition} {...rest}>
      {children}
    </motion.div>
  );
}

// Convenience export for fade-up
export function FadeUpTransition({ children, ...rest }: { children: React.ReactNode } & MotionProps) {
  return (
    <PageTransition type="fadeUp" {...rest}>
      {children}
    </PageTransition>
  );
} 