"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryGrid() {
  const images = [
    { src: "/gallery1.png", alt: "Students studying in a classroom" },
    { src: "/gallery2.png", alt: "Children participating in school event" },
    { src: "/gallery3.png", alt: "Sports activities on the playground" },
    { src: "/gallery4.png", alt: "Science lab practical session" },
    { src: "/gallery5.png", alt: "School cultural performance on stage" },
    { src: "/gallery6.png", alt: "Group of students in the library" },
  ];

  const slides = images.map((img) => ({ src: img.src }));

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, i) => (
          <button
            key={i}
            type="button"
            className="relative w-full h-64 rounded-xl shadow hover:shadow-xl overflow-hidden transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={slides}
      />
    </>
  );
}
