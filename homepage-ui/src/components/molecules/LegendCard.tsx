import React from "react";

/**
 * LegendCard Component
 * Hiển thị chú thích biểu đồ Radar 5 trục
 */
export function LegendCard() {
  // Các thông số toán học cho biểu đồ
  const center = 90; // Tâm x, y của SVG
  const maxRadius = 60; // Bán kính cơ sở (dùng để tính toán các chặng lưới)

  // --- SỬA TẠI ĐÂY: Tính toán bán kính thực tế của vòng ngoài cùng ---
  // Vòng lưới chạy từ 0->5 với công thức r = (maxRadius * ring) / 4
  // Vậy vòng ngoài cùng (ring=5) có bán kính là:
  const outermostGridRadius = (maxRadius * 5) / 4; // = 75

  // Hàm tạo điểm cho lưới đa giác 10 cạnh (Decagon)
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

  // Hàm tạo điểm cho hình ngôi sao (nối 5 trục chính và thụt vào ở giữa)
  const getStarPoints = () => {
    let points = [];
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5;
      // --- SỬA TẠI ĐÂY: Dùng outermostGridRadius cho đỉnh chẵn ---
      // Trục chẵn (đỉnh) vươn ra xa nhất, trục lẻ (lõm) thụt vào
      const r =
        i % 2 === 0
          ? outermostGridRadius
          : outermostGridRadius * 0.45;
      points.push(
        `${center + r * Math.cos(a)},${center + r * Math.sin(a)}`,
      );
    }
    return points.join(" ");
  };

  return (
    <div
      className="inline-flex flex-col items-start relative shadow-lg rounded-[10px]"
      data-name="legend-card"
      // Tăng chiều rộng lên 260px để có đủ không gian cho chữ 2 bên không bị ép
      style={{ width: "260px" }}
    >
      {/* Card Header */}
      <div
        className="h-[40px] relative rounded-t-[10px] shrink-0 w-full flex items-center justify-center"
        style={{ backgroundColor: "#730007" }}
        data-name="card-header"
      >
        <span className="font-semibold text-[#d9a20c] text-[16px] tracking-wide">
          CHÚ THÍCH
        </span>
      </div>

      {/* Card Body */}
      <div
        className="relative shrink-0 w-full bg-white rounded-b-[10px] pb-6 pt-2 px-4"
        style={{ minHeight: "220px" }}
        data-name="card-body"
      >
        {/* Khung chứa cố định tâm cho biểu đồ và chữ */}
        <div className="relative w-[180px] h-[180px] mx-auto">
          {/* Biểu đồ SVG */}
          <svg
            width="150"
            height="180"
            viewBox="0 0 180 180"
            className="absolute top-1 left-[15px]"
          >
            {/* 1. Vẽ các vòng lưới đa giác (Rings 1, 2, 3, 4, 5) */}
            {[0, 1, 2, 3, 4, 5].map((ring) => (
              <polygon
                key={`ring-${ring}`}
                points={getDecagonPoints(
                  (maxRadius * ring) / 4,
                )}
                fill="none"
                stroke="#e5e5e5"
                strokeWidth="1"
              />
            ))}

            {/* 2. Vẽ 5 đường trục thẳng từ tâm ra ngoài */}
            {[0, 1, 2, 3, 4].map((i) => {
              const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
              return (
                <line
                  key={`axis-${i}`}
                  x1={center}
                  y1={center}
                  // --- SỬA TẠI ĐÂY: Kéo dài đường trục ra đến vòng ngoài cùng ---
                  x2={
                    center + outermostGridRadius * Math.cos(a)
                  }
                  y2={
                    center + outermostGridRadius * Math.sin(a)
                  }
                  stroke="#e5e5e5"
                  strokeWidth="1"
                />
              );
            })}

            {/* 3. Vẽ hình Ngôi sao */}
            <polygon
              points={getStarPoints()}
              fill="#d9a20c"
              fillOpacity="0.15" // Nền vàng mờ
              stroke="#d9a20c"
              strokeWidth="3" // Viền liền, dày giống thiết kế
            />

            {/* 4. Đánh số trục dọc (1, 2, 3, 4, 5) */}
            {[0, 1, 2, 3, 4, 5].map((num, i) => (
              <text
                key={`num-${num}`}
                x={center + 3} // Lệch sang phải một xíu cho đỡ dính vào đường thẳng
                y={center - i * (maxRadius / 4) + 3}
                fontSize="9"
                fill="#888"
              >
                {num}
              </text>
            ))}
          </svg>

          {/* CÁC NHÃN TEXT (Được căn tọa độ chính xác bao quanh SVG) */}
          <span
            className="absolute text-[10px] text-[#555] text-center w-[90px]"
            style={{
              top: "8px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Hỗ trợ tài chính
          </span>

          <span
            className="absolute text-[10px] text-[#555] text-center w-[50px]"
            style={{ top: "60px", left: "155px" }}
          >
            Hỗ trợ thông tin
          </span>

          <span
            className="absolute text-[10px] text-[#555] text-center w-[60px]"
            style={{ top: "155px", left: "120px" }}
          >
            Hỗ trợ tại thực địa
          </span>

          <span
            className="absolute text-[10px] text-[#555] text-center w-[70px]"
            style={{ top: "155px", left: "-10px" }}
          >
            Hỗ trợ thủ tục pháp lý
          </span>

          <span
            className="absolute text-[10px] text-[#555] text-center w-[50px]"
            style={{ top: "60px", left: "-25px" }}
          >
            Hạ tầng sẵn có
          </span>
        </div>
      </div>
    </div>
  );
}