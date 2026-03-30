import React from "react";
import { StarChart, StarChartDataPoint } from "./StarChart";

interface AttractionCardProps {
  provinceName: string;
  chartData: StarChartDataPoint[];
}

export function AttractionCard({ provinceName, chartData }: AttractionCardProps) {
  return (
    <article className="rounded-xl bg-white/95 p-3 shadow-md backdrop-blur-sm">
      <h3 className="mb-3 line-clamp-1 text-sm font-bold text-[#111827]">{provinceName}</h3>
      <StarChart data={chartData} />
    </article>
  );
}
