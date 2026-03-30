import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line,
} from "recharts";
import { Star, TrendingUp, Award } from "lucide-react";

const radarData = [
  { subject: "Hạ tầng", A: 80 },
  { subject: "Cảnh quan", A: 90 },
  { subject: "Hỗ trợ", A: 70 },
  { subject: "An toàn", A: 85 },
  { subject: "Dịch vụ", A: 75 },
];

const barData = [
  { name: "Quảng Ninh", value: 4.2 },
  { name: "Hà Giang", value: 4.0 },
  { name: "Ninh Bình", value: 3.8 },
  { name: "Đà Lạt", value: 3.9 },
  { name: "Hội An", value: 4.1 },
];

const lineData = [
  { month: "T1", value: 3.5 },
  { month: "T2", value: 3.6 },
  { month: "T3", value: 3.8 },
  { month: "T4", value: 3.7 },
  { month: "T5", value: 4.0 },
  { month: "T6", value: 4.2 },
];

const provinces = [
  { name: "Quảng Ninh", score: 4.2, stars: 4, trend: "+0.3" },
  { name: "Hà Giang", score: 4.0, stars: 4, trend: "+0.1" },
  { name: "Ninh Bình", score: 3.8, stars: 4, trend: "+0.2" },
  { name: "Đà Lạt", score: 3.9, stars: 4, trend: "0.0" },
  { name: "Hội An", score: 4.1, stars: 4, trend: "+0.4" },
  { name: "Đà Nẵng", score: 3.7, stars: 3, trend: "+0.1" },
];

export function PaiPage() {
  return (
    <div className="p-6 min-w-[900px]">
      <h1 className="text-[28px] font-bold text-[#ba252e] mb-6 uppercase">CHỈ SỐ PAI</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-[20px] shadow-md p-5 flex items-center gap-4">
          <Star size={32} className="text-[#fb7104]" fill="#fb7104" />
          <div>
            <p className="text-[13px] text-gray-600">Điểm PAI trung bình</p>
            <p className="text-[28px] font-bold text-black">4.0 <span className="text-[14px] text-gray-500">/ 5.0</span></p>
          </div>
        </div>
        <div className="bg-white rounded-[20px] shadow-md p-5 flex items-center gap-4">
          <TrendingUp size={32} className="text-[#fb7104]" />
          <div>
            <p className="text-[13px] text-gray-600">Tăng trưởng tháng này</p>
            <p className="text-[28px] font-bold text-[#fb7104]">+12%</p>
          </div>
        </div>
        <div className="bg-white rounded-[20px] shadow-md p-5 flex items-center gap-4">
          <Award size={32} className="text-[#fb7104]" />
          <div>
            <p className="text-[13px] text-gray-600">Tổng điểm PAI</p>
            <p className="text-[28px] font-bold text-black">120 <span className="text-[14px] text-gray-500">điểm</span></p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Radar Chart */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <h3 className="text-[14px] font-semibold text-black mb-3">Biểu đồ PAI theo tiêu chí</h3>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9 }} />
              <Radar dataKey="A" stroke="#fb7104" fill="#fb7104" fillOpacity={0.4} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <h3 className="text-[14px] font-semibold text-black mb-3">Top 5 tỉnh theo PAI</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0e0d0" />
              <XAxis type="number" domain={[0, 5]} tick={{ fontSize: 10 }} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={70} />
              <Tooltip />
              <Bar dataKey="value" fill="#fb7104" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <h3 className="text-[14px] font-semibold text-black mb-3">Xu hướng PAI 6 tháng</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0e0d0" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis domain={[3, 5]} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#fb7104" strokeWidth={2} dot={{ fill: "#fb7104" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Province Table */}
      <div className="bg-white rounded-[20px] shadow-md p-5 mt-4">
        <h3 className="text-[15px] font-semibold text-black mb-4">Bảng xếp hạng PAI tỉnh</h3>
        <div className="grid grid-cols-5 text-[12px] font-semibold text-gray-600 border-b border-gray-100 pb-2 mb-1">
          <span>Tỉnh / Thành phố</span>
          <span className="text-center">Điểm PAI</span>
          <span className="text-center">Sao đánh giá</span>
          <span className="text-center">Xu hướng</span>
          <span className="text-center">Thao tác</span>
        </div>
        {provinces.map((p, i) => (
          <div key={i} className="grid grid-cols-5 items-center py-3 border-b border-gray-50">
            <span className="text-[13px] font-medium text-black">{p.name}</span>
            <span className="text-[16px] font-bold text-[#fb7104] text-center">{p.score}</span>
            <div className="flex justify-center gap-0.5">
              {Array.from({ length: 5 }, (_, si) => (
                <Star
                  key={si}
                  size={14}
                  className={si < p.stars ? "text-[#fb7104]" : "text-gray-200"}
                  fill={si < p.stars ? "#fb7104" : "none"}
                />
              ))}
            </div>
            <span
              className={`text-[12px] text-center font-medium ${
                p.trend.startsWith("+") ? "text-green-500" : p.trend === "0.0" ? "text-gray-400" : "text-red-500"
              }`}
            >
              {p.trend}
            </span>
            <div className="flex justify-center">
              <button className="px-3 py-1 border border-[#fb7104] text-[#fb7104] rounded-[7px] text-[11px]">
                Chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
