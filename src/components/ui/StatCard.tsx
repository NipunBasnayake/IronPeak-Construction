import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatCardProps = {
  value: number;
  suffix: string;
  label: string;
};

export function StatCard({ value, suffix, label }: StatCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1600, bounce: 0 });
  const [animatedDisplay, setAnimatedDisplay] = useState(0);
  const display = shouldReduceMotion && inView ? value : animatedDisplay;

  useEffect(() => {
    if (inView && !shouldReduceMotion) {
      motionValue.set(value);
    }
  }, [inView, motionValue, shouldReduceMotion, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => setAnimatedDisplay(Math.round(latest)));
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
      className="relative overflow-hidden border border-white/10 bg-white/[0.04] p-6 shadow-industrial backdrop-blur"
      aria-label={`${value}${suffix} ${label}`}
    >
      <div className="absolute right-0 top-0 h-16 w-16 border-l border-b border-iron-orange/35" />
      <p className="font-display text-5xl leading-none text-white sm:text-6xl">
        {display}
        <span className="text-iron-orange">{suffix}</span>
      </p>
      <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}
