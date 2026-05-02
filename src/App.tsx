import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";

const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const ProjectsPage = lazy(() =>
  import("./pages/Projects").then((module) => ({ default: module.ProjectsPage })),
);
const ContactPage = lazy(() =>
  import("./pages/Contact").then((module) => ({ default: module.ContactPage })),
);

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(() => {
      if (location.hash) {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        target?.scrollIntoView({
          behavior: prefersReduced ? "auto" : "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
      }
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [location]);

  return null;
}

function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || window.innerWidth < 768) {
      return;
    }

    let frame = 0;
    let cancelled = false;
    let lenis: { raf: (time: number) => void; destroy: () => void } | undefined;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) {
        return;
      }

      lenis = new Lenis({
        duration: 1.05,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);
}

export default function App() {
  useLenis();

  return (
    <>
      <Navbar />
      <ScrollManager />
      <Suspense
        fallback={
          <div className="min-h-screen bg-iron-dark pt-28 text-center text-sm font-black uppercase tracking-[0.28em] text-iron-orange">
            Loading IronPeak
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
