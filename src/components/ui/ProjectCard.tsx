import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

type ProjectCardProps = {
  title: string;
  location: string;
  type: string;
  year: string;
  image: string;
  summary: string;
  index: number;
};

export function ProjectCard({
  title,
  location,
  type,
  year,
  image,
  summary,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="group relative isolate min-h-[420px] overflow-hidden border border-white/10 bg-iron-charcoal shadow-industrial"
    >
      <img
        src={image}
        alt={`${title} construction project in ${location}`}
        loading={index < 2 ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05080d] via-[#05080d]/55 to-transparent" />
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:bg-iron-orange/10 group-hover:opacity-100" />
      <div className="relative flex min-h-[420px] flex-col justify-end p-6 sm:p-7">
        <div className="mb-4 flex flex-wrap gap-2">
          {[type, location, year].map((meta) => (
            <span
              key={meta}
              className="border border-white/15 bg-black/35 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.18em] text-white backdrop-blur"
            >
              {meta}
            </span>
          ))}
        </div>
        <h3 className="max-w-md font-display text-3xl uppercase leading-none text-white">
          {title}
        </h3>
        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
          {summary}
        </p>
        <div className="mt-6">
          <AnimatedButton variant="secondary" className="min-h-10 px-4 py-2">
            <span className="inline-flex items-center gap-2">
              View Case Study <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </AnimatedButton>
        </div>
      </div>
    </motion.article>
  );
}
