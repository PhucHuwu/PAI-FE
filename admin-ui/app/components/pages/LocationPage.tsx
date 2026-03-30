import { useNavigate } from "react-router";
import { MapPin, BarChart2, Link } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import imgLocation from "figma:asset/909578bf5c2257d52e9997ab9bcb124e58cd85ef.png";
import imgMap from "figma:asset/4ac0bcf5e046c023dc5abfbbe93a26a0039fae49.png";

const pieData = [
  { name: "Cảnh du lịch lịch sử", value: 40 },
  { name: "Phim trường", value: 30 },
  { name: "Cảnh thiên nhiên", value: 30 },
];
const PIE_COLORS = ["#fb7104", "#ffd0a2", "#d1d5db"];

const barData = [
  { name: "Bắc", value: 10 },
  { name: "Trung", value: 9 },
  { name: "Nam", value: 6 },
];

const locations = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: "Sa Pa",
  category: "Cảnh thiên nhiên",
  location: "Sa Pa, Lào Cai",
  status: i % 3 === 0 ? "Đang bảo trì" : "Sẵn sàng",
}));

export function LocationPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6 min-w-[900px]">
      <h1 className="text-[28px] font-bold text-[#ba252e] mb-6 uppercase">QUẢN LÝ ĐỊA ĐIỂM</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-[20px] shadow-md p-5 flex items-center gap-4">
          <MapPin size={32} className="text-[#ba252e]" />
          <div>
            <p className="text-[13px] text-gray-600">Tổng số bối cảnh</p>
            <p className="text-[28px] font-bold text-black">34 <span className="text-[14px] font-normal">bối cảnh</span></p>
          </div>
          <div className="ml-auto text-gray-300">
            <BarChart2 size={18} />
          </div>
        </div>
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <p className="text-[13px] text-gray-600 mb-1">Tỷ lệ bối cảnh đang hoạt động</p>
          <div className="flex items-center gap-3">
            <p className="text-[28px] font-bold">9/34</p>
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-[#fb7104] rounded-full" style={{ width: "36%" }} />
              </div>
            </div>
            <span className="text-[#ba252e] font-bold">36%</span>
          </div>
        </div>
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <p className="text-[13px] text-gray-600">
            <span className="text-[#fb7104]">%</span> Độ tăng trưởng bối cảnh
          </p>
          <p className="text-[28px] font-bold text-[#fb7104]">+12% <span className="text-[14px] font-normal text-black">Trong tháng này</span></p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Left: Map + Table */}
        <div className="col-span-2 flex flex-col gap-4">
          {/* Map Section */}
          <div className="bg-white rounded-[20px] shadow-md p-5">
            <h3 className="text-[15px] font-semibold text-black mb-3 flex items-center gap-2">
              <BarChart2 size={16} className="text-[#ba252e]" />
              Hiệu suất khai thác theo vùng
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[12px] overflow-hidden">
                <img src={imgMap} alt="Vietnam Map" className="w-full h-[180px] object-cover" />
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0e0d0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis domain={[0, 12]} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#fb7104" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Location Table */}
          <div className="bg-white rounded-[20px] shadow-md p-5">
            <h3 className="text-[15px] font-semibold text-black mb-4">Quản lý 34 bối cảnh thực địa</h3>
            <div className="grid grid-cols-3 text-[12px] font-semibold text-gray-600 border-b border-gray-100 pb-2 mb-1">
              <span>Hình & Tên bối cảnh</span>
              <span>Phân loại & Vị trí</span>
              <span>Trạng thái</span>
            </div>
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="grid grid-cols-3 items-center py-3 border-b border-gray-50 cursor-pointer hover:bg-[#fff8f0] rounded-md px-1 transition-colors"
                onClick={() => navigate(`/dia-diem/${loc.id}`)}
              >
                <div className="flex items-center gap-2">
                  <img src={imgLocation} alt="" className="w-14 h-10 object-cover rounded-[8px]" />
                  <span className="text-[13px] font-medium">{loc.name}</span>
                </div>
                <div>
                  <p className="text-[12px] text-gray-700">{loc.category}</p>
                  <p className="text-[12px] text-gray-500">{loc.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-[11px] font-medium ${
                      loc.status === "Sẵn sàng" ? "bg-green-500 text-white" : "bg-[#fb7104] text-white"
                    }`}
                  >
                    {loc.status}
                  </span>
                  <Link size={14} className="text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Charts + Partners */}
        <div className="flex flex-col gap-4">
          {/* Pie Chart */}
          <div className="bg-white rounded-[20px] shadow-md p-5">
            <h3 className="text-[14px] font-semibold text-black mb-2">Loại hình bối cảnh</h3>
            <div className="flex justify-center">
              <PieChart width={160} height={130}>
                <Pie data={pieData} cx={75} cy={60} innerRadius={35} outerRadius={60} dataKey="value">
                  {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                </Pie>
              </PieChart>
            </div>
            <div className="space-y-1 mt-1">
              {pieData.map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px]">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: PIE_COLORS[i] }} />
                  <span className="text-gray-700">{d.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="bg-white rounded-[20px] shadow-md p-5">
            <h3 className="text-[14px] font-semibold text-black mb-3">Hiệp hội & đối tác địa phương</h3>
            <div className="space-y-3">
              {[
                { name: "Hiệp hội điện ảnh Hà Nội", status: "Đã kết nối đối tác", connected: true },
                { name: "Hiệp hội điện ảnh Bắc Trung Bộ", status: "Đang kết nối đối tác", connected: false },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-medium text-black">{p.name}</p>
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full ${p.connected ? "bg-[#ba252e]" : "border-2 border-[#ba252e]"}`} />
                      <p className="text-[11px] text-gray-500">{p.status}</p>
                    </div>
                  </div>
                  <span className="text-[#ba252e] text-[16px]">›</span>
                </div>
              ))}
              <button className="w-full mt-2 py-2 border border-[#fb7104] text-[#fb7104] rounded-[10px] text-[13px] font-medium hover:bg-[#fff1e4]">
                Xem đối tác
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
