'use client';

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import svgPaths from '@/assets/import/svg-0oavri3lkq';
import starPaths from '@/assets/import/svg-a1gxlu5vx';
import mainPicImage from "@/public/assets/mainpic.jpeg";
import globalIcon from "@/public/assets/global-icon.svg";
import handPointerIcon from "@/public/assets/hand-icon.png";

const LeafletMapModal = dynamic(
  () => import('./LeafletMapModal').then((mod) => mod.LeafletMapModal),
  { ssr: false }
);

// ─── Province map: id → Vietnamese name ───────────────────────────────────────
const PROVINCE_NAMES: Record<string, string> = {
  QuangNinh: "Quảng Ninh",
  LamDong: "Lâm Đồng",
  NgheAn: "Nghệ An",
  KhanhHoa: "Khánh Hòa",
  DienBien: "Điện Biên",
  AnGiang: "An Giang",
  BacNinh: "Bắc Ninh",
  LangSon: "Lạng Sơn",
  ThanhHoa: "Thanh Hóa",
  QuangTri: "Quảng Trị",
  Hue: "Thừa Thiên Huế",
  DongThap: "Đồng Tháp",
  TayNinh: "Tây Ninh",
  DakLak: "Đắk Lắk",
  VinhLong: "Vĩnh Long",
  CanTho: "Cần Thơ",
  SonLa: "Sơn La",
  LaoCai: "Lào Cai",
  NinhBinh: "Ninh Bình",
  LaiChau: "Lai Châu",
  ThaiNguyen: "Thái Nguyên",
  TuyenQuang: "Tuyên Quang",
  TPHCM: "TP. Hồ Chí Minh",
  QuangNgai: "Quảng Ngãi",
  GiaLai: "Gia Lai",
  CaMau: "Cà Mau",
  HaiPhong: "Hải Phòng",
  HungYen: "Hưng Yên",
  DongNai: "Đồng Nai",
  DaNanh: "Đà Nẵng",
  PhuTho: "Phú Thọ",
  HaTinh: "Hà Tĩnh",
  CaoBang: "Cao Bằng",
  HaNoi: "Hà Nội",
};

// ─── Province PAI ranks (mock data) ──────────────────────────────────────────
const PROVINCE_PAI: Record<string, { rank: number; score: number }> = {
  HaNoi: { rank: 1, score: 98 },
  TPHCM: { rank: 2, score: 97 },
  DaNanh: { rank: 3, score: 95 },
  HaiPhong: { rank: 4, score: 93 },
  CanTho: { rank: 5, score: 91 },
  QuangNinh: { rank: 6, score: 90 },
  LamDong: { rank: 7, score: 88 },
  KhanhHoa: { rank: 8, score: 87 },
  LaoCai: { rank: 9, score: 85 },
  NgheAn: { rank: 10, score: 83 },
  ThanhHoa: { rank: 11, score: 82 },
  DakLak: { rank: 12, score: 80 },
  GiaLai: { rank: 13, score: 79 },
  Hue: { rank: 14, score: 77 },
  NinhBinh: { rank: 15, score: 76 },
  DongNai: { rank: 16, score: 75 },
  BacNinh: { rank: 17, score: 74 },
  QuangNam: { rank: 18, score: 73 },
  QuangNgai: { rank: 19, score: 71 },
  HaTinh: { rank: 20, score: 70 },
  QuangTri: { rank: 21, score: 68 },
  TayNinh: { rank: 22, score: 67 },
  DongThap: { rank: 23, score: 65 },
  AnGiang: { rank: 24, score: 64 },
  VinhLong: { rank: 25, score: 62 },
  CaMau: { rank: 26, score: 61 },
  SonLa: { rank: 27, score: 59 },
  LaiChau: { rank: 28, score: 58 },
  DienBien: { rank: 29, score: 56 },
  LangSon: { rank: 30, score: 55 },
  CaoBang: { rank: 31, score: 53 },
  TuyenQuang: { rank: 32, score: 52 },
  ThaiNguyen: { rank: 33, score: 50 },
  PhuTho: { rank: 34, score: 49 },
  HungYen: { rank: 35, score: 47 },
};

