"use client";

import { useState, useEffect, useCallback } from "react";
import svgPaths from "@/imports/svg-4426289xj7";

interface ImageViewerProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

export function ImageViewer({ images, initialIndex = 0, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);

  const prev = useCallback(() => {
    setScale(1);
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setScale(1);
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const zoomIn = () => setScale((s) => Math.min(s + 0.25, 3));
  const zoomOut = () => setScale((s) => Math.max(s - 0.25, 0.5));

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#5b5b5b]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Top-right controls */}
      <div className="absolute top-8 right-10 flex items-center gap-7">
        {/* Zoom out */}
        <button
          onClick={zoomOut}
          className="size-[30px] flex items-center justify-center hover:opacity-70 transition-opacity"
          title="Thu nhỏ"
        >
          <svg fill="none" viewBox="0 0 25.0149 24.9959" className="size-full">
            <path d={svgPaths.p2ff06100} fill="white" />
          </svg>
        </button>

        {/* Zoom in */}
        <button
          onClick={zoomIn}
          className="size-[30px] flex items-center justify-center hover:opacity-70 transition-opacity"
          title="Phóng to"
        >
          <svg fill="none" viewBox="0 0 25.0149 24.9959" className="size-full">
            <path d={svgPaths.p2fd85700} fill="white" />
          </svg>
        </button>

        {/* Close (X) */}
        <button
          onClick={onClose}
          className="size-[20px] flex items-center justify-center hover:opacity-70 transition-opacity"
          title="Đóng"
        >
          <svg fill="none" viewBox="0 0 21.1397 22.3611" className="size-full">
            <path d={svgPaths.p1a6ee300} stroke="white" strokeLinecap="round" strokeWidth="3" />
            <path d={svgPaths.p14009a00} stroke="white" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center w-full h-full px-[110px] py-[90px] overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Ảnh ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-sm shadow-lg transition-transform duration-200"
          style={{ transform: `scale(${scale})` }}
          draggable={false}
        />
      </div>

      {/* Left arrow */}
      {images.length > 1 && (
        <button
          onClick={prev}
          className="absolute left-[18px] top-1/2 -translate-y-1/2 size-[78px] rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
          title="Ảnh trước"
        >
          {/* Rotated chevron pointing left */}
          <svg viewBox="0 0 20.2508 32.0119" className="h-[29px] w-[16px]" fill="none">
            <path
              d="M17.9805 1.5L1.5 16.1804L17.9805 30.5119"
              stroke="#3B3B3B"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
        </button>
      )}

      {/* Right arrow */}
      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-[18px] top-1/2 -translate-y-1/2 size-[78px] rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
          title="Ảnh tiếp theo"
        >
          <svg viewBox="0 0 20.2508 32.0119" className="h-[29px] w-[16px]" fill="none">
            <path
              d={svgPaths.p278dbb00}
              stroke="#3B3B3B"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
        </button>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setScale(1); setCurrentIndex(i); }}
              className={`size-2 rounded-full transition-colors ${
                i === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
