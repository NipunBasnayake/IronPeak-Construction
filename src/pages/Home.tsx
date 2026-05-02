import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { About } from "../components/sections/About";
import { CTA } from "../components/sections/CTA";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { LoadingIntro } from "../components/sections/LoadingIntro";
import { Process } from "../components/sections/Process";
import { Projects } from "../components/sections/Projects";
import { Services } from "../components/sections/Services";
import { Stats } from "../components/sections/Stats";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";

const Testimonials = lazy(() =>
  import("../components/sections/Testimonials").then((module) => ({
    default: module.Testimonials,
  })),
);

export function Home() {
  const [loading, setLoading] = useState(() => !sessionStorage.getItem("ironpeak-loaded"));

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [loading]);

  function completeIntro() {
    window.setTimeout(() => {
      sessionStorage.setItem("ironpeak-loaded", "true");
      setLoading(false);
    }, 420);
  }

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingIntro onComplete={completeIntro} />}
      </AnimatePresence>
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Process />
        <WhyChooseUs />
        <Suspense fallback={<div className="min-h-96 bg-iron-dark" />}>
          <Testimonials />
        </Suspense>
        <CTA />
        <Contact />
      </main>
    </>
  );
}