// ─── Province Info Card (PAI Panel) ──────────────────────────────────────────
function ProvinceInfoCard({ provinceName, provinceId }: { provinceName: string; provinceId: string }) {
  const pai = PROVINCE_PAI[provinceId] ?? { rank: 34, score: 50 };

  return (
    <div
      className="relative shadow-2xl animate-fade-in"
      style={{ width: 268, height: 240 }}
    >
      {/* Red header */}
      <div className="absolute top-0 left-0 right-0 h-[56px] bg-[#a71a1a] rounded-tl-[16px] rounded-tr-[16px] shadow flex items-center justify-center px-3">
        <span
          className="text-[#ffe8d2] font-extrabold text-center leading-tight"
          style={{ fontSize: provinceName.length > 18 ? 16 : 20 }}
        >
          {provinceName}
        </span>
      </div>

      {/* White body */}
      <div className="absolute left-0 right-0 bg-white rounded-bl-[16px] rounded-br-[16px] shadow overflow-hidden" style={{ top: 56, height: 184 }}>
        {/* Top N – right side */}
        <div className="absolute text-right" style={{ top: 52, right: 16 }}>
          <span className="text-[#1272a3] font-bold" style={{ fontSize: 18 }}>Top </span>
          <span className="text-[#1272a3] font-bold" style={{ fontSize: 28 }}>{pai.rank}</span>
        </div>

        {/* Khám phá thêm button */}
        <div
          className="absolute bg-[#a71a1a] rounded-[100px] flex items-center justify-center cursor-pointer hover:bg-[#c41f1f] transition-colors"
          style={{ bottom: 12, left: 14, right: 16, height: 36 }}
        >
          <span className="text-white font-semibold" style={{ fontSize: 17 }}>Khám phá thêm</span>
        </div>
      </div>

      {/* Star overlay – centered on the card */}
      <div className="absolute pointer-events-none" style={{ top: 72, left: 78, width: 112, height: 106 }}>
        {/* Decorative dashed grid */}
        <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114.685 109.211">
          <path d={starPaths.p3b1d980} stroke="#E4AB24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p82b4d80} stroke="#E4AB24" strokeDasharray="5.39 5.39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p3a593de0} stroke="#E4AB24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d="M75.9536 42.0503H109.631" stroke="#E4AB24" strokeDasharray="5.39 5.39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.pcd34f00} stroke="#E4AB24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p872a980} stroke="#E4AB24" strokeDasharray="5.39 5.39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p36d58700} stroke="#E4AB24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p3e7afc00} stroke="#E4AB24" strokeDasharray="5.39 5.39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p1ae63540} stroke="#E4AB24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p20b8f5a0} stroke="#E4AB24" strokeDasharray="5.39 5.39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p33401380} stroke="#E4AB24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.pa5e2a00} stroke="#E4AB24" strokeDasharray="5.39 5.39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p9e98680} stroke="#E4AB24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p3102d300} stroke="#E4AB24" strokeDasharray="5.39 5.39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.pdf82600} stroke="#E4AB24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p32c3c400} stroke="#E4AB24" strokeDasharray="5.39 5.39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p2e86cb00} stroke="#E4AB24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d="M6.82659 42.0503H40.5036" stroke="#E4AB24" strokeDasharray="5.39 5.39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p5864e00} stroke="#E4AB24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
          <path d={starPaths.p667e800} stroke="#E4AB24" strokeDasharray="5.39 5.39" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8346" />
        </svg>
        {/* Filled yellow star */}
        <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.851 106.373">
          <path d={starPaths.p38e3a480} fill="#E4AB24" />
        </svg>
      </div>
    </div>
  );
}

// ─── Shared Digit Box for clock ───────────────────────────────────────────────
const DigitBox = ({ digit }: { digit: string }) => (
  <div className="bg-[#96131c] h-[76px] w-[46px] rounded-[8px] flex items-center justify-center shrink-0">
    <span className="font-['Anton'] text-[64px] text-white leading-none select-none">
      {digit}
    </span>
  </div>
);

// ─── Vietnam Map with hover interaction ──────────────────────────────────────
interface MapInteractiveProps {
  onProvinceClick: (name: string) => void;
  onProvinceHover?: (id: string | null, name: string | null) => void;
}

