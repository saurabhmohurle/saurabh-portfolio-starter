
import React, { useState } from "react";

export default function ProjectSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <img src={images[current]} alt={`slide-${current}`} className="w-full object-cover" />
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1">
        ◀
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1">
        ▶
      </button>
    </div>
  );
}
