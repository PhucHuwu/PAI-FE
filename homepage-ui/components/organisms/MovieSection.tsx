"use client";

import React, { useRef, useState, useEffect } from 'react';
import { MovieCard } from '@/components/molecules/MovieCard'

const MOVIES = [
  {
    id: 1,
    title: 'Mắt Biếc',
    director: 'Victor Vũ',
    image: 'https://images.unsplash.com/photo-1741319300110-da24fce9147a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwcmljZSUyMHRlcnJhY2VzJTIwc2FwYSUyMHNjZW5lcnl8ZW58MXx8fHwxNzc0NzIyMDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 9.8,
  },
  {
    id: 2,
    title: 'Tôi Thấy Hoa Vàng Trên Cỏ Xanh',
    director: 'Victor Vũ',
    image: 'https://images.unsplash.com/photo-1741319300110-da24fce9147a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwcmljZSUyMHRlcnJhY2VzJTIwc2FwYSUyMHNjZW5lcnl8ZW58MXx8fHwxNzc0NzIyMDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 8.8,
  },
  {
    id: 3,
    title: 'Hai Phượng',
    director: 'Lê Văn Kiệt',
    image: 'https://images.unsplash.com/photo-1758629277918-56caee55e5e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwYWN0aW9uJTIwc2NlbmUlMjB1cmJhbiUyMHN0cmVldHxlbnwxfHx8fDE3NzQ3MjIwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 8.4,
  },
  {
    id: 4,
    title: 'Cô Ba Sài Gòn',
    director: 'Kay Nguyễn',
    image: 'https://images.unsplash.com/photo-1696215105730-fa23954dd164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwYW5jaWVudCUyMHRvd24lMjBsYW50ZXJuJTIwbmlnaHR8ZW58MXx8fHwxNzc0NzIyMDM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 8.7,
  },
  {
    id: 5,
    title: 'Song Lang',
    director: 'Léon Lê',
    image: 'https://images.unsplash.com/photo-1668172526711-d32ca701ad4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwbW92aWUlMjBmaWxtJTIwcG9zdGVyJTIwY2luZW1hfGVufDF8fHx8MTc3NDcyMjAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 8.6,
  },
  {
    id: 6,
    title: 'Ròm',
    director: 'Trần Thanh Huy',
    image: 'https://images.unsplash.com/photo-1558289675-0f3fe37db8fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwZHJhbWF0aWMlMjBsYW5kc2NhcGUlMjBtb3VudGFpbnMlMjBmb2d8ZW58MXx8fHwxNzc0NzIyMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 8.5,
  },
];

export const MovieSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 339; // card width (315) + gap (24)
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white flex flex-col pt-10 overflow-hidden w-full">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-6 ml-16">
        <h2 className="text-[32px] md:text-[36px] font-black text-black">
          CÁC BỘ PHIM <span className="text-[#FFAC59]">"HOT"</span>{' '}
          BỐI CẢNH VIỆT NAM
        </h2>
      </div>

      {/* Scrollable Cards Row */}
      <div className="bg-[#FFD0A2] w-full py-8 relative group/carousel">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x pb-4 pl-4 md:px-8 lg:px-16 pr-[10vw] [scroll-padding-left:1rem] md:[scroll-padding-left:2rem] lg:[scroll-padding-left:4rem] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {MOVIES.map((movie) => (
            <MovieCard
              key={movie.id}
              image={movie.image}
              title={movie.title}
              director={movie.director}
              rating={movie.rating}
              onClick={() => console.log(`Xem ${movie.title}`)}
            />
          ))}
        </div>

        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 text-[#fb923c] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white cursor-pointer"
            aria-label="Cuộn sang trái"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 text-[#fb923c] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white cursor-pointer"
            aria-label="Cuộn sang phải"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};