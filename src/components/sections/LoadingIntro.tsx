import { motion } from "framer-motion";

type LoadingIntroProps = {
  onComplete: () => void;
};

export function LoadingIntro({ onComplete }: LoadingIntroProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#05080d]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="absolute inset-0 blueprint-grid opacity-45"
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: "120px 80px" }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />
      <div className="relative min-w-[280px] px-6 text-center">
        <motion.img
          src="/IronPeak%20Logo.png"
          alt="IronPeak Construction Co. logo"
          className="mx-auto mb-8 h-28 w-28 object-contain"
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onAnimationComplete={onComplete}
        />
        <motion.p
          className="font-display text-3xl uppercase leading-none text-white sm:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.55 }}
        >
          IronPeak Construction Co.
        </motion.p>
        <motion.div
          className="mx-auto mt-7 h-px w-52 overflow-hidden bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="h-full bg-iron-orange"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ delay: 0.75, duration: 0.9, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
