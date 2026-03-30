import React from "react";

export interface StarChartDataPoint {
  criterion: string;
  value: number;
  fullMark: number;
}

interface StarChartProps {
  data: StarChartDataPoint[];
}

export function StarChart({ data }: StarChartProps) {
  return (
    <div className="space-y-2">
      {data.map((item) => {
        const ratio = Math.max(0, Math.min(1, item.value / item.fullMark));
        return (
          <div key={item.criterion} className="space-y-1">
            <div className="flex items-center justify-between text-xs text-[#374151]">
              <span className="truncate pr-2">{item.criterion}</span>
              <span className="font-semibold">
                {item.value}/{item.fullMark}
              </span>
            </div>
            <div className="h-2 rounded-full bg-[#e5e7eb]">
              <div
                className="h-full rounded-full bg-[#fb7104]"
                style={{ width: `${ratio * 100}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
