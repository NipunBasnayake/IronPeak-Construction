import { motion } from "framer-motion";
import { AnimatedButton } from "../ui/AnimatedButton";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-iron-orange py-20 text-white">
      <div className="absolute inset-0 blueprint-grid opacity-25 mix-blend-multiply" />
      <div className="safe-container relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="font-display text-5xl uppercase leading-[0.9] text-white text-balance sm:text-7xl">
            Ready To Build Something Strong?
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/88">
            Let&apos;s turn your vision into a durable, high-quality construction
            project.
          </p>
        </motion.div>
        <AnimatedButton href="/#contact" variant="secondary" className="border-white/40 bg-black/20">
          Request Free Consultation
        </AnimatedButton>
      </div>
    </section>
  );
}
