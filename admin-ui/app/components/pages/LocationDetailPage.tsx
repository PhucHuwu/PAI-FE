import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Clock, ChevronDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";
import imgLocation from "figma:asset/909578bf5c2257d52e9997ab9bcb124e58cd85ef.png";

const freqData = Array.from({ length: 12 }, (_, i) => ({ name: `T${i + 1}`, value: Math.floor(Math.random() * 60) + 20 }));
const pieData = [
  { name: "Phim điện ảnh", value: 40 },
  { name: "TVC quảng cáo", value: 30 },
  { name: "MV Ca nhạc", value: 30 },
];
const PIE_COLORS = ["#fb7104", "#ffd0a2", "#d1d5db"];

const crewList = [
  {
    id: 1,
    name: "Đoàn phim Sao Việt",
    dateRange: "Ngày 16/04 - 23/04/2026",
    members: 88,
    status: "Đang quay",
    statusColor: "bg-[#fb7104]",
  },
  {
    id: 2,
    name: "Đoàn phim TVC AcePlus",
    dateRange: "Ngày 22/04 - 23/04/2026",
    members: 18,
    status: "3 ngày nữa",
    statusColor: "bg-[#fb7104]",
  },
  {
    id: 3,
    name: "Đoàn phim MV SkyBand",
    dateRange: "Ngày 13/04 - 15/04/2026",
    members: 20,
    status: "Đã kết thúc",
    statusColor: "bg-gray-400",
  },
];

const diary = [
  { time: "8:00", desc: "Đoàn phim Sao Việt đã vào set, chuẩn bị lịch diễn xuất" },
  { time: "18:00", desc: "Hoàn tất cảnh quay ngày 1, đoàn di chuyển về khách sạn và nghỉ" },
];

const calendarDays = [
  { day: "Thứ 2", date: 18 },
  { day: "Thứ 3", date: 19 },
  { day: "Thứ 4", date: 20, active: true },
  { day: "Thứ 5", date: 21, active: true },
  { day: "Thứ 6", date: 22, active: true },
  { day: "Thứ 7", date: 23 },
  { day: "CN", date: 24 },
];

export function LocationDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const locationName = ["Sa Pa", "Vịnh Hạ Long", "Hà Giang", "Ninh Bình", "Hội An", "Đà Lạt"][Number(id ?? 1) - 1] ?? "Sa Pa";

  return (
    <div className="p-6 min-w-[900px]">
      {/* Title */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-[28px] font-bold text-[#ba252e] uppercase">QUẢN LÝ ĐỊA ĐIỂM</h1>
        <button
          onClick={() => navigate("/dia-diem")}
          className="bg-white rounded-[12px] px-4 py-2 shadow text-gray-700 hover:bg-gray-50"
        >
          <ArrowLeft size={18} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Left: Schedule */}
        <div className="col-span-2 flex flex-col gap-4">
          {/* Active crew banner */}
          <div className="bg-white rounded-[20px] shadow-md p-4">
            <div className="flex items-center gap-2 text-[14px] text-black border-b border-gray-100 pb-3 mb-3">
              <Clock size={16} className="text-[#ba252e]" />
              <span className="font-medium">Đang có đoàn quay</span>
              <span className="text-[#fb7104] font-semibold">Đoàn phim Sao Việt</span>
            </div>
            <p className="text-[15px] text-black font-medium">
              Bàn giao sau: <strong className="text-[20px]">02 giờ 45 phút</strong>
              <span className="ml-1 text-gray-400">⊙</span>
            </p>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-[20px] shadow-md p-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[15px] font-medium">Tháng 5</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
            <div className="grid grid-cols-7 gap-2 mb-3">
              {calendarDays.map((d) => (
                <div key={d.date} className="text-center text-[12px] text-gray-500">{d.day}</div>
              ))}
              {calendarDays.map((d) => (
                <div
                  key={d.date}
                  className={`text-center py-2 rounded-full text-[14px] font-medium ${
                    d.active ? "bg-[#fb7104] text-white" : "text-black"
                  }`}
                >
                  {d.date}
                </div>
              ))}
            </div>
          </div>

          {/* Crew List */}
          <div className="bg-white rounded-[20px] shadow-md p-4">
            {crewList.map((crew) => (
              <div key={crew.id} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
                <img src={imgLocation} alt="" className="w-[70px] h-[50px] object-cover rounded-[8px] flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[14px] font-semibold text-black">{crew.name}</p>
                  <p className="text-[12px] text-gray-500">{crew.dateRange}</p>
                  <p className="text-[12px] text-gray-500">{crew.members} người</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`${crew.statusColor} text-white px-3 py-1 rounded-full text-[12px] font-medium`}>
                    {crew.status} {crew.status !== "Đã kết thúc" && "›"}
                  </span>
                  <button className="text-[11px] text-[#ba252e] border border-[#ba252e] px-2 py-0.5 rounded-full">
                    {crew.id === 1 ? "Liên hệ trưởng đoàn ›" : crew.id === 2 ? "Xem yêu cầu kỹ thuật ›" : "Đã kết thúc ›"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Stats */}
        <div className="flex flex-col gap-4">
          {/* Frequency */}
          <div className="bg-white rounded-[20px] shadow-md p-4">
            <h3 className="text-[14px] font-semibold text-black mb-2">Đoàn phim đang thực hiện</h3>
            <p className="text-[13px] text-gray-500 mb-2">Tần suất sử dụng</p>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={freqData}>
                <Bar dataKey="value" fill="#fb7104" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-[20px] shadow-md p-4">
            <h3 className="text-[14px] font-semibold text-black mb-2">Phân loại nội dung quay</h3>
            <div className="flex items-center gap-3">
              <PieChart width={100} height={100}>
                <Pie data={pieData} cx={45} cy={45} innerRadius={28} outerRadius={48} dataKey="value">
                  {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                </Pie>
              </PieChart>
              <div className="space-y-1">
                {pieData.map((d, i) => (
                  <div key={i} className="flex items-center gap-1 text-[11px]">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: PIE_COLORS[i] }} />
                    <span>{d.value}% {d.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Diary */}
          <div className="bg-white rounded-[20px] shadow-md p-4">
            <h3 className="text-[14px] font-semibold text-black mb-1">Nhật kí hiện trường</h3>
            <p className="text-[11px] text-gray-500 mb-3">Thứ X, ngày DD/MM/YYYY</p>
            <div className="space-y-3">
              {diary.map((d, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-[12px] font-semibold text-black w-12 flex-shrink-0">{d.time}</span>
                  <p className="text-[12px] text-gray-700">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
