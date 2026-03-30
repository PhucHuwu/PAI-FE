import React from "react";

interface LocationRatingCardProps {
    image: string;
    title: string;
    subtitle: string;
    rating: number;
    onClick?: () => void;
}

export function LocationRatingCard({ image, title, subtitle, rating, onClick }: LocationRatingCardProps) {
    return (
        <article
            className="w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            onClick={onClick}
        >
            <div className="h-44 overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-2 p-4">
                <h3 className="line-clamp-1 text-xl font-black text-[#111827]">{title}</h3>
                <p className="text-sm font-medium text-[#6b7280]">{subtitle}</p>
                <div className="inline-flex items-center rounded-full bg-[#ffac59] px-3 py-1 text-sm font-bold text-white">{rating.toFixed(1)}</div>
            </div>
        </article>
    );
}
