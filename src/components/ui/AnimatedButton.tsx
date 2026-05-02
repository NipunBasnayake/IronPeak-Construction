import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { clsx } from "clsx";

type NativeButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onDrag"
  | "onDragEnd"
  | "onDragStart"
>;

type AnimatedButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
} & NativeButtonProps;

export function AnimatedButton({
  children,
  className,
  variant = "primary",
  href,
  type = "button",
  ...props
}: AnimatedButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.25 });
  const rotate = useTransform(springX, [-18, 18], [-1.5, 1.5]);

  const classes = clsx(
    "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-sm px-6 py-3 text-sm font-black uppercase tracking-[0.14em] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-iron-orange focus-visible:ring-offset-2 focus-visible:ring-offset-iron-dark",
    variant === "primary" &&
      "bg-iron-orange text-white shadow-[0_18px_45px_rgba(249,115,22,0.28)] hover:bg-orange-500",
    variant === "secondary" &&
      "border border-white/25 bg-white/10 text-white backdrop-blur hover:border-iron-orange/70 hover:bg-iron-orange/15",
    variant === "ghost" &&
      "border border-transparent text-white hover:border-white/20 hover:bg-white/10",
    className,
  );

  const motionProps = {
    style: { x: springX, y: springY, rotate },
    onMouseMove: (event: MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
      y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
    },
    onMouseLeave: () => {
      x.set(0);
      y.set(0);
    },
    whileTap: { scale: 0.97 },
  };

  const content = (
    <>
      <span className="absolute inset-0 translate-x-[-120%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[120%]" />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} type={type} {...motionProps} {...props}>
      {content}
    </motion.button>
  );
}