function VietnamMap({ onProvinceClick, onProvinceHover }: MapInteractiveProps) {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute h-[568.966px] left-[98.66px] top-0 w-[440.984px]" suppressHydrationWarning />;
  }

  const handleMouseEnter = (id: string, e: React.MouseEvent) => {
    const name = PROVINCE_NAMES[id];
    if (!name) return;
    const rect = mapRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip({ name, x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
    setHovered(id);
    onProvinceHover?.(id, name);
  };

  const handleMouseMove = (id: string, e: React.MouseEvent) => {
    if (hovered !== id) return;
    const rect = mapRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip({ name: PROVINCE_NAMES[id] ?? id, x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseLeave = () => {
    setHovered(null);
    setTooltip(null);
    onProvinceHover?.(null, null);
  };

  const provinceProps = (id: string) => ({
    "data-name": id,
    onMouseEnter: (e: React.MouseEvent) => handleMouseEnter(id, e),
    onMouseMove: (e: React.MouseEvent) => handleMouseMove(id, e),
    onMouseLeave: handleMouseLeave,
    onClick: () => {
      const name = PROVINCE_NAMES[id];
      if (name) onProvinceClick(name);
    },
    className: `absolute cursor-pointer transition-opacity ${PROVINCE_NAMES[id] ? "hover:opacity-75" : ""}`,
    style: { "--fill-0": hovered === id ? "#d04040" : "#BA252E" } as React.CSSProperties,
  });

  const vectorDiv = (inset: string) => ({
    className: "absolute",
  });

  return (
    <div ref={mapRef} className="absolute h-[568.966px] left-[98.66px] top-0 w-[440.984px]">
      {/* Tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none absolute z-50 bg-[#1a1a1a]/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap -translate-x-1/2 -translate-y-full"
          style={{ left: tooltip.x, top: tooltip.y - 8 }}
        >
          {tooltip.name}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#1a1a1a]/90" />
        </div>
      )}

      {/* ── Named provinces ── */}
      <div {...provinceProps("QuangNinh")} style={{ ...provinceProps("QuangNinh").style, inset: "11.31% 53.42% 82.18% 35.12%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.5656 37.0569">
          <path d={svgPaths.p36f2ef00} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("LamDong")} style={{ ...provinceProps("LamDong").style, inset: "71.37% 45.59% 15.98% 40.33%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0769 71.9449">
          <path d={svgPaths.p29448440} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("NgheAn")} style={{ ...provinceProps("NgheAn").style, inset: "22.21% 71.11% 68.48% 13.49%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.9061 53.0149">
          <path d={svgPaths.p1ce6b780} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("KhanhHoa")} style={{ ...provinceProps("KhanhHoa").style, inset: "68.82% 40.66% 20.96% 52.42%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5149 58.1088">
          <path d={svgPaths.p1ccfac00} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("DienBien")} style={{ ...provinceProps("DienBien").style, inset: "5.46% 88.99% 83.41% 0" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.5499 63.341">
          <path d={svgPaths.p22b15680} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("AnGiang")} style={{ ...provinceProps("AnGiang").style, inset: "81.2% 73.48% 8.34% 17.24%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.929 59.4836">
          <path d={svgPaths.p280cc00} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("BacNinh")} style={{ ...provinceProps("BacNinh").style, inset: "12.05% 61.24% 84.05% 30.22%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.6729 22.1726">
          <path d={svgPaths.p198ffa00} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("LangSon")} style={{ ...provinceProps("LangSon").style, inset: "6.49% 58.7% 86.54% 31.56%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.9406 39.6998">
          <path d={svgPaths.p17023c00} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("ThanhHoa")} style={{ ...provinceProps("ThanhHoa").style, inset: "18.35% 69.17% 72.96% 17.56%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.5284 49.4476">
          <path d={svgPaths.p5c93500} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("QuangTri")} style={{ ...provinceProps("QuangTri").style, inset: "35.08% 57.92% 53.77% 27.38%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.8508 63.4297">
          <path d={svgPaths.p1bcead00} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("Hue")} style={{ ...provinceProps("Hue").style, inset: "43.77% 52.76% 51.83% 39.4%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.5478 25.0795">
          <path d={svgPaths.p240fbb00} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("DongThap")} style={{ ...provinceProps("DongThap").style, inset: "81.19% 62.75% 13.1% 24.16%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.7281 32.4727">
          <path d={svgPaths.p37cee4c0} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("TayNinh")} style={{ ...provinceProps("TayNinh").style, inset: "75.6% 63.38% 14.98% 26.7%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.7728 53.6175">
          <path d={svgPaths.p3c4e6080} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("DakLak")} style={{ ...provinceProps("DakLak").style, inset: "63.31% 40.98% 26.28% 42.7%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.972 59.2729">
          <path d={svgPaths.pce9c000} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("VinhLong")} style={{ ...provinceProps("VinhLong").style, inset: "85.8% 62.87% 9.03% 28.13%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.7128 29.4466">
          <path d={svgPaths.p28870ea0} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("CanTho")} style={{ ...provinceProps("CanTho").style, inset: "85.87% 67.88% 7.09% 24.22%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.8528 40.0466">
          <path d={svgPaths.p6c0d600} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("TPHCM")} style={{ ...provinceProps("TPHCM").style, inset: "78.06% 56.28% 14.4% 33.22%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.3134 42.9259">
          <path d={svgPaths.p2e09d5f0} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("QuangNgai")} style={{ ...provinceProps("QuangNgai").style, inset: "51.85% 44.37% 38.35% 41.2%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.6008 55.7557">
          <path d={svgPaths.p22aca080} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("GiaLai")} style={{ ...provinceProps("GiaLai").style, inset: "57.1% 42.42% 32.01% 42.25%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.6039 62.011">
          <path d={svgPaths.p29b1d680} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("CaMau")} style={{ ...provinceProps("CaMau").style, inset: "90.44% 70.92% 2.82% 19.58%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.9158 38.3873">
          <path d={svgPaths.p10319000} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("HaiPhong")} style={{ ...provinceProps("HaiPhong").style, inset: "14.48% 63% 81.62% 31.84%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7538 22.1618">
          <path d={svgPaths.p28953180} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("HungYen")} style={{ ...provinceProps("HungYen").style, inset: "15.91% 64.16% 79.58% 29.93%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0855 25.6639">
          <path d={svgPaths.p38de180} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("DongNai")} style={{ ...provinceProps("DongNai").style, inset: "72.56% 56.18% 15.78% 33.76%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.3375 66.3453">
          <path d={svgPaths.p3d238e80} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("DaNanh")} style={{ ...provinceProps("DaNanh").style, inset: "46.71% 47.05% 45.01% 39.67%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.5808 47.1176">
          <path d={svgPaths.p21657900} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("PhuTho")} style={{ ...provinceProps("PhuTho").style, inset: "11.31% 70.95% 79.84% 21.31%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.1412 50.3445">
          <path d={svgPaths.p26372b80} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("HaTinh")} style={{ ...provinceProps("HaTinh").style, inset: "31.22% 66.03% 64.09% 23.11%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9133 26.6321">
          <path d={svgPaths.p126d4280} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("CaoBang")} style={{ ...provinceProps("CaoBang").style, inset: "2.14% 63.17% 93.24% 25.3%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.8288 26.3117">
          <path d={svgPaths.p1da451f0} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("HaNoi")} style={{ ...provinceProps("HaNoi").style, inset: "13.57% 69.24% 81.71% 25.24%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3722 26.8266">
          <path d={svgPaths.p8377f00} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("SonLa")} style={{ ...provinceProps("SonLa").style, inset: "9.06% 76.94% 81.46% 8.24%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.341 53.9641">
          <path d={svgPaths.p2b52fc80} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("LaoCai")} style={{ ...provinceProps("LaoCai").style, inset: "3.51% 76.66% 86.45% 11.13%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.8184 57.1461">
          <path d={svgPaths.p2ef2ef00} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("NinhBinh")} style={{ ...provinceProps("NinhBinh").style, inset: "17.96% 64.7% 77.29% 26.94%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.8801 26.9852">
          <path d={svgPaths.p104cb180} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("LaiChau")} style={{ ...provinceProps("LaiChau").style, inset: "3.74% 85.59% 89.05% 1.62%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.3805 41.0412">
          <path d={svgPaths.p38626080} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("ThaiNguyen")} style={{ ...provinceProps("ThaiNguyen").style, inset: "4.98% 67.4% 86.54% 26.64%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.3021 48.2589">
          <path d={svgPaths.p19fea300} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>
      <div {...provinceProps("TuyenQuang")} style={{ ...provinceProps("TuyenQuang").style, inset: "0 72.45% 87.57% 18.01%" }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.0506 70.7353">
          <path d={svgPaths.p36095280} fill="var(--fill-0, #BA252E)" />
        </svg>
      </div>

      {/* ── Unnamed vectors (no hover) ── */}
      {[
        { inset: "90.09% 26.46% 8.97% 72.45%",  vb: "0 0 4.79417 5.34911",  p: svgPaths.p18896230 },
        { inset: "44.77% 21.65% 54.52% 76.98%",  vb: "0 0 6.05958 4.00592",  p: svgPaths.p1a4dcb00 },
        { inset: "84.29% 84.46% 11.99% 12.94%",  vb: "0 0 11.4775 21.145",   p: svgPaths.p3fc27180 },
        { inset: "15.11% 54.45% 84.18% 44.99%",  vb: "0 0 2.48892 4.07467",  p: svgPaths.p1e0cfd00 },
        { inset: "39.67% 13.12% 59.55% 86.08%",  vb: "0 0 3.52644 4.45384",  p: svgPaths.p16d00480 },
        { inset: "99.35% 27.08% 0 72.27%",        vb: "0 0 2.84262 3.68037",  p: svgPaths.p1b994b00 },
        { inset: "15.47% 56.4% 83.84% 42.87%",   vb: "0 0 3.24192 3.89112",  p: svgPaths.p37f54fc0 },
        { inset: "16.28% 58.88% 83.01% 40.04%",  vb: "0 0 4.72827 4.0196",   p: svgPaths.p28f3da00 },
        { inset: "45.98% 22.65% 53.31% 75.93%",  vb: "0 0 6.23712 4.0549",   p: svgPaths.p2d96d840 },
        { inset: "46.29% 21.11% 53.07% 77.92%",  vb: "0 0 4.24142 3.65771",  p: svgPaths.p3dbca600 },
        { inset: "90.44% 28.25% 8.7% 70.5%",     vb: "0 0 5.50807 4.88091",  p: svgPaths.p3b100380 },
        { inset: "92.68% 15.68% 6.23% 82.98%",   vb: "0 0 5.91068 6.18532",  p: svgPaths.p298a0780 },
        { inset: "16.31% 57.11% 83.21% 42.33%",  vb: "0 0 2.46345 2.69465",  p: svgPaths.p3df21780 },
        { inset: "14.44% 56.14% 84.58% 42.6%",   vb: "0 0 5.54374 5.54945",  p: svgPaths.p1afb0470 },
        { inset: "17.19% 58.11% 82.32% 40.99%",  vb: "0 0 3.95006 2.81675",  p: svgPaths.p3f9a5240 },
        { inset: "15.41% 55.08% 84.02% 44.47%",  vb: "0 0 1.96227 3.23723",  p: svgPaths.p2f5e6120 },
        { inset: "15.75% 57.31% 83.97% 42.26%",  vb: "0 0 1.87789 1.60023",  p: svgPaths.p13292700 },
        { inset: "15.04% 56.13% 84.66% 43.46%",  vb: "0 0 1.79965 1.71383",  p: svgPaths.p38e3f740 },
        { inset: "15.91% 57.31% 83.84% 42.63%",  vb: "0 0 2.48892 4.07467",  p: svgPaths.p1e0cfd00 },
        { inset: "94.32% 4.44% 4.88% 94.56%",    vb: "0 0 4.42117 4.56679",  p: svgPaths.p1322b600 },
        { inset: "81.55% 1.61% 17.54% 96.34%",   vb: "0 0 9.05555 5.21989",  p: svgPaths.pe3d8500 },
        { inset: "89.97% 31.28% 8.95% 68%",      vb: "0 0 3.18316 6.10121",  p: svgPaths.p1c136700 },
        { inset: "89.01% 10.78% 9.73% 87.41%",   vb: "0 0 7.99953 7.19254",  p: svgPaths.p29d72200 },
        { inset: "95.91% 2.83% 3.33% 96.16%",    vb: "0 0 4.44603 4.32023",  p: svgPaths.p16c27c80 },
        { inset: "95.79% 63.89% 3.49% 35.2%",    vb: "0 0 3.99801 4.07881",  p: svgPaths.p199e9a00 },
        { inset: "97.14% 27.45% 2.07% 71.41%",   vb: "0 0 5.0368 4.50574",   p: svgPaths.p23419140 },
        { inset: "96.42% 25.91% 3.02% 73.52%",   vb: "0 0 2.51663 3.18872",  p: svgPaths.p17ae0b00 },
        { inset: "99.42% 28.24% 0.22% 70.85%",   vb: "0 0 4.00473 2.08566",  p: svgPaths.pf1e7300 },
        { inset: "80.25% 0 18.84% 97.95%",        vb: "0 0 9.05335 5.22058",  p: svgPaths.p2a02c9c0 },
        { inset: "44.04% 22.63% 55.34% 76.55%",  vb: "0 0 3.62476 3.50291",  p: svgPaths.p85e3cf0 },
        { inset: "47.91% 10.79% 51.14% 87.78%",  vb: "0 0 6.28096 5.40274",  p: svgPaths.p17879e80 },
        { inset: "63.78% 42.51% 36.18% 57.43%",  vb: "0 0 0.262681 0.26265", p: svgPaths.p3a9bbb00 },
        { inset: "42.78% 29.22% 56.23% 69.33%",  vb: "0 0 6.36524 5.64689",  p: svgPaths.pf460f00 },
        { inset: "89.44% 1.68% 9.63% 96.43%",    vb: "0 0 8.34682 5.31213",  p: svgPaths.p3fac900 },
        { inset: "48.23% 12.21% 50.89% 86.93%",  vb: "0 0 3.83104 5.03137",  p: svgPaths.p3ed54700 },
        { inset: "49.73% 25.21% 49.56% 73.44%",  vb: "0 0 5.97767 4.02753",  p: svgPaths.pc048000 },
        { inset: "40.7% 13.72% 58.53% 84.75%",   vb: "0 0 6.73168 4.36253",  p: svgPaths.p3e19b180 },
        { inset: "89.99% 5.88% 8.69% 92.77%",    vb: "0 0 5.95385 7.47629",  p: svgPaths.pe4c9f00 },
        { inset: "90.04% 3.22% 9.19% 95.89%",    vb: "0 0 3.90547 4.37324",  p: svgPaths.p24dc1900 },
        { inset: "39.55% 14.16% 59.75% 84.84%",  vb: "0 0 4.39344 3.97502",  p: svgPaths.p33b43900 },
        { inset: "89.5% 13.36% 9.69% 85.46%",    vb: "0 0 5.21384 4.58356",  p: svgPaths.p2460cf00 },
        { inset: "88.18% 9.01% 10.43% 89.3%",    vb: "0 0 7.47356 7.92767",  p: svgPaths.p33507d80 },
        { inset: "93% 19.77% 6.29% 78.69%",      vb: "0 0 6.78859 4.06339",  p: svgPaths.padc66f0 },
        { inset: "41.01% 58.25% 58.79% 41.39%",  vb: "0 0 1.57413 1.1083",   p: svgPaths.pa64e080,  fr: "evenodd" },
        { inset: "52.26% 43.46% 47.53% 56.27%",  vb: "0 0 1.18695 1.20286",  p: svgPaths.p1f454c00, fr: "evenodd" },
        { inset: "51.55% 44.56% 48.19% 55.27%",  vb: "0 0 0.734821 1.47323", p: svgPaths.p288ba7c0, fr: "evenodd" },
        { inset: "97.59% 79.07% 2.08% 20.55%",   vb: "0 0 1.6414 1.86648",   p: svgPaths.p2d179300, fr: "evenodd" },
      ].map((v, i) => (
        <div key={i} className="absolute" style={{ inset: v.inset }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={v.vb}>
            <path
              d={v.p}
              fill="#BA252E"
              {...(v.fr ? { fillRule: v.fr as "evenodd", clipRule: v.fr as "evenodd" } : {})}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

// ─── Main MapSection Component ────────────────────────────────────────────────
export const MapSection: React.FC = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [initialProvince, setInitialProvince] = useState<string | null>(null);
  // Default to Hà Nội (rank 1); updates on hover, resets on mouse-leave
  const [hoveredProvinceId, setHoveredProvinceId] = useState<string>("HaNoi");
  const [hoveredProvinceName, setHoveredProvinceName] = useState<string>("Hà Nội");

  const handleProvinceClick = (provinceName: string) => {
    setInitialProvince(provinceName);
    setIsMapOpen(true);
  };

  const handleOpenMap = () => {
    setInitialProvince(null);
    setIsMapOpen(true);
  };

  const handleProvinceHover = (id: string | null, name: string | null) => {
    if (id === null || name === null) {
      setHoveredProvinceId("HaNoi");
      setHoveredProvinceName("Hà Nội");
    } else {
      setHoveredProvinceId(id);
      setHoveredProvinceName(name);
    }
  };

  return (
    <>
      <LeafletMapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        initialProvince={initialProvince}
      />

      <section className="relative w-full h-[733px] overflow-hidden">
        {/* Background */}
        <div className="absolute h-[733px] left-0 top-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt="Vịnh Hạ Long"
              className="absolute h-[128.82%] left-0 max-w-none top-[-19.3%] w-full object-cover"
              src={mainPicImage.src}
            />
          </div>
          <div className="absolute flex h-[732px] items-center justify-center left-[104px] top-px w-[1440px]">
            <div className="flex-none rotate-90">
              <div
                className="h-[1440px] w-[732px]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(115,115,115,0) 0%,rgba(174,174,174,.58) 20.673%,rgba(235,225,224,.7) 37.019%,rgba(242,234,231,.7) 43.269%,rgba(200,200,200,.714) 71.154%,rgba(123,123,123,.082) 97.109%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative h-full max-w-[1440px] mx-auto flex items-start justify-between pl-16 pr-80 py-20">

          {/* Left Column */}
          <div className="flex flex-col gap-8 w-[453px] items-start justify-center h-full">
            {/* PAI Title */}
            <div className="text-white">
              <p className="font-black leading-none text-[52px] md:text-[64px] tracking-tight uppercase">PRODUCTION</p>
              <p className="font-black leading-tight text-[28px] uppercase">ATTRACTION INDEX  (PAI)</p>
              <p className="font-normal leading-relaxed text-[14px] mt-4 max-w-[380px] text-white/90">
                Chỉ số thu hút đoàn làm phim là hệ thống chỉ số đánh giá mức độ
                hấp dẫn của các địa phương tại Việt Nam đối với hoạt động sản
                xuất phim. PAI giúp nhà làm phim nhanh chóng so sánh và lựa
                chọn địa điểm phù hợp – hướng tới việc tối ưu hóa quyết định
                sản xuất và thúc đẩy ngành công nghiệp điện ảnh phát triển.
              </p>
            </div>

            {/* PAI Province Card - default Hà Nội, updates on map hover */}
            <ProvinceInfoCard
              provinceName={hoveredProvinceName}
              provinceId={hoveredProvinceId}
            />
          </div>

          {/* Right Column — Map */}
          <div className="h-[568.966px] relative shrink-0 w-[539.656px]">
            {/* Interactive Vietnam map */}
            <VietnamMap onProvinceClick={handleProvinceClick} onProvinceHover={handleProvinceHover} />

            {/* Pulse + "Nhấn để xem thêm" */}
            {/* isolate → tạo stacking context riêng để nhốt animated spans */}
            <div className="absolute isolate" style={{ inset: "63.27% 11.49% 23.2% 70.91%" }}>
              {/* Pulse rings — z-index: auto (thấp nhất trong Frame4) */}
              <div className="absolute" style={{ inset: "-41.58% 37.89% 68.81% 3.16%" }}>
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Outer ping ring */}
                  <span
                    className="absolute rounded-full bg-[#FF8F8F]/70 animate-ping"
                    style={{ width: "100%", height: "100%", animationDuration: "1.6s" }}
                  />
                  {/* Inner ping ring — delayed */}
                  <span
                    className="absolute rounded-full bg-[#FF8F8F]/70 animate-ping"
                    style={{ width: "78%", height: "78%", animationDuration: "1.6s", animationDelay: "0.5s" }}
                  />
                  {/* Static core circles */}
                  <div className="relative rounded-full bg-[#FD7676] flex items-center justify-center"
                    style={{ width: "60%", height: "60%" }}>
                    <div className="rounded-full bg-[#FF6969]" style={{ width: "74%", height: "74%" }} />
                  </div>
                </div>
              </div>

              {/* Hand icon — z-10 đảm bảo luôn trên pulse trong stacking context của Frame4 */}
              <button
                onClick={handleOpenMap}
                className="absolute cursor-pointer hover:scale-110 transition-transform z-10"
                style={{ left: 18, top: -5, width: 35, height: 35 }}
              >
                <img alt="Hand icon" className="absolute inset-0 object-cover size-full" src={handPointerIcon.src} />
              </button>
              {/* Label — "di chuột để xem thêm" */}
              <div
                className="absolute z-10"
                style={{ left: 3, top: 38 }}
              >
                <p className="font-bold italic text-[#ba252e] text-[16px] leading-[18px] w-[95px]">
                  di chuột để xem thêm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
