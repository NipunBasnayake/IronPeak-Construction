import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { images } from "../../assets/images/assets";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { OptimizedImage } from "../ui/OptimizedImage";
import { SectionTitle } from "../ui/SectionTitle";

const statements = [
  "Mission: deliver construction that strengthens communities and withstands real use.",
  "Vision: be America's most trusted builder for ambitious commercial and residential work.",
  "Quality: pair premium materials with relentless field accountability.",
];

export function About() {
  const { ref, revealProps } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-iron-dark">
      <div className="absolute inset-0 concrete-texture opacity-35" />
      <div className="safe-container relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div ref={ref} {...revealProps} className="relative">
          <p className="absolute -left-3 top-0 hidden origin-left -rotate-90 font-display text-7xl uppercase leading-none text-white/[0.04] lg:block">
            Since 1999
          </p>
          <div className="relative overflow-hidden border border-white/10">
            <OptimizedImage
              src={images.architect}
              alt="Construction engineer reviewing building plans at an active site"
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 border-t border-r border-white/15 bg-black/45 p-5 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-iron-orange">
                Since
              </p>
              <p className="font-display text-6xl leading-none text-white">1999</p>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionTitle eyebrow="About IronPeak" title="Built On Trust. Driven By Quality.">
            <p>
              IronPeak Construction Co. is a Dallas-based builder serving
              demanding owners across the United States with disciplined
              planning, premium execution, and calm jobsite leadership.
            </p>
          </SectionTitle>
          <div className="grid gap-4">
            {statements.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className="flex gap-4 border border-white/10 bg-white/[0.04] p-5"
              >
                <CheckCircle2 className="mt-1 shrink-0 text-iron-orange" size={22} />
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
