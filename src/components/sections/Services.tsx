import { services } from "../../data/services";
import { SectionTitle } from "../ui/SectionTitle";
import { ServiceCard } from "../ui/ServiceCard";

export function Services() {
  return (
    <section id="services" className="section-padding bg-[#05080d]">
      <div className="safe-container">
        <SectionTitle eyebrow="Capabilities" title="Heavy-Duty Construction Expertise">
          <p>
            Six integrated service lines keep planning, field execution, safety,
            cost control, and finish quality moving as one accountable system.
          </p>
        </SectionTitle>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
