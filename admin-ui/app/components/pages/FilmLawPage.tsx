import { FileText, TrendingUp, Edit2, BarChart2 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const laws = [
  { id: 1, title: "Hướng dẫn cấp phép cho bối cảnh 2023", category: "Luật Chính Quy", subcat: "Địa phương", active: true, priority: 1 },
  { id: 2, title: "Hướng dẫn cấp phép cho bối cảnh 2023", category: "Luật Chính Quy", subcat: "Địa phương", active: true, priority: 2 },
  { id: 3, title: "Hướng dẫn cấp phép cho bối cảnh 2023", category: "Quy định bối cảnh", subcat: "Địa phương", active: true, priority: 3 },
  { id: 4, title: "Hướng dẫn cấp phép cho bối cảnh 2023", category: "Luật Chính Quy", subcat: "Địa phương", active: false, priority: 4 },
  { id: 5, title: "Hướng dẫn cấp phép cho bối cảnh 2023", category: "Quy định hướng dẫn", subcat: "Địa phương", active: true, priority: 5 },
];

const pieData = [
  { name: "Luật chính", value: 40 },
  { name: "Quy định bối cảnh", value: 30 },
  { name: "Quy định địa phương", value: 30 },
];
const PIE_COLORS = ["#fb7104", "#ffd0a2", "#d1d5db"];

const barData = [
  { name: "Luật điện ảnh", value1: 60, value2: 40 },
  { name: "Nghị định", value1: 50, value2: 30 },
];

const log = [
  { time: "10:00", date: "08/12/2025", text: "Sở VHTT Quảng Ninh vừa duyệt Luật Điện Ảnh" },
  { time: "10:00", date: "08/12/2025", text: "Sở VHTT Quảng Ninh vừa duyệt Luật Điện Ảnh" },
];

export function FilmLawPage() {
  return (
    <div className="p-6 min-w-[900px]">
      <h1 className="text-[28px] font-bold mb-6">
        <span className="text-[#ba252e]">QUẢN LÝ NỘI DUNG </span>
        <span className="text-[#fb7104]">LUẬT ĐIỆN ẢNH</span>
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div className="bg-white rounded-[20px] shadow-md p-5 flex items-center gap-4">
          <FileText size={32} className="text-[#ba252e]" />
          <div>
            <p className="text-[13px] text-gray-600">Tổng số bài viết</p>
            <p className="text-[32px] font-bold text-black">86</p>
          </div>
        </div>
        <div className="bg-white rounded-[20px] shadow-md p-5 flex items-center gap-4">
          <TrendingUp size={32} className="text-[#ba252e]" />
          <div>
            <p className="text-[13px] text-gray-600">Lượt xem/ Tải về</p>
            <p className="text-[28px] font-bold text-black">21K / 8K</p>
          </div>
        </div>
        <div className="bg-white rounded-[20px] shadow-md p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Edit2 size={28} className="text-[#ba252e]" />
            <div>
              <p className="text-[13px] text-gray-600">Nội dung chờ duyệt</p>
              <p className="text-[32px] font-bold text-black">4</p>
            </div>
          </div>
          <button className="bg-[#fb7104] text-white rounded-[10px] px-3 py-2 text-[12px] font-semibold">
            + Đăng bài mới
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Law Table */}
        <div className="col-span-2 bg-white rounded-[20px] shadow-md overflow-hidden">
          <div className="bg-[#fb7104] px-5 py-3">
            <h3 className="text-white font-semibold text-[16px]">Luật Điện Ảnh</h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-4 text-[12px] font-semibold text-gray-600 border-b border-gray-100 pb-2 mb-1 gap-2">
              <span>Tiêu đề Văn bản/ Bài viết</span>
              <span>Chuyên mục</span>
              <span>Trạng thái</span>
              <span className="text-center">TT ưu tiên</span>
            </div>
            {laws.map((law) => (
              <div key={law.id} className="grid grid-cols-4 items-center py-2.5 border-b border-gray-50 gap-2">
                <div>
                  <p className="text-[12px] text-black">{law.title}</p>
                </div>
                <div>
                  <p className="text-[12px] text-black">{law.category}</p>
                  <p className="text-[11px] text-gray-500">{law.subcat}</p>
                </div>
                <div className="flex items-center gap-1">
                  <div
                    className={`relative w-10 h-5 rounded-full cursor-pointer transition-colors ${law.active ? "bg-[#fb7104]" : "bg-gray-400"}`}
                  >
                    <div
                      className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${law.active ? "translate-x-5" : "translate-x-0.5"}`}
                    />
                  </div>
                  <span className="text-[11px] font-bold" style={{ color: law.active ? "#fb7104" : "#9ca3af" }}>
                    {law.active ? "ON" : "OFF"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-black">{law.priority}</span>
                  <button className="flex items-center gap-1 px-2 py-1 border border-[#fb7104] text-[#fb7104] rounded-[7px] text-[11px]">
                    <Edit2 size={10} /> Sửa
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center gap-3 mt-3 text-[12px] text-gray-500">
              <button className="px-2 py-1 border rounded">‹</button>
              <span className="px-3 py-1 bg-[#fb7104] text-white rounded">1</span>
              <span>1 of 4 pages</span>
              <button className="px-2 py-1 border rounded">›</button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {/* Pie Chart */}
          <div className="bg-white rounded-[20px] shadow-md p-4">
            <h3 className="text-[14px] font-semibold mb-2 flex items-center gap-2">
              <span className="text-[#ba252e]">⊙</span> Tỷ trọng chuyên mục
            </h3>
            <div className="flex items-center gap-2">
              <PieChart width={100} height={100}>
                <Pie data={pieData} cx={45} cy={45} innerRadius={28} outerRadius={48} dataKey="value">
                  {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                </Pie>
              </PieChart>
              <div className="space-y-1">
                {pieData.map((d, i) => (
                  <div key={i} className="flex items-center gap-1 text-[11px]">
                    <div className="w-2 h-2 rounded-full" style={{ background: PIE_COLORS[i] }} />
                    <span>{d.value}% {d.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-[20px] shadow-md p-4">
            <h3 className="text-[14px] font-semibold mb-2 flex items-center gap-2">
              <BarChart2 size={14} className="text-[#ba252e]" /> Hiệu suất tìm kiếm
            </h3>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0e0d0" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip />
                <Bar dataKey="value1" fill="#fb7104" radius={[3, 3, 0, 0]} />
                <Bar dataKey="value2" fill="#ffd0a2" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Log */}
          <div className="bg-white rounded-[20px] shadow-md p-4">
            <h3 className="text-[14px] font-semibold mb-3 flex items-center justify-between">
              Nhật kí thay đổi nội dung
              <FileText size={14} className="text-gray-400" />
            </h3>
            <div className="space-y-3">
              {log.map((l, i) => (
                <div key={i}>
                  <div className="flex gap-2 text-[11px] text-gray-500 mb-0.5">
                    <span>{l.time}</span>
                    <span>{l.date}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#fb7104] mt-1 flex-shrink-0" />
                    <p className="text-[12px] text-black">{l.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}