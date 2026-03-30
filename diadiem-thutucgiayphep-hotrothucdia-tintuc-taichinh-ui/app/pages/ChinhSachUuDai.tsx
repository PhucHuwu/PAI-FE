import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { imgFooterLogo } from "../../assets";
import svgPaths from "../../imports/svg-rksprpkot8";
import imgRectangle347 from "figma:asset/0e1c6dac8c375a6b75e376649502afd56ac44a3c.png";
import imgRectangle300 from "figma:asset/81e0f6ffd67bab0e5c87dad316bffc8ae429735c.png";

// ─── Types ────────────────────────────────────────────────────────────────────
type Region = "Tất cả vùng" | "Miền Bắc" | "Miền Trung" | "Miền Nam";
const REGIONS: Region[] = ["Tất cả vùng", "Miền Bắc", "Miền Trung", "Miền Nam"];

// ─── Vietnam Map (extracted from Figma Layer component) ───────────────────────
function VietnamMap({ region }: { region: Region }) {
  // Color logic: highlighted provinces change based on region
  const getColor = (baseColor: string) => {
    if (region === "Tất cả vùng") return baseColor;
    if (region === "Miền Bắc") {
      // Highlight northern provinces (top ~30% of map = inset top < 30%)
      return baseColor === "#FB7104" ? "#FB7104" : baseColor === "#FFAC59" ? "#FFAC59" : "#FFD0A2";
    }
    return baseColor;
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <svg viewBox="0 0 342 441" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {/* Province paths — using Figma inset percentages converted to viewBox coords */}
          {/* Each inset: top%, right%, bottom%, left% → x = left%*342, y = top%*441, w = (1-left%-right%)*342, h = (1-top%-bottom%)*441 */}

          {/* #FB7104 highlighted provinces */}
          <g>
            <path d={svgPaths.p325cc680} fill="#FB7104" transform="translate(46.17, 97.97) scale(1)" />
            <path d={svgPaths.p2bf99200} fill="#FB7104" transform="translate(91.29, 333.39) scale(1)" />
            <path d={svgPaths.p14057580} fill="#FB7104" transform="translate(3.96, 15.47) scale(1)" />
            <path d={svgPaths.p2f3afe00} fill="#FB7104" transform="translate(92.07, 79.24) scale(1)" />
            <path d={svgPaths.p3a89800} fill="#FB7104" transform="translate(91.11, 22.01) scale(1)" />
            <path d={svgPaths.p3ecb5600} fill="#FB7104" transform="translate(61.62, 0.04) scale(1)" />
            <path d={svgPaths.p32377380} fill="#FB7104" transform="translate(113.6, 344.24) scale(1)" />
            <path d={svgPaths.p37dedf00} fill="#FB7104" transform="translate(115.42, 320.0) scale(1)" />
            <path d={svgPaths.p13411000} fill="#FB7104" transform="translate(102.38, 70.2) scale(1)" />
          </g>

          {/* #FFAC59 medium provinces */}
          <g>
            <path d={svgPaths.p23539b00} fill="#FFAC59" transform="translate(103.34, 53.13) scale(1)" />
            <path d={svgPaths.p1440a500} fill="#FFAC59" transform="translate(59.96, 81.0) scale(1)" />
            <path d={svgPaths.p36fc5480} fill="#FFAC59" transform="translate(28.21, 40.0) scale(1)" />
            <path d={svgPaths.p332e0bc0} fill="#FFAC59" transform="translate(93.55, 154.79) scale(1)" />
            <path d={svgPaths.p270e1700} fill="#FFAC59" transform="translate(133.84, 192.87) scale(1)" />
            <path d={svgPaths.p5c4d880} fill="#FFAC59" transform="translate(5.57, 16.49) scale(1)" />
            <path d={svgPaths.p27a59700} fill="#FFAC59" transform="translate(108.81, 63.9) scale(1)" />
            <path d={svgPaths.p1f04c100} fill="#FFAC59" transform="translate(82.77, 378.73) scale(1)" />
          </g>

          {/* #FFD0A2 lighter provinces */}
          <g>
            <path d={svgPaths.p3f36aa80} fill="#FFD0A2" transform="translate(120.04, 49.85) scale(1)" />
            <path d={svgPaths.p22d45100} fill="#FFD0A2" transform="translate(137.93, 314.74) scale(1)" />
            <path d={svgPaths.p3eb5d1c0} fill="#FFD0A2" transform="translate(0, 24.11) scale(1)" />
            <path d={svgPaths.p2efe1d00} fill="#FFD0A2" transform="translate(58.98, 358.29) scale(1)" />
            <path d={svgPaths.pe49d500} fill="#FFD0A2" transform="translate(179.25, 303.54) scale(1)" />
            <path d={svgPaths.p2186b780} fill="#FFD0A2" transform="translate(145.49, 279.21) scale(1)" />
            <path d={svgPaths.p12522100} fill="#FFD0A2" transform="translate(96.07, 378.73) scale(1)" />
            <path d={svgPaths.p1a6cb6c0} fill="#FFD0A2" transform="translate(134.77, 228.66) scale(1)" />
            <path d={svgPaths.p2cc5f900} fill="#FFD0A2" transform="translate(144.5, 251.91) scale(1)" />
            <path d={svgPaths.p357b8a00} fill="#FFD0A2" transform="translate(66.88, 398.64) scale(1)" />
            <path d={svgPaths.p98b2800} fill="#FFD0A2" transform="translate(135.57, 206.2) scale(1)" />
            <path d={svgPaths.p21e34600} fill="#FFD0A2" transform="translate(107.84, 28.7) scale(1)" />
            <path d={svgPaths.p14fca600} fill="#FFD0A2" transform="translate(82.76, 357.8) scale(1)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// ─── Region Tab Bar ───────────────────────────────────────────────────────────
function TabBar({ value, onChange }: { value: Region; onChange: (r: Region) => void }) {
  return (
    <div className="flex gap-2">
      {REGIONS.map((r) => (
        <button
          key={r}
          type="button"
          onClick={() => onChange(r)}
          className={`px-4 py-1.5 rounded-full text-base transition-colors border cursor-pointer
            ${value === r
              ? "bg-white text-black border-gray-300 shadow-sm font-medium"
              : "bg-transparent text-black/70 border-transparent hover:bg-white/50"
            }`}
        >
          {r}
        </button>
      ))}
    </div>
  );
}

// ─── Checkbox Check Row ───────────────────────────────────────────────────────
function CheckRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      {/* Green checkbox */}
      <div className="w-5 h-5 bg-[#4CAF50] rounded-sm flex items-center justify-center shrink-0">
        <svg className="w-3 h-2.5" fill="none" viewBox="0 0 12 9">
          <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-black text-base">{label}</span>
    </div>
  );
}

