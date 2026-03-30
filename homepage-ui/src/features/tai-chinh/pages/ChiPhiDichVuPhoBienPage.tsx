"use client";

import Link from "next/link";
import { imgFooterLogo } from "@/assets";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import svgPaths from "@/imports/svg-x9r640id0u";
const imgHeroBg = "/assets/hand-icon.png";
const imgRectangle336 = "/assets/hand-icon.png";
const imgRectangle337 = "/assets/hand-icon.png";
const imgRectangle338 = "/assets/hand-icon.png";
const imgRectangle339 = "/assets/hand-icon.png";
const imgRectangle340 = "/assets/hand-icon.png";
// ─── Vietnam Map (dark red for this page) ─────────────────────────────────────
function VietnamMapRed({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 428 552" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <path d={svgPaths.p1327040} fill="#9D1111" transform="translate(80, 60)" />
        <path d={svgPaths.p1645a00} fill="#9D1111" transform="translate(100, 220)" />
        <path d={svgPaths.p16927600} fill="#9D1111" transform="translate(90, 130)" />
        <path d={svgPaths.p1697f800} fill="#9D1111" transform="translate(60, 310)" />
        <path d={svgPaths.p1699e300} fill="#9D1111" transform="translate(110, 170)" />
        <path d={svgPaths.p16de4500} fill="#9D1111" transform="translate(70, 380)" />
        <path d={svgPaths.p13e77700} fill="#9D1111" transform="translate(60, 440)" />
        <path d={svgPaths.p117c4900} fill="#9D1111" transform="translate(140, 280)" />
        <path d={svgPaths.p11861300} fill="#9D1111" transform="translate(130, 320)" />
        <path d={svgPaths.p13f0e600} fill="#9D1111" transform="translate(170, 460)" />
        <path d={svgPaths.p1009d070} fill="#9D1111" transform="translate(150, 40)" />
        <path d={svgPaths.p131c7d00} fill="#9D1111" transform="translate(135, 55)" />
      </svg>
    </div>
  );
}

// ─── Price Table ──────────────────────────────────────────────────────────────
interface PriceRow {
  label: string;
  bac: string;
  trung: string;
  nam: string;
}

