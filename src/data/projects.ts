import { images } from "../assets/images/assets";

export const projects = [
  {
    title: "Skyline Business Tower",
    location: "Dallas, Texas",
    type: "Commercial",
    year: "2026",
    image: images.commercialTower,
    summary:
      "A 42-story business tower with high-efficiency envelope systems and a fast-track concrete core schedule.",
  },
  {
    title: "Austin Luxury Villas",
    location: "Austin, Texas",
    type: "Residential",
    year: "2025",
    image: images.villa,
    summary:
      "Twelve private hillside villas with stone, steel, glass, and refined outdoor living spaces.",
  },
  {
    title: "Denver Industrial Warehouse",
    location: "Denver, Colorado",
    type: "Industrial",
    year: "2025",
    image: images.warehouse,
    summary:
      "A high-clearance logistics facility optimized for fleet circulation, loading efficiency, and future expansion.",
  },
  {
    title: "Miami Retail Complex",
    location: "Miami, Florida",
    type: "Commercial",
    year: "2024",
    image: images.retail,
    summary:
      "Mixed-use retail shells, shade structures, and hospitality-grade exterior finishes for a coastal market.",
  },
  {
    title: "Phoenix Concrete Works",
    location: "Phoenix, Arizona",
    type: "Infrastructure",
    year: "2024",
    image: images.concrete,
    summary:
      "Concrete foundations, retaining systems, and site infrastructure delivered under desert heat constraints.",
  },
  {
    title: "Seattle Urban Offices",
    location: "Seattle, Washington",
    type: "Office",
    year: "2023",
    image: images.office,
    summary:
      "A polished adaptive office build-out with flexible floor plates, upgraded MEP, and acoustic focus rooms.",
  },
] as const;
