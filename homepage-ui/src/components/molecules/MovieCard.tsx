import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface MovieCardProps {
  image: string;
  title: string;
  director?: string;
  rating: number;
  onClick?: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  image,
  title,
  director,
  rating,
  onClick,
}) => {
  return (
    <div
      className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col shrink-0 w-[315px] snap-start cursor-pointer h-full group"
      onClick={onClick}
    >
      {/* Movie Poster Image */}
      <div className="relative w-full h-[418px] overflow-hidden rounded-tl-[20px] rounded-tr-[20px]">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="text-white font-black text-[32px] text-center drop-shadow-lg">
            {title}
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="px-5 pt-4 pb-5 flex flex-col gap-1 flex-1">
        <h3 className="font-black text-[#303030] text-[32px] leading-tight line-clamp-1">
          {title}
        </h3>
        {director && (
          <p className="font-semibold text-[#303030] text-[20px]">
            {director}
          </p>
        )}

        {/* Rating Button */}
        <button className="mt-4 w-full bg-[#FFAC59] text-white font-bold text-[25px] py-3 rounded-[40px] flex items-center justify-center gap-2 hover:bg-[#f59a3c] transition-colors cursor-pointer">
          {rating} ⭐
        </button>
      </div>
    </div>
  );
};
