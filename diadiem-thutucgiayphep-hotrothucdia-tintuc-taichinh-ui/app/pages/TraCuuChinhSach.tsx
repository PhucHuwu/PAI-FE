import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { imgFooterLogo } from "../../assets";
import svgPaths from "../../imports/svg-7sopmc8ds3";
import imgRectangle300 from "figma:asset/81e0f6ffd67bab0e5c87dad316bffc8ae429735c.png";

// ─── Province Data ────────────────────────────────────────────────────────────
type ProvinceKey = keyof typeof PROVINCE_DB;

const PROVINCE_LIST = [
  "Phú Yên", "Đà Nẵng", "Quảng Nam", "Hà Nội", "Tp. Hồ Chí Minh",
  "Quảng Ninh", "Khánh Hòa", "Bình Định", "Hải Phòng", "Lâm Đồng",
  "Nghệ An", "Thừa Thiên Huế", "Bình Thuận", "Vũng Tàu", "Cần Thơ",
  "Ninh Bình", "Phú Quốc", "Hội An",
];

const PROVINCE_DB = {
  "Phú Yên": {
    region: "Miền Trung",
    category: "ĐIỆN ẢNH - HOÀN TIỀN",
    score: 7.2,
    regionAvgDiff: "+0.8",
    policies: {
      tongQuan: ["Có cơ chế hỗ trợ sản xuất", "Không có hoàn tiền trực tiếp", "Hỗ trợ hậu cần", "Hỗ trợ nhân lực địa phương"],
      uuDai: ["Giảm 30-50% phí thuê địa điểm công", "Ưu tiên cấp phép địa điểm đặc biệt", "Hỗ trợ chi phí nhân công địa phương"],
      coQuan: ["Sở Văn hóa, Thể thao và Du Lịch Phú Yên", "Sở Kế hoạch và Đầu tư", "Ban Quản lý Khu kinh tế"],
    },
    tinh_trang: [
      { ok: false, label: "Không có hoàn tiền" },
      { ok: true,  label: "Có hỗ trợ giảm chi phí bối cảnh" },
      { ok: true,  label: "Có hỗ trợ hậu cần" },
    ],
    maxUuDai: "Giảm 30 - 50% phí thuê địa điểm công",
    thoiGian: "7 - 15 ngày làm việc",
    chiSo: [
      { label: "Chính sách hỗ trợ", value: "6 / 10" },
      { label: "Chi phí dịch vụ địa phương", value: "8 / 10" },
      { label: "Thủ tục hành chính", value: "7 / 10" },
    ],
    dieuKien: ["Phải có giấy phép quay hợp lệ", "Nội dung phù hợp định hướng quảng bá địa phương", "Có cam kết sử dụng nhân sự địa phương tối thiểu x%"],
    soVanHoa: "Sở Văn hóa, Thể thao và Du Lịch Phú Yên",
    diaChi: "Địa chỉ: .............................tỉnh Phú Yên / SĐT: 09xxxxxxxx",
    email: "Email: ......................@gmail.com",
    soSanh: ["Khánh Hòa", "Bình Định"],
  },
  "Đà Nẵng": {
    region: "Miền Trung",
    category: "ĐIỆN ẢNH - ƯU ĐÃI CAO",
    score: 8.5,
    regionAvgDiff: "+2.1",
    policies: {
      tongQuan: ["Có chính sách hoàn tiền trực tiếp", "Hỗ trợ hậu cần đầy đủ", "Hỗ trợ nhân lực chuyên nghiệp"],
      uuDai: ["Hoàn tiền 20% chi tiêu nội địa", "Giảm 50% phí thuê địa điểm công", "Hỗ trợ kết nối bối cảnh"],
      coQuan: ["Sở Du lịch Đà Nẵng", "Sở Văn hóa và Thể thao Đà Nẵng"],
    },
    tinh_trang: [
      { ok: true, label: "Có hoàn tiền 20%" },
      { ok: true, label: "Có hỗ trợ chi phí bối cảnh" },
      { ok: true, label: "Có hỗ trợ hậu cần đầy đủ" },
    ],
    maxUuDai: "Hoàn tiền 20% chi tiêu nội địa",
    thoiGian: "5 - 10 ngày làm việc",
    chiSo: [
      { label: "Chính sách hỗ trợ", value: "9 / 10" },
      { label: "Chi phí dịch vụ địa phương", value: "8 / 10" },
      { label: "Thủ tục hành chính", value: "9 / 10" },
    ],
    dieuKien: ["Phải có giấy phép quay hợp lệ", "Cam kết quảng bá hình ảnh Đà Nẵng", "Sử dụng tối thiểu 30% nhân sự địa phương"],
    soVanHoa: "Sở Du lịch Đà Nẵng",
    diaChi: "Địa chỉ: 76 Nguyễn Chí Thanh, Đà Nẵng / SĐT: 02363xxxxxx",
    email: "Email: sodulich@danang.gov.vn",
    soSanh: ["Quảng Nam", "Thừa Thiên Huế"],
  },
  "Quảng Nam": {
    region: "Miền Trung",
    category: "ĐIỆN ẢNH - HỖ TRỢ TRỰC TIẾP",
    score: 7.8,
    regionAvgDiff: "+1.4",
    policies: {
      tongQuan: ["Hỗ trợ sử dụng di sản UNESCO", "Miễn phí vào cửa các bối cảnh công", "Hỗ trợ hậu cần"],
      uuDai: ["Miễn phí bối cảnh Hội An", "Giảm 40% phí thuê địa điểm", "Hỗ trợ kết nối cộng đồng"],
      coQuan: ["Sở Văn hóa, Thể thao và Du Lịch Quảng Nam", "Trung tâm Bảo tồn Di sản Hội An"],
    },
    tinh_trang: [
      { ok: false, label: "Không có hoàn tiền mặt" },
      { ok: true,  label: "Miễn phí vào cửa các điểm di sản" },
      { ok: true,  label: "Hỗ trợ hậu cần và nhân lực" },
    ],
    maxUuDai: "Miễn phí bối cảnh di sản UNESCO Hội An",
    thoiGian: "7 - 12 ngày làm việc",
    chiSo: [
      { label: "Chính sách hỗ trợ", value: "8 / 10" },
      { label: "Chi phí dịch vụ địa phương", value: "7 / 10" },
      { label: "Thủ tục hành chính", value: "8 / 10" },
    ],
    dieuKien: ["Có giấy phép quay hợp lệ", "Tuân thủ quy định bảo tồn di sản", "Nội dung quảng bá văn hóa Quảng Nam"],
    soVanHoa: "Sở Văn hóa, Thể thao và Du Lịch Quảng Nam",
    diaChi: "Địa chỉ: 220 Lê Duẩn, Tam Kỳ, Quảng Nam / SĐT: 0235xxxxxxx",
    email: "Email: svhttdl@quangnam.gov.vn",
    soSanh: ["Đà Nẵng", "Phú Yên"],
  },
};

