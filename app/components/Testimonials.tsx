"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      text: "SSKennedy School provides an excellent learning environment. My child has grown tremendously!",
    },
    {
      name: "Priya Sharma",
      text: "The teachers are very supportive and the campus is extremely safe for children.",
    },
    {
      name: "Amit Verma",
      text: "The focus on academics and extracurriculars is perfectly balanced. Highly recommended!",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20">
      <div className="page-shell">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            Parent voices
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            What parents say about SSKennedy
          </h2>

          <p className="mt-4 mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            Real experiences from families who trust us with their children every
            day.
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4500 }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm text-slate-700 italic">
                    “{item.text}”
                  </p>
                  <figcaption className="mt-5 text-sm font-semibold text-slate-900">
                    — {item.name}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
