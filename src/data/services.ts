import {
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  Hammer,
  Home,
} from "lucide-react";

export const services = [
  {
    title: "Commercial Construction",
    description:
      "Ground-up commercial builds engineered for occupancy, durability, and a commanding civic presence.",
    icon: Building2,
  },
  {
    title: "Residential Development",
    description:
      "Modern communities, custom homes, and multi-family developments built with disciplined finish quality.",
    icon: Home,
  },
  {
    title: "Industrial Facilities",
    description:
      "Warehouses, logistics hubs, and heavy-use facilities planned around throughput, safety, and uptime.",
    icon: Factory,
  },
  {
    title: "Renovation & Remodeling",
    description:
      "High-impact upgrades that modernize existing structures without compromising schedule or operations.",
    icon: Hammer,
  },
  {
    title: "Project Management",
    description:
      "Clear budgets, coordinated trades, and proactive field leadership from kickoff to closeout.",
    icon: ClipboardCheck,
  },
  {
    title: "Architecture & Planning",
    description:
      "Blueprints, feasibility studies, and constructability guidance before steel, concrete, and crews move.",
    icon: DraftingCompass,
  },
] as const;
