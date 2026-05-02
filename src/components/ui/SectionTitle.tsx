import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { clsx } from "clsx";
import { useScrollReveal } from "../../hooks/useScrollReveal";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionTitle({
  eyebrow,
  title,
  align = "left",
  children,
}: SectionTitleProps) {
  const { ref, revealProps } = useScrollReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      {...revealProps}
      className={clsx(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.34em] text-iron-orange">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl uppercase leading-[0.95] text-white text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children && (
        <div className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          {children}
        </div>
      )}
    </motion.div>
  );
}
