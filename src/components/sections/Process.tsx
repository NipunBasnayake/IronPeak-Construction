import {
  ClipboardList,
  DraftingCompass,
  Handshake,
  MapPinned,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionTitle } from "../ui/SectionTitle";

const steps = [
  {
    title: "Consultation",
    description: "We define scope, goals, risks, and the decision path before work begins.",
    icon: Handshake,
  },
  {
    title: "Site Analysis",
    description: "Field conditions, logistics, access, utilities, and constraints are mapped early.",
    icon: MapPinned,
  },
  {
    title: "Design & Budgeting",
    description: "We refine drawings, sequencing, and cost controls into a buildable plan.",
    icon: DraftingCompass,
  },
  {
    title: "Construction",
    description: "Coordinated crews execute with daily accountability and safety discipline.",
    icon: ClipboardList,
  },
  {
    title: "Quality Inspection",
    description: "Punch, testing, and compliance reviews protect the finished structure.",
    icon: ShieldCheck,
  },
  {
    title: "Final Handover",
    description: "Documentation, turnover, and owner orientation close the project cleanly.",
    icon: Truck,
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) {
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      line.style.transform = "scaleY(1)";
      return;
    }

    import("gsap").then(async ({ default: gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) {
        return;
      }
      gsap.registerPlugin(ScrollTrigger);
      const trigger = gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            end: "bottom 45%",
            scrub: true,
          },
        },
      );

      cleanup = () => {
        trigger.scrollTrigger?.kill();
        trigger.kill();
      };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-[#07111f]"
    >
      <div className="absolute inset-0 blueprint-grid opacity-35" />
      <div className="safe-container relative">
        <SectionTitle eyebrow="Process" title="From Blueprint To Reality" align="center">
          <p>
            Every project moves through a clear sequence, with owners seeing the
            same plan that our field teams build from.
          </p>
        </SectionTitle>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-6 top-0 h-full w-px bg-white/12 md:left-1/2" />
          <div
            ref={lineRef}
            className="absolute left-6 top-0 h-full w-px bg-iron-orange md:left-1/2"
          />
          <div className="grid gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const right = index % 2 === 1;
              return (
                <article
                  key={step.title}
                  className={`relative grid gap-5 pl-16 md:grid-cols-2 md:pl-0 ${
                    right ? "md:[&>div]:col-start-2" : ""
                  }`}
                >
                  <span className="absolute left-2 top-2 z-10 flex h-9 w-9 items-center justify-center border border-iron-orange bg-[#07111f] text-xs font-black text-white md:left-[calc(50%-1.125rem)]">
                    {index + 1}
                  </span>
                  <div className="border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                    <Icon className="mb-5 text-iron-orange" size={28} />
                    <h3 className="text-xl font-black uppercase text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
