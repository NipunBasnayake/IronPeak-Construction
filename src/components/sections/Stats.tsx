import { StatCard } from "../ui/StatCard";

const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 480, suffix: "+", label: "Projects Completed" },
  { value: 120, suffix: "+", label: "Skilled Professionals" },
  { value: 35, suffix: "+", label: "Cities Served" },
];

export function Stats() {
  return (
    <section id="stats" className="relative bg-[#05080d] py-16">
      <div className="safe-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