// Fallback for provinces not in DB
const defaultProvince = PROVINCE_DB["Phú Yên"];
function getProvince(name: string) {
  return (PROVINCE_DB as any)[name] ?? { ...defaultProvince, category: "ĐIỆN ẢNH - HỖ TRỢ", score: 6.5, regionAvgDiff: "+0.3" };
}

// ─── Gauge Chart ──────────────────────────────────────────────────────────────
function GaugeChart({ score }: { score: number }) {
  // Map score (0-10) to needle angle: -90° (0) to +90° (10)
  // At score=7.2 → the needle points like the Figma design (roughly 7.2/10 * 180 - 90)
  const angle = (score / 10) * 180 - 90; // degrees from vertical
  // The gauge is a half-circle; needle rotates from the center
  return (
    <div className="relative flex justify-center items-end">
      <svg viewBox="0 0 305 136" fill="none" className="w-[220px]" preserveAspectRatio="xMidYMax meet">
        <g>
          <path d={svgPaths.p2c48ad00} fill="#729E90" />
          <path d={svgPaths.p14c50280} fill="#9EAF62" />
          <path d={svgPaths.p9b90200} fill="#EED88A" />
          <path d={svgPaths.p32dfb980} fill="#F9CB68" />
          <path d={svgPaths.p361d1f72} fill="#E58632" />
          {/* Needle */}
          <line
            x1="152" y1="76"
            x2={152 + 65 * Math.sin((angle * Math.PI) / 180)}
            y2={76 - 65 * Math.cos((angle * Math.PI) / 180)}
            stroke="#BA252E"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Center dot */}
          <circle cx="152" cy="76" r="5" fill="#BA252E" />
        </g>
      </svg>
    </div>
  );
}

