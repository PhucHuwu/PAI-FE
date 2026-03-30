import React from "react";
import { StarChart, type StarChartDataPoint } from "./StarChart";

const legendData: StarChartDataPoint[] = [
    { criterion: "Hạ tầng sẵn có", value: 4, fullMark: 5 },
    { criterion: "Hỗ trợ tài chính", value: 3, fullMark: 5 },
    { criterion: "Hỗ trợ thông tin", value: 5, fullMark: 5 },
    { criterion: "Hỗ trợ tại thực địa", value: 4, fullMark: 5 },
    { criterion: "Hỗ trợ thủ tục pháp lý", value: 3, fullMark: 5 },
];

export function LegendCard() {
    return (
        <div className="rounded-xl bg-white/90 p-3 shadow-md w-[220px]">
            <p className="mb-3 text-sm font-bold text-[#1f2937]">Chú thích tiêu chí PAI</p>
            <div className="flex items-center justify-center">
                <StarChart
                    data={legendData}
                    width={155}
                    height={155}
                    showCriteriaLabels
                    labelOffset={5}
                    maxLabelCharsPerLine={10}
                />
            </div>
            <p className="mt-2 text-xs text-[#4b5563] text-center">Thang điểm 1-5 cho từng tiêu chí</p>
        </div>
    );
}
