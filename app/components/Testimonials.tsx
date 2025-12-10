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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold text-blue-900">
          What Parents Say
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Real experiences from parents whose children study with us.
        </p>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition h-full">
                  <p className="text-gray-700 italic">“{item.text}”</p>
                  <h3 className="mt-4 text-blue-900 font-semibold text-lg">
                    — {item.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
