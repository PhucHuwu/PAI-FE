import { useNavigate } from "react-router";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import imgNewsThumbnail from "figma:asset/556197b5269a316d514f8a9cf128d8171d8a6e1a.png";

const newsItems = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "Hà Giang: Khai thác bối cảnh mùa hoa tam giác mạch",
  author: "Nguyễn Văn Minh",
  org: "Sở VHTT Hà Giang",
  province: "Hà Giang",
  status: "Chờ duyệt",
}));

const pieData = [
  { name: "Sở VHTT", value: 54 },
  { name: "Hiệp hội Điện Ảnh", value: 39 },
  { name: "Đoàn phim địa phương", value: 15 },
];
const PIE_COLORS = ["#fb7104", "#ffd0a2", "#d1d5db"];

const logItems = [
  { time: "00:00", date: "mm/dd/yyyy", text: 'Sở VHTTDL Quảng Ninh vừa duyệt tại Vịnh Hạ Long mùa hè' },
  { time: "00:00", date: "mm/dd/yyyy", text: 'Hà Giang: Bài viết mới chưa duyệt', highlight: true },
  { time: "00:00", date: "mm/dd/yyyy", text: 'Đà Nẵng: 5 hình ảnh được cập nhật' },
];

export function NewsPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6 min-w-[900px]">
      <h1 className="text-[22px] font-semibold text-black mb-6">Quản lý tin tức &amp; Sự kiện</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-[20px] shadow-md p-5 flex items-center gap-4">
          <div className="bg-[#fff1e4] p-2.5 rounded-[8px]">
            <svg width="28" height="28" viewBox="0 0 25 25.8337" fill="none">
              <rect width="25" height="20" rx="3" stroke="#BA252E" strokeWidth="2" fill="none" />
              <line x1="4" y1="8" x2="21" y2="8" stroke="#BA252E" strokeWidth="1.5" />
              <line x1="4" y1="13" x2="21" y2="13" stroke="#BA252E" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] text-gray-600">Tổng tin bài từ các tỉnh</p>
            <p className="text-[28px] font-bold text-black">1,258</p>
          </div>
        </div>
        <div className="bg-white rounded-[20px] shadow-md p-5 flex items-center gap-4 relative">
          <div className="bg-[#fff1e4] p-2.5 rounded-[8px]">
            <svg width="28" height="28" viewBox="0 0 25.8333 25.8333" fill="none">
              <circle cx="12.9" cy="12.9" r="11.9" stroke="#BA252E" strokeWidth="2" />
              <path d="M9 9h8M9 14h5" stroke="#BA252E" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] text-gray-600">Tin chờ phê duyệt</p>
            <p className="text-[28px] font-bold text-black">17</p>
          </div>
          <div className="absolute top-2 right-4 bg-[#ba252e] text-white text-[11px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
            11
          </div>
        </div>
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <p className="text-[13px] text-gray-600 mb-1">Tính hoạt động tích cực/Tuần</p>
          <p className="text-[28px] font-bold text-black">21/52</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="bg-[#fff1e4] rounded-[8px] px-2 py-1 flex items-center gap-1">
              <span className="text-[#ba252e] text-[12px]">📅</span>
              <span className="text-[11px] text-[#ba252e]">240 cập nhật tuần này</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* News List */}
        <div className="col-span-2 bg-white rounded-[20px] shadow-md p-5">
          <h3 className="text-[15px] font-semibold text-black mb-4">Danh sách Tin tức &amp; Sự kiện</h3>
          <div className="space-y-1">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 py-2.5 px-2 border-b border-gray-50 cursor-pointer hover:bg-[#fff8f0] rounded-md transition-colors"
                onClick={() => navigate(`/tin-tuc/${item.id}`)}
              >
                <img src={imgNewsThumbnail} alt="" className="w-14 h-10 object-cover rounded-[6px] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-black line-clamp-1">{item.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-gray-500">{item.author}</span>
                    <span className="text-[11px] text-gray-400">|</span>
                    <span className="text-[11px] text-gray-500">{item.org}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#fb7104]" />
                    <span className="text-[11px] text-gray-500">{item.province}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="flex items-center gap-1 border border-[#fb7104] text-[#fb7104] px-2 py-0.5 rounded-full text-[11px]">
                    ⊙ {item.status}
                  </span>
                  <div className="flex gap-1">
                    <button
                      className="px-2 py-0.5 bg-gradient-to-b from-[#ff8423] to-[#e46400] text-white rounded-full text-[11px] font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Duyệt
                    </button>
                    <button
                      className="px-2 py-0.5 bg-white border border-[#fb7104] text-[#fb7104] rounded-full text-[11px] font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      từ chối
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {/* Pie */}
          <div className="bg-white rounded-[20px] shadow-md p-4">
            <h3 className="text-[14px] font-semibold mb-2">Phân tích nguồn tin</h3>
            <div className="flex items-center gap-2">
              <div className="relative">
                <PieChart width={100} height={100}>
                  <Pie data={pieData} cx={45} cy={45} innerRadius={28} outerRadius={48} dataKey="value">
                    {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                  </Pie>
                </PieChart>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[13px] font-bold text-black">87%</span>
                </div>
              </div>
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

          {/* Log */}
          <div className="bg-white rounded-[20px] shadow-md p-4">
            <h3 className="text-[14px] font-semibold mb-3">Nhật ký hệ thống tin tức</h3>
            <div className="space-y-3">
              {logItems.map((l, i) => (
                <div key={i}>
                  <div className="flex gap-2 text-[11px] text-gray-400 mb-0.5">
                    <span>{l.time}</span>
                    <span>{l.date}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#fb7104] mt-1 flex-shrink-0" />
                    <p className="text-[12px]">
                      {l.highlight ? (
                        <>Hà Giang: Bài viết mới <span className="text-[#ba252e]">chưa duyệt</span></>
                      ) : (
                        l.text
                      )}
                    </p>
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