// ─── Stat Row ─────────────────────────────────────────────────────────────────
function StatRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-black/70 text-base">{label}</span>
      <span className={`text-base ${highlight ? "font-semibold text-black" : "text-black"}`}>{value}</span>
    </div>
  );
}

// ─── Map Legend ───────────────────────────────────────────────────────────────
function MapLegend() {
  const items = [
    { label: "70-100", color: "#FB7104" },
    { label: "40-70",  color: "#FFAC59" },
    { label: "20-40",  color: "#FFD0A2" },
    { label: "0-20",   color: "#FFF0E0" },
  ];
  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <div className="w-8 h-4 rounded-sm shrink-0" style={{ backgroundColor: item.color }} />
          <span className="text-black text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Province Quadrant Card ───────────────────────────────────────────────────
interface QuadCardProps {
  title: string;
  provinces: string[];
  bg: string;
  textColor?: string;
}
function QuadCard({ title, provinces, bg, textColor = "text-black" }: QuadCardProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <div className="px-4 py-2" style={{ backgroundColor: bg }}>
        <p className={`text-base font-semibold ${textColor}`}>{title}</p>
      </div>
      <div className="bg-white px-4 py-3">
        <ul className="list-disc pl-5 space-y-1">
          {provinces.map((p) => (
            <li key={p} className="text-black text-base">{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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
              Được bảo trợ bởi Học viện Công nghệ Bưu chính<br />
              Viễn thông và Hiệp hội Xúc tiến Điện ảnh Việt Nam
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

// ─── Province data ────────────────────────────────────────────────────────────
const PROVINCE_DATA: Record<Region, {
  donGianCao: string[];
  phucTapCao: string[];
  donGianThap: string[];
  phucTapThap: string[];
  stats: { label: string; value: string; highlight?: boolean }[];
}> = {
  "Tất cả vùng": {
    donGianCao:  ["Quảng Ninh", "Quảng Nam", "Đà Nẵng"],
    phucTapCao:  ["Hà Nội", "Hải Phòng"],
    donGianThap: ["Bình Định", "Khánh Hòa"],
    phucTapThap: ["Lâm Đồng", "Tp. Hồ Chí Minh", "Bắc Giang"],
    stats: [
      { label: "Mức hỗ trợ tối đa:", value: "30% ngân sách", highlight: true },
      { label: "3-10 tỉ", value: "và 25-150% hỗ trợ" },
      { label: "Mức hoàn tiền:", value: "20% chi tiêu nội địa" },
      { label: "Thời gian xử lý hồ sơ:", value: "10-25 ngày" },
    ],
  },
  "Miền Bắc": {
    donGianCao:  ["Quảng Ninh", "Hải Dương", "Ninh Bình"],
    phucTapCao:  ["Hà Nội", "Hải Phòng"],
    donGianThap: ["Bắc Giang", "Thái Nguyên"],
    phucTapThap: ["Hà Nam", "Nam Định"],
    stats: [
      { label: "Mức hỗ trợ tối đa:", value: "35% ngân sách", highlight: true },
      { label: "5-15 tỉ", value: "và 30-150% hỗ trợ" },
      { label: "Mức hoàn tiền:", value: "25% chi tiêu nội địa" },
      { label: "Thời gian xử lý hồ sơ:", value: "10-20 ngày" },
    ],
  },
  "Miền Trung": {
    donGianCao:  ["Đà Nẵng", "Quảng Nam", "Thừa Thiên Huế"],
    phucTapCao:  ["Quảng Ngãi", "Bình Định"],
    donGianThap: ["Quảng Bình", "Quảng Trị"],
    phucTapThap: ["Hà Tĩnh", "Nghệ An"],
    stats: [
      { label: "Mức hỗ trợ tối đa:", value: "25% ngân sách", highlight: true },
      { label: "2-8 tỉ", value: "và 20-120% hỗ trợ" },
      { label: "Mức hoàn tiền:", value: "15% chi tiêu nội địa" },
      { label: "Thời gian xử lý hồ sơ:", value: "12-25 ngày" },
    ],
  },
  "Miền Nam": {
    donGianCao:  ["Phú Quốc", "Bình Thuận", "Vũng Tàu"],
    phucTapCao:  ["Tp. Hồ Chí Minh", "Bình Dương"],
    donGianThap: ["Khánh Hòa", "Đắk Lắk"],
    phucTapThap: ["Lâm Đồng", "Long An"],
    stats: [
      { label: "Mức hỗ trợ tối đa:", value: "28% ngân sách", highlight: true },
      { label: "3-12 tỉ", value: "và 25-140% hỗ trợ" },
      { label: "Mức hoàn tiền:", value: "18% chi tiêu nội địa" },
      { label: "Thời gian xử lý hồ sơ:", value: "15-30 ngày" },
    ],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ChinhSachUuDai() {
  const [mapRegion, setMapRegion] = useState<Region>("Tất cả vùng");
  const [listRegion, setListRegion] = useState<Region>("Tất cả vùng");

  const listData = PROVINCE_DATA[listRegion];
  const mapData  = PROVINCE_DATA[mapRegion];

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ee]">
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 480 }}>
        <img src={imgRectangle300} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* White frosted card */}
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
          <Link
            to="/tai-chinh/tra-cuu-chinh-sach"
            className="flex items-center gap-2 bg-[#ffac59] text-white text-lg font-semibold px-6 py-2.5 rounded-xl shadow-md hover:bg-[#fb7104] transition-colors cursor-pointer"
          >
            Xem ưu đãi theo tỉnh/thành
            <svg className="w-2 h-3.5" fill="none" viewBox="0 0 6.24659 10.4858">
              <path d={svgPaths.p18906b00} fill="white" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── CÁC NHÓM CHÍNH SÁCH & ƯU ĐÃI ── */}
      <section className="bg-[#f0ede8] py-10">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-medium text-black mb-6">Các nhóm chính sách &amp; ưu đãi</h2>
          <div className="grid grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 pt-5 pb-4">
                <h3 className="text-xl font-semibold text-black mb-4">Hỗ trợ trực tiếp từ địa phương</h3>
                <ul className="space-y-2 mb-5">
                  {["Miễn/giảm phí bối cảnh", "Hỗ trợ hậu cần", "Hỗ trợ nhân lực"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-black text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-5">
                <button className="flex items-center gap-2 w-full bg-[#ffac59] text-white text-base font-semibold px-5 py-2.5 rounded-xl hover:bg-[#fb7104] transition-colors cursor-pointer justify-center">
                  Xem tổng quan hỗ trợ
                  <svg className="w-1.5 h-3" fill="none" viewBox="0 0 6.24659 10.4858">
                    <path d={svgPaths.p18906b00} fill="white" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 pt-5 pb-4">
                <h3 className="text-xl font-semibold text-black mb-4">Hỗ trợ dành cho đoàn quốc tế</h3>
                <ul className="space-y-2 mb-5">
                  {["hỗ trợ phiên dịch", "Hỗ trợ kết nối doanh nghiệp", "Chính sách ưu tiên"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-black text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-5">
                <button className="flex items-center gap-2 w-full bg-[#ffac59] text-white text-base font-semibold px-5 py-2.5 rounded-xl hover:bg-[#fb7104] transition-colors cursor-pointer justify-center">
                  Xem ưu đãi cho quốc tế
                  <svg className="w-1.5 h-3" fill="none" viewBox="0 0 6.24659 10.4858">
                    <path d={svgPaths.p18906b00} fill="white" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MỨC ĐỘ HẤP DẪN TÀI CHÍNH ── */}
      <section className="relative overflow-hidden py-10">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={imgRectangle347} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-medium text-black mb-4">Mức độ hấp dẫn tài chính theo tỉnh thành</h2>

          {/* Tabs */}
          <div className="mb-6">
            <TabBar value={mapRegion} onChange={setMapRegion} />
          </div>

          <div className="flex gap-8 items-start">
            {/* Left: checkboxes + stats */}
            <div className="flex flex-col gap-3 w-[320px] shrink-0">
              <CheckRow label="Hỗ trợ hoàn tiền mặt" />
              <CheckRow label="Hỗ trợ chi phí bối cảnh" />
              <CheckRow label="Thủ tục đơn giản" />

              <div className="mt-4 flex flex-col gap-2">
                {mapData.stats.map((s, i) => (
                  <StatRow key={i} label={s.label} value={s.value} highlight={s.highlight} />
                ))}
              </div>
            </div>

            {/* Right: map + legend */}
            <div className="flex-1 flex gap-6 items-start">
              <div className="flex-1 relative" style={{ height: 380 }}>
                <VietnamMap region={mapRegion} />
              </div>
              <div className="shrink-0 pt-4">
                <MapLegend />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DANH SÁCH TỈNH THEO NHÓM ── */}
      <section className="bg-[#f0ede8] py-10">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-medium text-black mb-4">Danh sách tỉnh theo nhóm</h2>

          {/* Tabs */}
          <div className="mb-6">
            <TabBar value={listRegion} onChange={setListRegion} />
          </div>

          {/* 2x2 grid */}
          <div className="grid grid-cols-2 gap-5">
            <QuadCard
              title="Thủ tục đơn giản - Ưu đãi cao"
              provinces={listData.donGianCao}
              bg="#F5C842"
              textColor="text-black"
            />
            <QuadCard
              title="Thủ tục phức tạp - Ưu đãi cao"
              provinces={listData.phucTapCao}
              bg="#4CAF50"
              textColor="text-white"
            />
            <QuadCard
              title="Thủ tục đơn giản - Ưu đãi thấp"
              provinces={listData.donGianThap}
              bg="#81C784"
              textColor="text-black"
            />
            <QuadCard
              title="Thủ tục phức tạp - Ưu đãi thấp"
              provinces={listData.phucTapThap}
              bg="#EF9A9A"
              textColor="text-black"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}