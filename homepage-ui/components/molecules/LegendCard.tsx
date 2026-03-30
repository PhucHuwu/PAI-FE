import React from "react";

const items = [
    { label: "Excellent", color: "#16a34a" },
    { label: "Good", color: "#f59e0b" },
    { label: "Needs work", color: "#ef4444" },
];

export function LegendCard() {
    return (
        <div className="rounded-xl bg-white/90 p-3 shadow-md">
            <p className="mb-2 text-sm font-bold text-[#1f2937]">Legend</p>
            <div className="space-y-2">
                {items.map((item) => (
                    <div key={item.label} className="flex items-center gap-2 text-xs text-[#374151]">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
