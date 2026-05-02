import { useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { A11y, Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { testimonials } from "../../data/testimonials";
import { SectionTitle } from "../ui/SectionTitle";

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="testimonials" className="section-padding bg-iron-dark">
      <div className="safe-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle eyebrow="Testimonials" title="Trusted By Serious Builders">
          <p>
            Owners, architects, and operators choose IronPeak when the job needs
            craftsmanship, control, and a team that communicates clearly.
          </p>
        </SectionTitle>

        <div className="overflow-hidden border border-white/10 bg-white/[0.045] p-4 shadow-industrial backdrop-blur">
          <Swiper
            modules={[A11y, Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            autoplay={
              shouldReduceMotion
                ? false
                : { delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }
            }
            pagination={{ clickable: true }}
            a11y={{ enabled: true }}
            className="min-h-[340px]"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <article className="flex min-h-[320px] flex-col justify-between p-5 sm:p-8">
                  <div>
                    <div className="mb-8 flex gap-1 text-iron-orange">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <Star key={index} size={20} fill="currentColor" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-2xl font-bold leading-snug text-white text-pretty sm:text-3xl">
                      "{item.review}"
                    </blockquote>
                  </div>
                  <footer className="mt-10 border-t border-white/10 pt-6">
                    <p className="text-lg font-black uppercase tracking-[0.12em] text-white">
                      {item.name}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      {item.role}, {item.company}
                    </p>
                  </footer>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
