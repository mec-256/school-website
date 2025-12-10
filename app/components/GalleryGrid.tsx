"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryGrid() {
  const images = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png",
  ];

  const slides = images.map((img) => ({ src: img }));

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full h-64 object-cover rounded-xl shadow hover:shadow-xl cursor-pointer transition"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
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
