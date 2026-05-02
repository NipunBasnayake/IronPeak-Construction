import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { images } from "../../assets/images/assets";
import { AnimatedButton } from "../ui/AnimatedButton";
import { OptimizedImage } from "../ui/OptimizedImage";
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
const projectTypes = ["Commercial", "Residential", "Industrial", "Renovation", "Infrastructure"];
const budgetRanges = ["$250K - $1M", "$1M - $5M", "$5M - $15M", "$15M+"];

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const errors = useMemo(() => {
    return submitted ? validateForm(form) : {};
  }, [form, submitted]);

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
    return `w-full border bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-iron-orange focus:ring-2 focus:ring-iron-orange/30 ${
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
                  id="contact-name"
                  name="name"
                  className={fieldClass(errors.name)}
                  value={form.name}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, name: event.target.value });
                  }}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && (
                  <span id="contact-name-error" className="text-xs text-iron-orange">
                    {errors.name}
                  </span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Email
                <input
                  id="contact-email"
                  name="email"
                  className={fieldClass(errors.email)}
                  type="email"
                  value={form.email}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, email: event.target.value });
                  }}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && (
                  <span id="contact-email-error" className="text-xs text-iron-orange">
                    {errors.email}
                  </span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Phone
                <input
                  id="contact-phone"
                  name="phone"
                  className={fieldClass(errors.phone)}
                  type="tel"
                  value={form.phone}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, phone: event.target.value });
                  }}
                  placeholder="+1 (555) 000-0000"
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                />
                {errors.phone && (
                  <span id="contact-phone-error" className="text-xs text-iron-orange">
                    {errors.phone}
                  </span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-300">
                Project Type
                <select
                  id="contact-project-type"
                  name="projectType"
                  className={fieldClass(errors.projectType)}
                  value={form.projectType}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, projectType: event.target.value });
                  }}
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={
                    errors.projectType ? "contact-project-type-error" : undefined
                  }
                >
                  <option value="">Select type</option>
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && (
                  <span id="contact-project-type-error" className="text-xs text-iron-orange">
                    {errors.projectType}
                  </span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-300 sm:col-span-2">
                Budget Range
                <select
                  id="contact-budget"
                  name="budget"
                  className={fieldClass(errors.budget)}
                  value={form.budget}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, budget: event.target.value });
                  }}
                  aria-invalid={Boolean(errors.budget)}
                  aria-describedby={errors.budget ? "contact-budget-error" : undefined}
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range}>{range}</option>
                  ))}
                </select>
                {errors.budget && (
                  <span id="contact-budget-error" className="text-xs text-iron-orange">
                    {errors.budget}
                  </span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-300 sm:col-span-2">
                Message
                <textarea
                  id="contact-message"
                  name="message"
                  className={`${fieldClass(errors.message)} min-h-36 resize-y`}
                  value={form.message}
                  onChange={(event) => {
                    setSuccess(false);
                    setForm({ ...form, message: event.target.value });
                  }}
                  placeholder="Tell us about the site, timeline, and project goals."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message && (
                  <span id="contact-message-error" className="text-xs text-iron-orange">
                    {errors.message}
                  </span>
                )}
              </label>
            </div>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <AnimatedButton type="submit">Request Free Consultation</AnimatedButton>
              {success && (
                <p className="text-sm font-bold text-iron-orange" aria-live="polite">
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
              <OptimizedImage
                src={images.map}
                alt="Map-style placeholder for IronPeak Construction Co. Dallas office"
                width={1000}
                height={667}
                sizes="(min-width: 1024px) 45vw, 100vw"
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
