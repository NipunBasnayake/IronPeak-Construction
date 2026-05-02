import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const quickLinks = ["About", "Services", "Projects", "Process", "Contact"];
const footerServices = [
  "Commercial Construction",
  "Residential Development",
  "Industrial Facilities",
  "Project Management",
];
const socialLinks = [
  {
    label: "IronPeak on Facebook",
    href: "https://www.facebook.com/ironpeakconstruction",
    icon: FaFacebookF,
  },
  {
    label: "IronPeak on Instagram",
    href: "https://www.instagram.com/ironpeakconstruction",
    icon: FaInstagram,
  },
  {
    label: "IronPeak on LinkedIn",
    href: "https://www.linkedin.com/company/ironpeak-construction",
    icon: FaLinkedinIn,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05080d] py-14">
      <div className="safe-container grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
        <div>
          <Link to="/#home" className="inline-flex items-center gap-3">
            <img
              src="/IronPeak%20Logo.png"
              alt="IronPeak Construction Co. logo"
              className="w-40 object-contain"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Building America&apos;s future with strength, precision, and
            field-tested construction leadership from Dallas to the national
            stage.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                rel="noopener noreferrer"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-iron-orange hover:text-iron-orange"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.24em] text-white">
            Quick Links
          </h3>
          <div className="mt-5 grid gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link}
                to={link === "Projects" ? "/projects" : `/#${link.toLowerCase()}`}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.24em] text-white">
            Services
          </h3>
          <div className="mt-5 grid gap-3">
            {footerServices.map((service) => (
              <Link
                key={service}
                to="/#services"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {service}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.24em] text-white">
            Contact
          </h3>
          <div className="mt-5 grid gap-4 text-sm text-slate-400">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 text-iron-orange" size={17} />
              Dallas, Texas, USA
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 text-iron-orange" size={17} />
              +1 (214) 555-0198
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 text-iron-orange" size={17} />
              contact@ironpeakconstruction.com
            </p>
          </div>
        </div>
      </div>
      <div className="safe-container mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
        © 2026 IronPeak Construction Co. All rights reserved.
      </div>
    </footer>
  );
}
