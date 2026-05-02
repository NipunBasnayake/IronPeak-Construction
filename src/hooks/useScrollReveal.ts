import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return {
    ref,
    revealProps: {
      initial: { opacity: 0, y: 36 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
}
