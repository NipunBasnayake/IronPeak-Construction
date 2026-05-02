import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  DollarSign,
  HardHat,
  Layers3,
  Shield,
} from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

const reasons = [
  { title: "Licensed & Insured", icon: BadgeCheck },
  { title: "Safety-First Process", icon: Shield },
  { title: "On-Time Delivery", icon: Clock3 },
  { title: "Premium Materials", icon: Layers3 },
  { title: "Transparent Pricing", icon: DollarSign },
  { title: "Expert Engineering Team", icon: HardHat },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#05080d]">
      <p className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 font-display text-[17vw] uppercase leading-none text-white/[0.035]">
        Quality
      </p>
      <div className="safe-container relative">
        <SectionTitle eyebrow="Why Choose Us" title="Built For Owners Who Expect More">
          <p>
            IronPeak brings the polish of a premium builder and the rigor of a
            field-first construction partner.
          </p>
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="steel-sheen border border-white/10 bg-white/[0.045] p-6"
              >
                <Icon className="text-iron-orange" size={30} />
                <h3 className="mt-8 text-xl font-black uppercase leading-tight text-white">
                  {reason.title}
                </h3>
                <div className="mt-5 h-px w-16 bg-iron-orange" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
