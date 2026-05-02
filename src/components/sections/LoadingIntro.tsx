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
        <motion.svg
          viewBox="0 0 520 160"
          className="mx-auto mb-8 h-28 w-full max-w-lg text-iron-orange"
          initial="hidden"
          animate="visible"
          onAnimationComplete={onComplete}
        >
          <motion.path
            d="M30 120 L150 40 L245 120 L342 58 L490 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: { duration: 1.25, ease: "easeInOut" },
              },
            }}
          />
          <motion.path
            d="M88 120 V78 M150 40 V120 M245 120 V78 M342 58 V120 M428 120 V88"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8 10"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 0.8,
                transition: { duration: 1.1, delay: 0.25, ease: "easeInOut" },
              },
            }}
          />
        </motion.svg>
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
