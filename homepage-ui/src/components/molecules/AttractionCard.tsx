import React from "react";
import { StarChart, StarChartDataPoint } from "./StarChart";

/**
 * Props for the AttractionCard component
 */
interface AttractionCardProps {
  provinceName: string; // Province name to display in header (e.g., 'BẮC NINH')
  chartData?: StarChartDataPoint[]; // Optional custom data for the star chart
  className?: string; // Optional additional CSS classes
}

/**
 * CardHeader Sub-component
 * Dark red header section with gold-colored, bold, uppercase text
 */
function CardHeader({
  provinceName,
}: {
  provinceName: string;
}) {
  return (
    <div
      className="h-[33px] relative rounded-t-[10px] shrink-0 w-full"
      style={{ backgroundColor: "#96131c" }} // Dark red background (#96131c)
      data-name="card-header"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-3 py-3 relative size-full">
          <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#d9a20c] text-[12px] text-center">
            {/* Province name - gold color, bold, uppercase */}
            <p className="leading-[90px] uppercase tracking-wide">
              {provinceName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * CardBody Sub-component
 * White section with rounded bottom corners, shadow, and star chart
 */
function CardBody({
  chartData,
}: {
  chartData?: StarChartDataPoint[];
}) {
  return (
    <div
      className="relative shrink-0 w-full bg-white rounded-b-[10px] shadow-md"
      style={{ height: "102px" }}
      data-name="card-body"
    >
      {/* Chart container - centered within the card body */}
      <div className="absolute inset-0 flex items-center justify-center p-3">
        <div className="w-full h-full">
          {/* StarChart component - displays 5-axis radar chart */}
          <StarChart data={chartData} />
        </div>
      </div>
    </div>
  );
}

/**
 * AttractionCard Component
 * Main component for displaying province attraction index
 *
 * Structure:
 * - Top: Dark red header with province name in gold
 * - Bottom: White section with pentagonal star chart showing 5 criteria scores
 *
 * Design Details:
 * - Header: Dark red background (#96131c) with gold text (#d9a20c)
 * - Body: White background with rounded bottom corners and shadow
 * - Chart: 5-axis radar chart with gold color scheme
 *
 * @example
 * ```tsx
 * <AttractionCard
 *   provinceName="BẮC NINH"
 *   chartData={[
 *     { criterion: 'Hạ tầng sẵn có', value: 4, fullMark: 5 },
 *     { criterion: 'Hỗ trợ tài chính', value: 3, fullMark: 5 },
 *     { criterion: 'Hỗ trợ thông tin', value: 5, fullMark: 5 },
 *     { criterion: 'Hỗ trợ tại thực địa', value: 2, fullMark: 5 },
 *     { criterion: 'Hỗ trợ thủ tục pháp lý', value: 3, fullMark: 5 },
 *   ]}
 * />
 * ```
 */
export function AttractionCard({
  provinceName,
  chartData,
  className = "",
}: AttractionCardProps) {
  return (
    <div
      className={`flex flex-col items-start relative w-full ${className}`}
      data-name="attraction-card"
    >
      {/* Header section with province name */}
      <CardHeader provinceName={provinceName} />

      {/* Body section with star chart */}
      <CardBody chartData={chartData} />
    </div>
  );
}

/**
 * Example usage and sample data
 */
export const sampleAttractionData: StarChartDataPoint[] = [
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