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
}

const defaultData: StarChartDataPoint[] = [
  { criterion: "Hạ tầng sẵn có", value: 4, fullMark: 5 },
  { criterion: "Hỗ trợ tài chính", value: 3, fullMark: 5 },
  { criterion: "Hỗ trợ thông tin", value: 5, fullMark: 5 },
  { criterion: "Hỗ trợ tại thực địa", value: 2, fullMark: 5 },
  {
    criterion: "Hỗ trợ thủ tục pháp lý",
    value: 3,
    fullMark: 5,
  },
];

export function StarChart({
  data = defaultData,
  width = 110, // SỬA ĐỔI: Tăng kích thước từ 80 lên 110
  height = 110,
}: StarChartProps) {
  const center = width / 2;
  const maxRadius = width / 2 - 10;

  const getDecagonPoints = (radius: number) => {
    let points = [];
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5;
      points.push(
        `${center + radius * Math.cos(a)},${center + radius * Math.sin(a)}`,
      );
    }
    return points.join(" ");
  };

  const getBaseStarPoints = (radius: number) => {
    let points = [];
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5;
      const r = i % 2 === 0 ? radius : radius * 0.45;
      points.push(
        `${center + r * Math.cos(a)},${center + r * Math.sin(a)}`,
      );
    }
    return points.join(" ");
  };

  const getDataStarPoints = () => {
    let points = [];
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5;

      let r = 0;
      if (i % 2 === 0) {
        const dataIndex = i / 2;
        const value = data[dataIndex]?.value || 0;
        r = (value / 5) * maxRadius;
      } else {
        const dataIndex1 = Math.floor(i / 2);
        const dataIndex2 = (dataIndex1 + 1) % 5;
        const val1 = data[dataIndex1]?.value || 0;
        const val2 = data[dataIndex2]?.value || 0;
        const avgValue = (val1 + val2) / 2;
        r = (avgValue / 5) * maxRadius * 0.45;
      }
      points.push(
        `${center + r * Math.cos(a)},${center + r * Math.sin(a)}`,
      );
    }
    return points.join(" ");
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative p-2">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
      >
        {/* Lưới nện thập giác */}
        {[1, 2, 3, 4, 5].map((ring) => (
          <polygon
            key={`ring-${ring}`}
            points={getDecagonPoints((maxRadius * ring) / 5)}
            fill="none"
            stroke="#b0b0b0"
            strokeWidth="0.5"
          />
        ))}

        {/* Ngôi sao max-score nét đứt */}
        <polygon
          points={getBaseStarPoints(maxRadius)}
          fill="none"
          stroke="#d9a20c"
          strokeWidth="1.5"
          strokeDasharray="3,3"
          opacity="0.4"
        />

        {/* Trục thẳng */}
        {[0, 1, 2, 3, 4].map((i) => {
          const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
          return (
            <line
              key={`axis-${i}`}
              x1={center}
              y1={center}
              x2={center + maxRadius * Math.cos(a)}
              y2={center + maxRadius * Math.sin(a)}
              stroke="#b0b0b0"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Đánh số từ 0 đến 5 dọc theo trục thẳng đứng */}
        {[0, 1, 2, 3, 4, 5].map((num) => {
          const angle_marker = -Math.PI / 2;
          const r_marker = (num / 5) * maxRadius;
          const textX =
            center + r_marker * Math.cos(angle_marker);
          const textY =
            center + r_marker * Math.sin(angle_marker);

          return (
            <text
              key={`marker-${num}`}
              x={textX + 6} // SỬA ĐỔI: Dịch xa trục ra một chút vì chữ to hơn
              y={textY + 3} // SỬA ĐỔI: Chỉnh lại độ lệch Y
              fontSize="7" // SỬA ĐỔI: Chữ to hơn cho dễ đọc
              fill="#888"
              fontWeight="medium"
            >
              {num}
            </text>
          );
        })}

        {/* Dữ Liệu Ngôi Sao */}
        <polygon
          points={getDataStarPoints()}
          fill="#d9a20c"
          fillOpacity="0.8"
          stroke="#d9a20c"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}