// ─── Support Type Checkboxes ──────────────────────────────────────────────────
type SupportType = "Vé vào cửa" | "Miễn/giảm phí bối cảnh" | "Hỗ trợ hậu cần" | "Kết nối cơ quan chức năng" | "Liên kết doanh nghiệp";
const SUPPORT_TYPES: SupportType[] = [
  "Vé vào cửa",
  "Miễn/giảm phí bối cảnh",
  "Hỗ trợ hậu cần",
  "Kết nối cơ quan chức năng",
  "Liên kết doanh nghiệp",
];

// ─── Province Dropdown ────────────────────────────────────────────────────────
function ProvinceSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full h-[50px] bg-white rounded-xl shadow flex items-center px-5 gap-3 cursor-pointer hover:bg-gray-50"
      >
        <span className="flex-1 text-left text-black text-lg font-semibold">{value}</span>
        <svg className={`w-[11px] h-[7px] shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 10.5416 6.24659">
          <path d={svgPaths.p3c3ab600} fill="black" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 w-full bg-white rounded-xl shadow-lg max-h-64 overflow-y-auto border border-gray-100">
          {PROVINCE_LIST.map((p, i) => (
            <button
              key={p}
              type="button"
              onClick={() => { onChange(p); setOpen(false); }}
              className={`w-full text-left px-5 py-3 text-base cursor-pointer transition-colors
                ${p === value ? "bg-[rgba(251,113,4,0.1)] text-[#fb7104] font-semibold" : "text-black hover:bg-gray-50"}
                ${i !== 0 ? "border-t border-gray-100" : ""}
              `}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Status Row ───────────────────────────────────────────────────────────────
function StatusRow({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      {ok ? (
        <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
          <svg className="w-[18px] h-[13px]" fill="none" viewBox="0 0 17.5673 12.777">
            <path d={svgPaths.p3914d800} fill="#15B700" />
          </svg>
        </div>
      ) : (
        <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
          <svg className="w-[15px] h-[15px]" fill="none" viewBox="0 0 15.0145 15.0124">
            <path d={svgPaths.p1d996880} fill="#DD0000" />
          </svg>
        </div>
      )}
      <span className="text-black text-base">{label}</span>
    </div>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────
function Divider() {
  return <div className="border-t border-black/20 w-full" />;
}

// ─── File Icon (document) ─────────────────────────────────────────────────────
function FileIcon() {
  return (
    <div className="w-10 h-10 flex items-center justify-center shrink-0">
      <svg className="w-8 h-[33px]" fill="none" viewBox="0 0 31.6763 33.343">
        <path d={svgPaths.p29fe4700} fill="#FB7104" />
      </svg>
    </div>
  );
}

// ─── Tab Pills ────────────────────────────────────────────────────────────────
type InfoTab = "tongQuan" | "uuDai" | "coQuan";
const TAB_LABELS: { key: InfoTab; label: string }[] = [
  { key: "tongQuan", label: "Tổng quan chính sách" },
  { key: "uuDai",    label: "Ưu đãi cụ thể" },
  { key: "coQuan",   label: "Cơ quan phụ trách" },
];

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 py-10">
        <div className="flex gap-12 items-start">
          <div className="w-[320px] shrink-0">
            <div className="h-[90px] w-[280px] relative mb-3">
              <img src={imgFooterLogo} alt="Việt Nam PAI" className="absolute inset-0 w-full h-full object-contain object-left" />
            </div>
            <p className="text-[#414853] text-sm leading-relaxed">
              Được bảo trợ bởi Học viện Công nghệ Bưu chính Viễn thông<br />
              và Hiệp hội Xúc tiến Điện ảnh Việt Nam
            </p>
          </div>
          <div className="flex flex-1 gap-20 pt-4">
            {["Khám phá", "Sản xuất", "Chính sách", "Liên hệ"].map((item, i) => (
              <span key={i} className="font-bold text-[#414853] text-xl cursor-pointer hover:text-[#fb7104] transition-colors">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TraCuuChinhSach() {
  const [province, setProvince] = useState("Phú Yên");
  const [supports, setSupports] = useState<Set<SupportType>>(new Set());
  const [searched, setSearched] = useState(true);
  const [activeTab, setActiveTab] = useState<InfoTab>("tongQuan");

  const data = getProvince(province);

  const toggleSupport = (s: SupportType) => {
    setSupports((prev) => {
      const next = new Set(prev);
      next.has(s) ? next.delete(s) : next.add(s);
      return next;
    });
  };

  const handleSearch = () => setSearched(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ee]">
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 480 }}>
        <img src={imgRectangle300} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* White frosted overlay */}
        <div className="absolute top-16 left-5 w-[560px] bg-white/60 rounded-xl px-8 py-6 backdrop-blur-sm">
          <h1 className="text-5xl font-semibold text-black mb-2 leading-tight">
            CHÍNH SÁCH &amp; ƯU ĐÃI
          </h1>
          <p className="text-3xl font-medium text-black mb-3">
            Sản xuất phim tại Việt Nam
          </p>
          <p className="text-base text-black mb-5 leading-relaxed">
            Tổng hợp chính sách hỗ trợ tài chính, ưu đãi địa phương và<br />
            cơ chế hoàn tiền dành cho đoàn phim trong nước và quốc tế.
          </p>
        </div>
        {/* Back button */}
        <Link
          to="/tai-chinh"
          className="absolute top-5 left-5 flex items-center gap-2 text-black text-base hover:text-[#fb7104] transition-colors"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
            <path d={svgPaths.p23964f00} fill="currentColor" />
          </svg>
          <span>Quay lại</span>
        </Link>
      </section>

      {/* ── SEARCH PANEL ── */}
      <section className="bg-[#f0ede8] py-8">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-2xl font-medium text-black mb-6">
            Tìm chính sách ưu đãi đầu tư phim tại các tỉnh/thành
          </h2>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="grid grid-cols-[1fr_auto_1fr] gap-6">
              {/* Left: Province selector */}
              <div>
                <p className="text-lg font-semibold text-black mb-3">Chọn tỉnh/thành</p>
                <ProvinceSelect value={province} onChange={setProvince} />
                {/* Search button */}
                <button
                  type="button"
                  onClick={handleSearch}
                  className="mt-4 w-full h-[52px] bg-[#ffac59] hover:bg-[#fb7104] transition-colors text-white text-lg font-semibold rounded-xl shadow flex items-center justify-center gap-3 cursor-pointer"
                >
                  Tìm chính sách
                  <svg className="w-2 h-3" fill="none" viewBox="0 0 7.83523 12.583">
                    <path d={svgPaths.p1d8e2a00} fill="white" />
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div className="self-stretch w-px bg-black/20 mx-2" />

              {/* Right: Support types */}
              <div>
                <p className="text-lg font-semibold text-black mb-3">Loại hỗ trợ</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                  {SUPPORT_TYPES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleSupport(s)}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <FileIcon />
                      <span className={`text-base text-left transition-colors ${supports.has(s) ? "text-[#fb7104] font-medium" : "text-black group-hover:text-[#fb7104]"}`}>
                        {s}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVINCE OVERVIEW (shows after search) ── */}
      {searched && (
        <>
          {/* Province info card with tabs */}
          <section className="bg-[#f0ede8] pb-6">
            <div className="max-w-[1440px] mx-auto px-8">
              <div className="bg-white rounded-xl shadow overflow-hidden">
                {/* Province title */}
                <div className="px-6 pt-5 pb-0">
                  <h2 className="text-4xl font-bold text-black">{province}</h2>
                </div>
                <Divider />

                {/* Tabs */}
                <div className="flex border-b border-black/10">
                  {TAB_LABELS.map(({ key, label }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      className={`px-6 py-4 text-xl font-semibold cursor-pointer transition-colors border-b-2 -mb-px
                        ${activeTab === key
                          ? "text-[#fb7104] border-[#fb7104]"
                          : "text-black border-transparent hover:text-[#fb7104]"
                        }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="px-6 py-5 min-h-[180px]">
                  {activeTab === "tongQuan" && (
                    <ul className="space-y-3">
                      {data.policies.tongQuan.map((item: string) => (
                        <li key={item} className="flex items-center gap-2 text-black text-base">
                          <span className="w-2 h-2 rounded-full bg-black shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {activeTab === "uuDai" && (
                    <ul className="space-y-3">
                      {data.policies.uuDai.map((item: string) => (
                        <li key={item} className="flex items-center gap-2 text-[#fb7104] text-base">
                          <span className="w-2 h-2 rounded-full bg-[#fb7104] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {activeTab === "coQuan" && (
                    <ul className="space-y-3">
                      {data.policies.coQuan.map((item: string) => (
                        <li key={item} className="flex items-center gap-2 text-black text-base">
                          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 25">
                            <path d={svgPaths.p9066b00} fill="#414853" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ── KẾT QUẢ TRA CỨU ── */}
          <section className="bg-[#f0ede8] pb-6">
            <div className="max-w-[1440px] mx-auto px-8">
              <h2 className="text-2xl font-medium text-black mb-4">
                Kết quả tra cứu chính sách đầu tư phim tại {province}
              </h2>

              <div className="bg-white rounded-xl shadow overflow-hidden">
                {/* Header */}
                <div className="px-6 pt-5 pb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-black">{province.toUpperCase()}</span>
                    <span className="text-xl text-black/70">- {data.category}</span>
                  </div>
                </div>
                <Divider />

                <div className="grid grid-cols-2">
                  {/* Left: Status */}
                  <div className="px-6 py-5 border-r border-black/10">
                    <p className="text-lg font-semibold text-black mb-4">Tình trạng</p>
                    <div className="space-y-3 mb-6">
                      {data.tinh_trang.map((item: any, i: number) => (
                        <StatusRow key={i} ok={item.ok} label={item.label} />
                      ))}
                    </div>
                    <Divider />
                    <div className="mt-5 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-base font-semibold text-black mb-1">Mục ưu đãi cao nhất</p>
                        <p className="text-base text-black/70">{data.maxUuDai}</p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-black mb-1">Thời gian xử lý</p>
                        <p className="text-base text-black/70">{data.thoiGian}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Score gauge */}
                  <div className="px-6 py-5">
                    <p className="text-lg font-semibold text-black mb-3">Chỉ số hỗ trợ tài chính so với vùng miền</p>

                    {/* Gauge + score */}
                    <div className="flex items-end gap-6 mb-4">
                      <GaugeChart score={data.score} />
                      <div className="pb-2">
                        <span className="text-5xl font-bold text-[#ba252e]">{data.score}&nbsp;</span>
                        <span className="text-3xl font-medium text-black">/ 10</span>
                      </div>
                    </div>

                    {/* Score rows */}
                    <div className="space-y-0 border-t border-black/10">
                      {data.chiSo.map((row: any, i: number) => (
                        <div key={i} className={`flex items-center gap-3 py-3 ${i !== 0 ? "border-t border-black/10" : ""}`}>
                          <FileIcon />
                          <span className="flex-1 text-base text-black">{row.label}</span>
                          <span className="text-base font-semibold text-black">{row.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-black/10">
                      <span className="text-base text-black">So với trung bình {data.region}: </span>
                      <span className="text-base text-[#15b700] font-semibold">{data.regionAvgDiff}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── DETAIL + COMPARISON ── */}
          <section className="bg-[#f0ede8] pb-10">
            <div className="max-w-[1440px] mx-auto px-8">
              <div className="grid grid-cols-[1fr_auto] gap-6">
                {/* Chi tiết chính sách */}
                <div className="bg-white rounded-xl shadow overflow-hidden">
                  <div className="px-6 pt-5">
                    <h3 className="text-xl font-semibold text-black">Chi tiết chính sách hỗ trợ tại {province}</h3>
                  </div>
                  <Divider />

                  {/* Điều kiện */}
                  <div className="px-6 py-5">
                    <p className="text-lg font-semibold text-black mb-3">Điều kiện áp dụng</p>
                    <ul className="space-y-2">
                      {data.dieuKien.map((d: string) => (
                        <li key={d} className="flex gap-2 text-base text-black">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Divider />

                  {/* Sở Văn hóa */}
                  <div className="px-6 py-5">
                    <p className="text-xl font-semibold text-black mb-3">{data.soVanHoa}</p>
                    <p className="text-base text-black mb-1">{data.diaChi}</p>
                    <p className="text-base text-black">{data.email}</p>
                  </div>
                  <Divider />

                  {/* Buttons */}
                  <div className="px-6 py-5 flex gap-4">
                    <button className="flex-1 h-[52px] bg-gradient-to-b from-[#ff8423] to-[#e46400] border border-[#fb7104] text-white text-base font-semibold rounded-xl shadow cursor-pointer hover:opacity-90 transition-opacity">
                      Tải văn bản chính sách
                    </button>
                    <button className="flex items-center justify-center gap-2 px-6 h-[52px] bg-[#eaeaea] hover:bg-[#949494] transition-colors text-black text-base font-semibold rounded-xl shadow cursor-pointer">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 25">
                        <path d={svgPaths.p9066b00} fill="#414853" />
                      </svg>
                      Liên hệ hỗ trợ
                    </button>
                  </div>
                </div>

                {/* So sánh nhanh */}
                <div className="bg-white rounded-xl shadow overflow-hidden w-[400px] shrink-0">
                  <div className="px-6 pt-5">
                    <h3 className="text-xl font-semibold text-black">So sánh nhanh với tỉnh tương tự</h3>
                  </div>
                  <Divider />

                  <div className="px-6 py-5">
                    {/* Comparison table */}
                    <div className="border border-black rounded-lg overflow-hidden shadow">
                      {/* Header row */}
                      <div className="grid grid-cols-[1fr_1fr] divide-x divide-black bg-gray-50">
                        <div className="px-4 py-3 text-center text-base font-semibold text-black">{data.soSanh[0]}</div>
                        <div className="px-4 py-3 text-center text-base font-semibold text-black">{data.soSanh[1]}</div>
                      </div>
                      {/* Data rows */}
                      {[0, 1].map((rowIdx) => (
                        <div key={rowIdx} className="grid grid-cols-[1fr_1fr] divide-x divide-black border-t border-black">
                          {[0, 1].map((colIdx) => {
                            const ok = rowIdx === 0 ? colIdx === 0 : colIdx === 1;
                            return (
                              <div key={colIdx} className="px-4 py-3 flex items-center gap-2">
                                {ok ? (
                                  <svg className="w-[15px] h-[13px] shrink-0" fill="none" viewBox="0 0 17.5673 12.777">
                                    <path d={svgPaths.p3914d800} fill="#15B700" />
                                  </svg>
                                ) : (
                                  <svg className="w-[13px] h-[13px] shrink-0" fill="none" viewBox="0 0 15.0145 15.0124">
                                    <path d={svgPaths.p1d996880} fill="#DD0000" />
                                  </svg>
                                )}
                                <span className="text-sm text-black/60">...</span>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-black/10">
                      <span className="text-base text-black">So với trung bình {data.region}: </span>
                      <span className="text-base text-[#15b700] font-semibold">{data.regionAvgDiff}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}
