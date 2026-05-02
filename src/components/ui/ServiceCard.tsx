import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
      className="group relative min-h-[270px] overflow-hidden border border-white/10 bg-[#0b0f14]/85 p-7 shadow-industrial transition duration-300 hover:border-iron-orange/70 hover:shadow-[0_24px_70px_rgba(249,115,22,0.16)]"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-iron-orange to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-iron-orange to-transparent" />
      </div>
      <div className="relative flex h-full flex-col">
        <div className="mb-8 flex h-14 w-14 items-center justify-center border border-white/15 bg-white/[0.06] text-iron-orange transition duration-300 group-hover:scale-110 group-hover:border-iron-orange/60">
          <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-black uppercase leading-tight text-white">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
        <span className="mt-auto pt-6 text-xs font-black uppercase tracking-[0.28em] text-white/35 transition group-hover:text-iron-orange">
          0{index + 1}
        </span>
      </div>
    </motion.article>
  );
}
