import React from "react";

type Position = "left" | "center" | "right";

interface LocationCardProps {
    rank: number;
    name: string;
    image: string;
    position?: Position;
    onLearnMore?: (locationName: string) => void;
}

const positionClass: Record<Position, string> = {
    left: "md:-translate-y-6",
    center: "md:translate-y-0",
    right: "md:translate-y-6",
};

export function LocationCard({ rank, name, image, position = "center", onLearnMore }: LocationCardProps) {
    return (
        <article
            className={`group absolute left-1/2 top-0 w-[260px] -translate-x-1/2 rounded-2xl bg-white/95 p-3 shadow-lg transition-transform md:w-[290px] ${positionClass[position]}`}
            style={{
                transform: position === "left" ? "translateX(-115%)" : position === "right" ? "translateX(15%)" : "translateX(-50%)",
            }}
        >
            <div className="relative h-40 overflow-hidden rounded-xl md:h-44">
                <img src={image} alt={name} className="h-full w-full object-cover" />
                <span className="absolute left-2 top-2 rounded-full bg-[#ba252e] px-3 py-1 text-sm font-bold text-white">#{rank}</span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
                <h3 className="line-clamp-1 text-lg font-black text-[#1f2937]">{name}</h3>
                <button
                    type="button"
                    onClick={() => onLearnMore?.(name)}
                    className="rounded-full bg-[#fb7104] px-3 py-1 text-sm font-semibold text-white hover:bg-[#e56200]"
                >
                    Learn more
                </button>
            </div>
        </article>
    );
}
