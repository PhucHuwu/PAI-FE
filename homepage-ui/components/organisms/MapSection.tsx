'use client';

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import svgPaths from "@/public/import/svg-0oavri3lkq";
import imgVinhHaLong from "@/public/assets/danh-lam-thang-canh-viet-nam.png";
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
}

function VietnamMap({ onProvinceClick }: MapInteractiveProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (id: string, e: React.MouseEvent) => {
    const name = PROVINCE_NAMES[id];
    if (!name) return;
    const rect = mapRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip({ name, x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
    setHovered(id);
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
  const [currentTime, setCurrentTime] = useState(new Date());
  const [useLocalTimezone, setUseLocalTimezone] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [initialProvince, setInitialProvince] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours   = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const h1 = Math.floor(hours / 10).toString();
  const h2 = (hours % 10).toString();
  const m1 = Math.floor(minutes / 10).toString();
  const m2 = (minutes % 10).toString();

  const formatDate = () => {
    const days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const d = currentTime.getDate().toString().padStart(2, "0");
    const mo = (currentTime.getMonth() + 1).toString().padStart(2, "0");
    return `${days[currentTime.getDay()]}, ${d}/${mo}/${currentTime.getFullYear()}`;
  };

  const handleProvinceClick = (provinceName: string) => {
    setInitialProvince(provinceName);
    setIsMapOpen(true);
  };

  const handleOpenMap = () => {
    setInitialProvince(null);
    setIsMapOpen(true);
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
              src={imgVinhHaLong.src}
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
          <div className="flex flex-col gap-32 w-[453px] items-end justify-center">
            {/* Section text */}
            <div className="flex flex-col gap-[19px] items-start text-white w-full">
              <p className="font-black leading-none text-[40px]">34 TỈNH THÀNH</p>
              <p className="font-medium leading-[18px] text-[16px]">
                Đến đây, ngoài việc đứng trên các đồi chè ngắm nhìn khung cảnh rộng lớn,
                xanh miết thì bạn cũng có thể mua vé đi thuyền hoặc xuồng máy
              </p>
            </div>

            {/* Clock card */}
            <div className="bg-[#f6e8e8] flex flex-col items-center gap-[14px] pt-5 pb-[11px] px-[10px] rounded-[17px] w-[267px]">
              {/* Title */}
              <p className="font-black text-[#96131c] text-[20px] leading-tight text-center w-full">
                GIỜ VIỆT NAM (GMT+7)
              </p>

              {/* Time row */}
              <div className="flex gap-[4px] items-center">
                <DigitBox digit={h1} />
                <DigitBox digit={h2} />
                {/* Colon dots */}
                <div className="h-[31px] shrink-0 w-[13px] relative">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 31">
                    <circle cx="6.5" cy="6.5"  fill="#96131C" r="6.5" />
                    <circle cx="6.5" cy="24.5" fill="#96131C" r="6.5" />
                  </svg>
                </div>
                <DigitBox digit={m1} />
                <DigitBox digit={m2} />

                {/* CH / SA label + clock icon */}
                <div className="flex flex-col items-center justify-between h-[76px] pb-1 pl-1 shrink-0">
                  <p className="font-semibold text-[#96131c] text-[20px] leading-none mt-1">
                    {hours >= 12 ? "CH" : "SA"}
                  </p>
                  <div className="relative size-[26px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                      <g clipPath="url(#clip0_clock)">
                        <path d={svgPaths.p289fe500} fill="#96131C" />
                        <path d={svgPaths.p232f95f0} fill="#96131C" />
                        <path d={svgPaths.p1545f00}  fill="#96131C" />
                      </g>
                      <defs>
                        <clipPath id="clip0_clock">
                          <rect fill="white" height="26" width="26" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Date */}
              <p className="font-normal text-[#96131c] text-[16px] leading-tight text-center w-full">
                {formatDate()}
              </p>

              {/* Timezone toggle */}
              <div className="bg-white flex items-center gap-[12px] px-[7px] py-[6px] rounded-[14px] w-[205px]">
                <button
                  onClick={() => setUseLocalTimezone(!useLocalTimezone)}
                  className="relative w-[28px] h-[15px] bg-[#d9d9d9] rounded-[7.5px] flex items-center px-[2px] cursor-pointer shrink-0 transition-colors"
                  style={{ backgroundColor: useLocalTimezone ? "#96131c" : "#d9d9d9" }}
                >
                  <div className={`w-[11px] h-[11px] bg-white rounded-full shadow transition-transform ${useLocalTimezone ? "translate-x-[13px]" : ""}`} />
                </button>
                <p className="font-normal text-[10px] text-black whitespace-nowrap">Xem theo múi giờ của bạn</p>
                <img alt="globe" className="size-[15px] object-cover shrink-0" src={globalIcon.src} />
              </div>
            </div>
          </div>

          {/* Right Column — Map */}
          <div className="h-[568.966px] relative shrink-0 w-[539.656px]">
            {/* Interactive Vietnam map */}
            <VietnamMap onProvinceClick={handleProvinceClick} />

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
              {/* Label — z-10 tương tự */}
              <button
                onClick={handleOpenMap}
                className="absolute cursor-pointer group z-10"
                style={{ left: 3, top: 38 }}
              >
                <p className="font-bold italic text-[#ba252e] text-[16px] leading-[18px] w-[95px] group-hover:text-[#9e1f27] transition-colors">
                  Nhấn để xem thêm
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};