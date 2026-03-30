import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, Legend,
  BarChart, Bar,
} from "recharts";
import { FileText, Edit2 } from "lucide-react";

const lineData = [
  { month: "Tháng 1", value: 20 },
  { month: "2", value: 35 },
  { month: "3", value: 40 },
  { month: "4", value: 55 },
  { month: "5", value: 60 },
  { month: "6", value: 75 },
  { month: "7", value: 85 },
  { month: "8", value: 100 },
  { month: "9", value: 130 },
  { month: "Tháng 10", value: 175 },
];

const pieData = [
  { name: "Miền Bắc", value: 40 },
  { name: "Miền Trung", value: 30 },
  { name: "Miền Nam", value: 30 },
];
const PIE_COLORS = ["#fb7104", "#ffd0a2", "#d1d5db"];

const radarData = [
  { subject: "A", value: 80 },
  { subject: "B", value: 90 },
  { subject: "C", value: 70 },
  { subject: "D", value: 85 },
  { subject: "E", value: 75 },
];

const barData = [
  { name: "Quảng Ninh", value: 130 },
  { name: "Hà Nội", value: 125 },
  { name: "Thái Nguyên", value: 118 },
  { name: "...", value: 110 },
];

const activities = [
  { icon: "edit", text: 'Sở VHTTDL Quảng Ninh vừa duyệt bài sự kiện "Vịnh Hạ Long"', date: "Thứ 6, 11/4" },
  { icon: "image", text: "5 hình ảnh điểm du lịch độc quyền vừa được cập nhật mới", date: "Thứ 5, 10/4" },
  { icon: "edit", text: 'Sở VHTTDL Quảng Ninh vừa duyệt bài sự kiện "Vịnh Hạ Long"', date: "Thứ 6, 11/4" },
  { icon: "image", text: "5 hình ảnh điểm du lịch độc quyền vừa được cập nhật mới", date: "Thứ 5, 10/4" },
];

export function DashboardPage() {
  return (
    <div className="p-6 min-w-[900px]">
      <h1 className="text-[28px] font-bold text-[#ba252e] mb-6 uppercase tracking-wide">
        BẢNG ĐIỀU KHIỂN
      </h1>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Bài đăng chờ duyệt", value: "120", suffix: "bối cảnh" },
          { label: "Tỉnh thành tham gia", value: "45/63", suffix: "" },
          { label: "Tổng địa điểm", value: "1,245", suffix: "" },
          { label: "Chỉ số Pai", value: "120", suffix: "điểm" },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-[25px] shadow-md p-5 flex items-center gap-3">
            <div className="text-[#ba252e]">
              <FileText size={36} />
            </div>
            <div>
              <p className="text-[13px] text-gray-600 font-medium">{s.label}</p>
              <p className="text-[30px] font-bold text-black leading-tight">
                {s.value}
                {s.suffix && <span className="text-[14px] font-normal text-gray-600 ml-1">{s.suffix}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Line Chart */}
        <div className="col-span-2 bg-white rounded-[20px] shadow-md p-5">
          <h3 className="text-[15px] font-semibold text-black mb-3">Tăng trưởng số đoàn phim tìm địa điểm</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0e0d0" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 200]} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#fb7104" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie + Radar */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-[20px] shadow-md p-4 flex-1">
            <h3 className="text-[13px] font-semibold text-black mb-2">Top khu vực</h3>
            <div className="flex items-center gap-2">
              <PieChart width={120} height={100}>
                <Pie data={pieData} cx={55} cy={50} innerRadius={30} outerRadius={50} dataKey="value">
                  {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                </Pie>
              </PieChart>
              <div className="flex flex-col gap-1">
                {pieData.map((d, i) => (
                  <div key={i} className="flex items-center gap-1 text-[11px]">
                    <div className="w-3 h-3 rounded-full" style={{ background: PIE_COLORS[i] }} />
                    <span>{d.value}% {d.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[20px] shadow-md p-4 flex-1">
            <h3 className="text-[13px] font-semibold text-black mb-2">Top 5 Pai Tỉnh</h3>
            <ResponsiveContainer width="100%" height={100}>
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                <Radar dataKey="value" stroke="#fb7104" fill="#fb7104" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Activity Log */}
        <div className="col-span-2 bg-white rounded-[20px] shadow-md p-5">
          <h3 className="text-[15px] font-semibold text-black mb-3">Nhật ký hoạt động toàn quốc</h3>
          <div className="flex flex-col divide-y divide-gray-100">
            {activities.map((a, i) => (
              <div key={i} className="flex items-start gap-3 py-3">
                <div className="mt-1 text-[#ba252e]">
                  {a.icon === "edit" ? <Edit2 size={16} /> : <FileText size={16} />}
                </div>
                <div>
                  <p className="text-[13px] text-black">{a.text}</p>
                  <p className="text-[11px] text-gray-500">{a.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <h3 className="text-[15px] font-semibold text-black mb-1">Chỉ số Pai Tỉnh</h3>
          <p className="text-[11px] text-gray-500 mb-3">Thứ 5, 10/4/2024</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0e0d0" />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis domain={[95, 135]} tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#fb7104" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
