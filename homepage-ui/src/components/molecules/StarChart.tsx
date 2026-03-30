"use client";

import React from "react";

export interface StarChartDataPoint {
    criterion: string;
    value: number;
    fullMark: number;
}

interface StarChartProps {
    data?: StarChartDataPoint[];
    width?: number;
    height?: number;
    showCriteriaLabels?: boolean;
    labelOffset?: number;
    maxLabelCharsPerLine?: number;
}

const defaultData: StarChartDataPoint[] = [
    { criterion: "Hạ tầng sẵn có", value: 4, fullMark: 5 },
    { criterion: "Hỗ trợ tài chính", value: 3, fullMark: 5 },
    { criterion: "Hỗ trợ thông tin", value: 5, fullMark: 5 },
    { criterion: "Hỗ trợ tại thực địa", value: 2, fullMark: 5 },
    { criterion: "Hỗ trợ thủ tục pháp lý", value: 3, fullMark: 5 },
];

export function StarChart({
    data = defaultData,
    width = 80,
    height = 80,
    showCriteriaLabels = false,
    labelOffset = 18,
    maxLabelCharsPerLine = 14,
}: StarChartProps) {
    const center = width / 2;
    const maxRadius = width / 2 - 10;
    const labelRadius = maxRadius + labelOffset;
    const labelFontSize = Math.max(7, Math.round(width * 0.055));

    // 1. Hàm vẽ lưới mạng nhện (đa giác 10 cạnh)
    const getDecagonPoints = (radius: number) => {
        let points = [];
        for (let i = 0; i < 10; i++) {
            const a = -Math.PI / 2 + (i * Math.PI) / 5;
            points.push(`${center + radius * Math.cos(a)},${center + radius * Math.sin(a)}`);
        }
        return points.join(" ");
    };

    // 2. Hàm vẽ khung ngôi sao chuẩn (dùng làm nét đứt nền)
    const getBaseStarPoints = (radius: number) => {
        let points = [];
        for (let i = 0; i < 10; i++) {
            const a = -Math.PI / 2 + (i * Math.PI) / 5;
            // Đỉnh thì vươn ra xa nhất, hõm thì thụt vào 0.45 lần
            const r = i % 2 === 0 ? radius : radius * 0.45;
            points.push(`${center + r * Math.cos(a)},${center + r * Math.sin(a)}`);
        }
        return points.join(" ");
    };

    const center_str = `${center},${center}`;

    const getTextAnchor = (x: number) => {
        if (x < center - 4) return "end";
        if (x > center + 4) return "start";
        return "middle";
    };

    const getDominantBaseline = (y: number) => {
        if (y < center - 4) return "auto";
        if (y > center + 4) return "hanging";
        return "middle";
    };

    const splitLabel = (text: string) => {
        const words = text.split(" ");
        const lines: string[] = [];
        let current = "";

        for (const word of words) {
            const candidate = current ? `${current} ${word}` : word;
            if (candidate.length <= maxLabelCharsPerLine) {
                current = candidate;
            } else {
                if (current) lines.push(current);
                current = word;
            }
        }

        if (current) lines.push(current);
        return lines;
    };

    return (
        <div className="w-full h-full flex items-center justify-center">
            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
                {/* Lưới nện mờ (5 vòng đa giác 10 cạnh) */}
                {[1, 2, 3, 4, 5].map((ring) => (
                    <polygon key={`ring-${ring}`} points={getDecagonPoints((maxRadius * ring) / 5)} fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
                ))}

                {/* Khung ngôi sao nét đứt (Dashed Star Shape) ở mốc điểm 5 (maxRadius) */}
                {/* SỬA ĐỔI TẠI ĐÂY: Tăng độ đậm và độ dày */}
                <polygon
                    points={getBaseStarPoints(maxRadius)}
                    fill="none"
                    stroke="#d9a20c" // Lấy viền màu vàng cho đồng bộ
                    strokeWidth="1" // Tăng độ dày lên 1
                    strokeDasharray="3,3" // Nét đứt
                    opacity="0.7" // Tăng độ mờ lên 0.7 để màu vàng hiện rõ hơn
                />

                {/* 5 trục thẳng mờ từ tâm ra đỉnh */}
                {[0, 1, 2, 3, 4].map((i) => {
                    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
                    return (
                        <line
                            key={`axis-${i}`}
                            x1={center}
                            y1={center}
                            x2={center + maxRadius * Math.cos(a)}
                            y2={center + maxRadius * Math.sin(a)}
                            stroke="#f0f0f0"
                            strokeWidth="0.5"
                            strokeDasharray="2,2"
                        />
                    );
                })}

                {showCriteriaLabels && data.map((criterion, i) => {
                    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
                    const x = center + labelRadius * Math.cos(a);
                    const y = center + labelRadius * Math.sin(a);
                    const lines = splitLabel(criterion.criterion);
                    const lineHeight = labelFontSize + 1;
                    const firstLineDy = -((lines.length - 1) * lineHeight) / 2;

                    return (
                        <text
                            key={`label-${criterion.criterion}`}
                            x={x}
                            y={y}
                            fill="#6b7280"
                            fontSize={labelFontSize}
                            fontWeight={500}
                            textAnchor={getTextAnchor(x)}
                            dominantBaseline={getDominantBaseline(y)}
                        >
                            {lines.map((line, idx) => (
                                <tspan key={`${criterion.criterion}-${idx}`} x={x} dy={idx === 0 ? firstLineDy : lineHeight}>
                                    {line}
                                </tspan>
                            ))}
                        </text>
                    );
                })}

                {/* Dữ liệu Tô màu nửa cánh (giữ nguyên logic hoàn hảo ở bước trước) */}
                {data.map((criterion, i) => {
                    const dataIndex = i;

                    const a_peak = -Math.PI / 2 + (dataIndex * 2 * Math.PI) / 5;
                    const value = criterion.value || 0;
                    const r_peak = (value / 5) * maxRadius;
                    const peak_str = `${center + r_peak * Math.cos(a_peak)},${center + r_peak * Math.sin(a_peak)}`;

                    const dataIndex1 = dataIndex;
                    const dataIndex2 = (dataIndex1 + 1) % 5;
                    const val1 = data[dataIndex1]?.value || 0;
                    const val2 = data[dataIndex2]?.value || 0;
                    const avgValue = (val1 + val2) / 2;

                    const a_valley = -Math.PI / 2 + ((dataIndex * 2 + 1) * Math.PI) / 5;
                    const r_valley = (avgValue / 5) * maxRadius * 0.45;
                    const valley_str = `${center + r_valley * Math.cos(a_valley)},${center + r_valley * Math.sin(a_valley)}`;

                    const points = `${center_str} ${peak_str} ${valley_str}`;

                    return <polygon key={`data-half-star-${i}`} points={points} fill="#d9a20c" fillOpacity="1" stroke="none" />;
                })}
            </svg>
        </div>
    );
}
