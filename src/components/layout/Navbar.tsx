import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { AnimatedButton } from "../ui/AnimatedButton";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#07111f]/82 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="safe-container flex h-20 items-center justify-between">
        <Link
          to="/#home"
          className="group flex items-center gap-3"
          aria-label="IronPeak Construction Co. home"
        >
          <span className="relative flex h-11 w-11 items-center justify-center border border-iron-orange bg-iron-orange/10">
            <span className="font-display text-xl text-white">IP</span>
            <span className="absolute -right-1 -top-1 h-3 w-3 bg-iron-orange" />
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.18em] text-white">
              IronPeak
            </span>
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.32em] text-slate-400">
              Construction Co.
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-xs font-black uppercase tracking-[0.16em] text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <AnimatedButton href="/#contact" className="min-h-11 px-5 py-2">
            Get a Quote
          </AnimatedButton>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-white/10 text-white backdrop-blur lg:hidden"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={clsx(
          "overflow-hidden border-t border-white/10 bg-[#07111f]/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "max-h-[620px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="safe-container grid gap-1 py-5">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className="border border-transparent px-3 py-3 text-sm font-black uppercase tracking-[0.18em] text-slate-200 hover:border-white/10 hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div onClick={() => setOpen(false)}>
            <AnimatedButton href="/#contact" className="mt-3 w-full">
              Get a Quote
            </AnimatedButton>
          </div>
        </div>
      </div>
    </header>
  );
}