function PriceTable({ rows, title }: { rows: PriceRow[]; title?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {title && (
        <div className="px-5 py-3 border-b border-gray-200">
          <p className="text-base font-semibold text-black">{title}</p>
        </div>
      )}
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left px-5 py-3 text-base font-normal text-black/50 w-[40%]"></th>
            <th className="text-center px-4 py-3 text-base font-medium text-black">Bắc</th>
            <th className="text-center px-4 py-3 text-base font-medium text-black">Trung</th>
            <th className="text-center px-4 py-3 text-base font-medium text-black">Nam</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i !== 0 ? "border-t border-gray-100" : ""}>
              <td className="px-5 py-3 text-base text-black">{row.label}</td>
              <td className="px-4 py-3 text-center text-base text-black">{row.bac}</td>
              <td className="px-4 py-3 text-center text-base text-black">{row.trung}</td>
              <td className="px-4 py-3 text-center text-base text-black">{row.nam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Scene Price Table (no region columns) ────────────────────────────────────
interface SceneRow {
  label: string;
  price: string;
  days: string;
}

function ScenePriceTable({ rows }: { rows: SceneRow[] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm h-full">
      <div className="px-5 py-3 border-b border-gray-200">
        <p className="text-base font-semibold text-black">Giá bối cảnh công</p>
      </div>
      <table className="w-full">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i !== 0 ? "border-t border-gray-100" : ""}>
              <td className="px-5 py-3 text-base text-black">{row.label}</td>
              <td className="px-4 py-3 text-center text-base text-black">{row.price}</td>
              <td className="px-4 py-3 text-center text-base text-black/60">{row.days}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Location Card ────────────────────────────────────────────────────────────
function LocationCard({ img, label }: { img: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden">
        <img src={img} alt={label} className="w-full h-full object-cover" />
      </div>
      <p className="text-base text-black text-center">{label}</p>
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const equipmentRows: PriceRow[] = [
  { label: "Máy quay",           bac: "4-10 triệu", trung: "4-10 triệu", nam: "4-10 triệu" },
  { label: "Ống kính",           bac: "6-9,5 triệu", trung: "6-9,5 triệu", nam: "6-9,5 triệu" },
  { label: "Hệ thống âm thanh",  bac: "1-6 triệu", trung: "1-6 triệu", nam: "1-6 triệu" },
  { label: "Ánh sáng",           bac: "5-10 triệu", trung: "5-10 triệu", nam: "5-10 triệu" },
];

const laborRows: PriceRow[] = [
  { label: "Bối cảnh",  bac: "4-10 triệu", trung: "4-10 triệu", nam: "4-10 triệu" },
  { label: "Quay phim", bac: "6-9,5 triệu", trung: "6-9,5 triệu", nam: "6-9,5 triệu" },
  { label: "Diễn viên", bac: "1-6 triệu", trung: "1-6 triệu", nam: "1-6 triệu" },
];

const sceneRows: SceneRow[] = [
  { label: "Bãi biển",  price: "4-10 triệu", days: "4 ngày" },
  { label: "Thành phố", price: "6-9,5 triệu", days: "6 ngày" },
  { label: "Khách sạn", price: "1-6 triệu",   days: "6 ngày" },
];

const locationCards = [
  { img: "https://images.unsplash.com/photo-1769966603317-2e34fcd74f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400", label: "Vùng biển", figmaImg: imgRectangle336 },
  { img: "https://images.unsplash.com/photo-1722863101541-8f574a579a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400", label: "Thành phố", figmaImg: imgRectangle337 },
  { img: "https://images.unsplash.com/photo-1772006807170-5750a2aa3713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400", label: "Khách sạn", figmaImg: imgRectangle338 },
  { img: "https://images.unsplash.com/photo-1758003293450-b9478f02bf48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400", label: "Đồng bằng", figmaImg: imgRectangle339 },
  { img: "https://images.unsplash.com/photo-1771784970196-81ed951800dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400", label: "Vùng núi", figmaImg: imgRectangle340 },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ChiPhiDichVuPhoBien() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0ede8]">
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: 340 }}>
        <img src={imgHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />

        {/* Back button */}
        <Link href="/tai-chinh" className="absolute top-5 left-8 flex items-center gap-2 text-black text-base hover:text-[#fb7104] transition-colors z-10">
          <svg className="w-5 h-4" fill="none" viewBox="0 0 32.2544 17.3856">
            <path d={svgPaths.pe453880} stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M1.88803 9.07752H31.2544" stroke="black" strokeLinecap="round" strokeWidth="2" />
          </svg>
          <span>Quay lại trang chủ</span>
        </Link>

        {/* Content card */}
        <div className="relative z-10 max-w-[600px] bg-white/80 backdrop-blur-sm rounded-2xl p-8 m-8 mt-16">
          <h1 className="text-4xl font-semibold text-black mb-3 leading-tight">
            Chi phí dịch vụ phổ biến
          </h1>
          <p className="text-base text-black leading-relaxed mb-6">
            Tổng hợp các thông tin chi phí sản xuất phim phổ biến tại Việt Nam và so sánh với khu vực
            Đông Nam Á. Cập nhật các mức giá giúp nhà sản xuất lên kế hoạch ngân sách chính xác và hiệu quả.
          </p>
          <button className="flex items-center gap-2 bg-[#ffac59] hover:bg-[#fb7104] transition-colors text-white text-base font-semibold px-6 py-2.5 rounded-xl shadow cursor-pointer">
            So sánh chi phí của quốc gia
            <svg className="w-2.5 h-3" fill="none" viewBox="0 0 11.5259 13.2353">
              <path d={svgPaths.p25438e60} stroke="white" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── CHI PHÍ DỊCH VỤ PHỔ BIẾN ── */}
      <section className="py-10">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-medium text-black">Chi phí dịch vụ phổ biến</h2>
            {/* decorative squiggle */}
            <svg className="w-8 h-4 shrink-0" fill="none" viewBox="0 0 32.2544 17.3856">
              <path d={svgPaths.pe453880} stroke="#fb7104" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M1.88803 9.07752H31.2544" stroke="#fb7104" strokeLinecap="round" strokeWidth="2.5" />
            </svg>
          </div>

          <div className="flex gap-8 items-start">
            <div className="flex-1">
              <PriceTable rows={equipmentRows} />
            </div>
            <div className="w-[280px] shrink-0">
              <VietnamMapRed className="h-[320px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── GIÁ NHÂN CÔNG TRUNG BÌNH ── */}
      <section className="py-6">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-medium text-black">Giá nhân công trung bình</h2>
            <svg className="w-8 h-4 shrink-0" fill="none" viewBox="0 0 32.2544 17.3856">
              <path d={svgPaths.pe453880} stroke="#fb7104" strokeLinecap="round" strokeWidth="2.5" />
              <path d="M1.88803 9.07752H31.2544" stroke="#fb7104" strokeLinecap="round" strokeWidth="2.5" />
            </svg>
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-6">
            <PriceTable rows={laborRows} />
            <div className="w-[340px] shrink-0">
              <ScenePriceTable rows={sceneRows} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SO SÁNH VIỆT NAM VÀ ĐÔNG NAM Á ── */}
      <section className="py-6 pb-12">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-medium text-black mb-2">So sánh chi phí Việt Nam và Đông Nam Á</h2>
          <p className="text-base text-black/70 mb-6">Giá chi phí quay ở địa phương trong ngày</p>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="grid grid-cols-5 gap-4 mb-6">
              {locationCards.map((card) => (
                <LocationCard key={card.label} img={card.figmaImg} label={card.label} />
              ))}
            </div>

            <button className="flex items-center gap-2 bg-[#ffac59] hover:bg-[#fb7104] transition-colors text-white text-base font-semibold px-6 py-2.5 rounded-xl shadow cursor-pointer">
              Tìm hiểu chi tiết về chi phí bối cảnh
              <svg className="w-2.5 h-3" fill="none" viewBox="0 0 11.5259 13.2353">
                <path d={svgPaths.p25438e60} stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
