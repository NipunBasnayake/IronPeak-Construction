import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDownRight, HardHat, ShieldCheck } from "lucide-react";
import { images } from "../../assets/images/assets";
import { videos } from "../../assets/videos/assets";
import { AnimatedButton } from "../ui/AnimatedButton";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 35, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 35, damping: 18 });
  const x = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const y = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-iron-dark"
      onMouseMove={(event) => {
        if (shouldReduceMotion || window.matchMedia("(pointer: coarse)").matches) {
          return;
        }
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={images.heroFallback} />
        <img
          src={images.heroFallback}
          alt="Cranes and construction structure at a high-rise job site"
          width={2200}
          height={1467}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        />
      </picture>
      <video
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={images.heroFallback}
        aria-hidden="true"
      >
        <source src={videos.hero} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#05080d]/95 via-[#07111f]/76 to-[#07111f]/30" />
      <div className="absolute inset-0 blueprint-grid opacity-35 mix-blend-screen" />
      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute right-4 top-28 hidden w-[36vw] max-w-xl border border-white/10 p-8 text-white/20 lg:block"
      >
        <div className="h-48 border border-iron-orange/25" />
        <div className="mt-5 grid grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className="h-px bg-white/15" />
          ))}
        </div>
      </motion.div>

      <div className="safe-container relative z-10 flex min-h-screen items-center pt-24">
        <div className="max-w-5xl py-24">
          <motion.p
            className="mb-5 text-xs font-black uppercase tracking-[0.34em] text-iron-orange"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
          >
            Building America&apos;s Future With Strength & Precision
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(4.6rem,14vw,10.8rem)] uppercase leading-[0.78] tracking-normal text-white text-balance"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          >
            We Build
            <span className="block text-white/90">What Others</span>
            <span className="block text-iron-orange">Only Imagine</span>
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.72 }}
          >
            From commercial towers to residential developments, IronPeak
            Construction Co. delivers durable, modern, and high-quality
            construction solutions across America.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.65 }}
          >
            <AnimatedButton href="/#projects">Explore Projects</AnimatedButton>
            <AnimatedButton href="/#contact" variant="secondary">
              Request a Quote
            </AnimatedButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="safe-container pointer-events-none relative z-10 -mt-36 hidden justify-end gap-4 pb-10 lg:flex"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.72 }}
      >
        <div className="w-56 border border-white/12 bg-black/35 p-5 backdrop-blur-xl">
          <HardHat className="mb-5 text-iron-orange" size={28} />
          <p className="font-display text-4xl leading-none text-white">120+</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Skilled Professionals
          </p>
        </div>
        <div className="w-64 border border-white/12 bg-black/35 p-5 backdrop-blur-xl">
          <ShieldCheck className="mb-5 text-iron-orange" size={28} />
          <p className="font-display text-4xl leading-none text-white">0.92</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Safety Experience Modifier
          </p>
        </div>
      </motion.div>

      <a
        href="/#stats"
        aria-label="Scroll to stats"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-white/70 md:flex"
      >
        Scroll <ArrowDownRight size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
