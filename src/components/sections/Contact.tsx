import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { images } from "../../assets/images/assets";
import { AnimatedButton } from "../ui/AnimatedButton";
import { SectionTitle } from "../ui/SectionTitle";

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

function validateForm(form: FormState) {
  const next: Partial<Record<keyof FormState, string>> = {};
  if (form.name.trim().length < 2) {
    next.name = "Enter your name.";
  }
  if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    next.email = "Enter a valid email.";
  }
  if (form.phone.trim().length < 7) {
    next.phone = "Enter a phone number.";
  }
  if (!form.projectType) {
    next.projectType = "Choose a project type.";
  }
  if (!form.budget) {
    next.budget = "Choose a budget range.";
  }
  if (form.message.trim().length < 10) {
    next.message = "Tell us a little more.";
  }
  return next;
}

const contactItems = [
  { icon: MapPin, label: "Dallas, Texas, USA" },
  { icon: Phone, label: "+1 (214) 555-0198" },
  { icon: Mail, label: "contact@ironpeakconstruction.com" },
  { icon: Clock, label: "Monday to Friday, 8:00 AM - 6:00 PM" },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const errors = useMemo(() => {
    return submitted ? validateForm(form) : {};
  }, [form, submitted]);

  const isValid = Object.keys(errors).length === 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(form);
    setSubmitted(true);
    setSuccess(false);
    if (Object.keys(nextErrors).length === 0) {
      setForm(initialForm);
      setSubmitted(false);
      setSuccess(true);
    }
  }

  function fieldClass(error?: string) {
    return `w-full border bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-iron-orange ${
      error ? "border-iron-orange" : "border-white/12"
    }`;
  }

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-[#07111f]"
    >
      <div className="absolute inset-0 concrete-texture opacity-30" />
      <div className="safe-container relative">
        <SectionTitle eyebrow="Contact" title="Tell Us What You Want To Build" align="center">
          <p>
            Share the basics and IronPeak will respond with a practical path
            forward, from first call to feasibility and field planning.
          </p>
        </SectionTitle>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
            className="border border-white/10 bg-white/[0.055] p-5 shadow-industrial backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Name
                <input
                  className={fieldClass(errors.name)}
                  value={form.name}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, name: event.target.value });
                  }}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className="text-xs text-iron-orange">{errors.name}</span>}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Email
                <input
                  className={fieldClass(errors.email)}
                  type="email"
                  value={form.email}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, email: event.target.value });
                  }}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="text-xs text-iron-orange">{errors.email}</span>}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Phone
                <input
                  className={fieldClass(errors.phone)}
                  value={form.phone}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, phone: event.target.value });
                  }}
                  placeholder="+1 (555) 000-0000"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <span className="text-xs text-iron-orange">{errors.phone}</span>}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Project Type
                <select
                  className={fieldClass(errors.projectType)}
                  value={form.projectType}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, projectType: event.target.value });
                  }}
                  aria-invalid={Boolean(errors.projectType)}
                >
                  <option value="">Select type</option>
                  <option>Commercial</option>
                  <option>Residential</option>
                  <option>Industrial</option>
                  <option>Renovation</option>
                  <option>Infrastructure</option>
                </select>
                {errors.projectType && (
                  <span className="text-xs text-iron-orange">{errors.projectType}</span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-300 sm:col-span-2">
                Budget Range
                <select
                  className={fieldClass(errors.budget)}
                  value={form.budget}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, budget: event.target.value });
                  }}
                  aria-invalid={Boolean(errors.budget)}
                >
                  <option value="">Select budget range</option>
                  <option>$250K - $1M</option>
                  <option>$1M - $5M</option>
                  <option>$5M - $15M</option>
                  <option>$15M+</option>
                </select>
                {errors.budget && <span className="text-xs text-iron-orange">{errors.budget}</span>}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-300 sm:col-span-2">
                Message
                <textarea
                  className={`${fieldClass(errors.message)} min-h-36 resize-y`}
                  value={form.message}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, message: event.target.value });
                  }}
                  placeholder="Tell us about the site, timeline, and project goals."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <span className="text-xs text-iron-orange">{errors.message}</span>
                )}
              </label>
            </div>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <AnimatedButton type="submit">Request Free Consultation</AnimatedButton>
              {success && (
                <p className="text-sm font-bold text-iron-orange">
                  Request received. We&apos;ll be in touch shortly.
                </p>
              )}
            </div>
          </motion.form>

          <aside className="grid gap-5">
            <div className="border border-white/10 bg-white/[0.045] p-6">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-iron-orange">
                IronPeak Construction Co.
              </p>
              <div className="mt-6 grid gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <p key={item.label} className="flex gap-3 text-sm text-slate-300">
                      <Icon className="mt-0.5 shrink-0 text-iron-orange" size={18} />
                      {item.label}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden border border-white/10">
              <img
                src={images.map}
                alt="Map-style placeholder for IronPeak Construction Co. Dallas office"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-[#07111f]/68" />
              <div className="absolute inset-8 border border-iron-orange/40" />
              <div className="absolute bottom-6 left-6 max-w-xs border border-white/10 bg-black/55 p-5 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-iron-orange">
                  Headquarters
                </p>
                <p className="mt-2 text-2xl font-black uppercase text-white">
                  Dallas, Texas
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
