"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  imgBgLandscape,
  imgFooterLogo,
  svgFacebook,
  svgEmail,
  svgInstagram,
  svgYouTube,
} from "@/assets";
import svgPaths from "@/imports/svg-d42iy7c4yq";

// Images from the Figma file
const imgHeroBanner = "/assets/hand-icon.png";
const imgCameraCrew = "/assets/hand-icon.png";
// ─── Types ────────────────────────────────────────────────────────────────────
interface ProvinceCard {
  id: string;
  name: string;
  supports: string[];
  contact: string;
  phone: string;
  email: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROVINCES: ProvinceCard[] = [
  {
    id: "ha-giang",
    name: "HÀ GIANG",
    supports: ["Khảo sát đồi núi", "Thuê nhà dân", "Huy động quần chúng"],
    contact: "Ông Nguyễn Văn A",
    phone: "0345 830 777",
    email: "hg@pai.com.vn",
  },
  {
    id: "lao-cai",
    name: "LÀO CAI",
    supports: ["Khảo sát đồi núi", "Thuê nhà dân", "Huy động quần chúng"],
    contact: "Ông Nguyễn Văn A",
    phone: "0345 830 777",
    email: "lc@pai.com.vn",
  },
  {
    id: "hcm",
    name: "TP HỒ CHÍ MINH",
    supports: ["Xin phép quay", "Điều phối khu dân cư", "Thuê quần chúng"],
    contact: "Ông Nguyễn Văn A",
    phone: "0345 830 777",
    email: "tphcm@pai.com.vn",
  },
  {
    id: "da-nang",
    name: "ĐÀ NẴNG",
    supports: ["Khảo sát đồi núi", "Thuê nhà dân", "Huy động quần chúng"],
    contact: "Ông Nguyễn Văn A",
    phone: "0345 830 777",
    email: "dn@pai.com.vn",
  },
];

const ALL_PROVINCE_NAMES = [
  "Tất cả tỉnh thành",
  "Hà Giang",
  "Lào Cai",
  "TP Hồ Chí Minh",
  "Đà Nẵng",
  "Hà Nội",
  "Quảng Ninh",
  "Thái Nguyên",
  "Nghệ An",
  "Huế",
];

const PROCESS_STEPS = [
  "Đoàn phim chọn tỉnh và liên hệ hotline",
  "Trao đổi nhu cầu",
  "Thống nhất chi phí & phương án",
  "Làm việc trực tiếp với địa phương",
];

// ─── Province Dropdown ────────────────────────────────────────────────────────
function ProvinceFilterDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="h-[57px] w-[288px] bg-[rgba(255,208,162,0.5)] rounded-lg flex items-center justify-between px-5 gap-3 cursor-pointer hover:bg-[rgba(255,208,162,0.7)] transition-colors"
      >
        <span className="text-black text-lg font-medium">{value}</span>
        <svg
          className={`w-[13px] h-[8px] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 12.7378 7.54796"
        >
          <path d={svgPaths.pde41180} fill="#414853" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-full bg-white rounded-b-xl shadow-lg overflow-hidden" style={{ maxHeight: 240, overflowY: "auto" }}>
          {ALL_PROVINCE_NAMES.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => { onChange(name); setOpen(false); }}
              className={`w-full px-5 py-3 text-left text-base transition-colors border-b border-gray-50 last:border-0 cursor-pointer
                ${value === name ? "bg-[rgba(251,113,4,0.12)] text-[#fb7104] font-semibold" : "text-black hover:bg-[rgba(251,113,4,0.07)] hover:text-[#fb7104]"}`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Province Card ────────────────────────────────────────────────────────────
function ProvinceCardComponent({ card }: { card: ProvinceCard }) {
  return (
    <div className="bg-white rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-7 flex flex-col gap-4">
      {/* Province name */}
      <h3 className="text-black text-[28px] font-semibold tracking-wide">{card.name}</h3>

      {/* Support list */}
      <div>
        <p className="text-black text-lg font-medium mb-2">Hỗ trợ:</p>
        <ul className="flex flex-col gap-1.5">
          {card.supports.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg className="w-[25px] h-[18px] shrink-0" fill="none" viewBox="0 0 25.1798 18.3137">
                <path d={svgPaths.p28628b00} fill="#414853" />
              </svg>
              <span className="text-black text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100" />

      {/* Contact */}
      <div className="flex flex-col gap-2">
        <p className="text-black text-lg font-medium">{card.contact}</p>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <svg className="w-[26px] h-[26px] shrink-0" fill="none" viewBox="0 0 25.7406 25.6658">
            <path d={svgPaths.p3561f8f0} fill="#FB7104" />
          </svg>
          <span className="text-[#fb7104] text-lg font-medium">{card.phone}</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <svg className="w-[26px] h-[21px] shrink-0" fill="none" viewBox="0 0 25.8333 20.6667">
            <path d={svgPaths.p2e1b5a80} fill="#FB7104" />
          </svg>
          <span className="text-[#fb7104] text-lg font-medium">{card.email}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-white/80 border-t border-gray-100 mt-auto">
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
            {["Khám phá", "Sản xuất", "Khám phá", "Liên hệ"].map((item, i) => (
              <span key={i} className="font-bold text-[#414853] text-xl cursor-pointer hover:text-[#fb7104] transition-colors">{item}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5 mt-8">
          <button className="w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-5 h-9" fill="none" viewBox="0 0 22.0787 42.5001"><path d={svgFacebook} fill="#414853" /></svg>
          </button>
          <button className="w-12 h-12 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-11 h-9" fill="none" viewBox="0 0 54.1667 43.3333"><path d={svgEmail} fill="#414853" /></svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-9 h-9" fill="none" viewBox="0 0 42.5 42.5"><path d={svgInstagram} fill="#414853" /></svg>
          </button>
          <button className="w-12 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-11 h-8" fill="none" viewBox="0 0 49.5312 34.8048"><path d={svgYouTube} fill="#414853" /></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function KetNoiCongDong() {
  const [filterProvince, setFilterProvince] = useState("Tất cả tỉnh thành");
  const [searchText, setSearchText] = useState("");

  const filtered = PROVINCES.filter((p) => {
    const matchProvince =
      filterProvince === "Tất cả tỉnh thành" ||
      p.name.toLowerCase().includes(filterProvince.toLowerCase().replace("tỉnh ", "").replace("tp ", "").replace("tp. ", ""));
    const matchSearch =
      !searchText || p.name.toLowerCase().includes(searchText.toLowerCase());
    return matchProvince && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={imgBgLandscape} alt="" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-[rgba(246,243,238,0.6)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* ── Hero banner ── */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: 220 }}>
          <img
            src={imgHeroBanner}
            alt="Kết nối cộng đồng"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.35)] via-[rgba(0,0,0,0.1)] to-transparent" />
          <div className="relative z-10 max-w-[1440px] mx-auto px-10 py-14">
            <h1 className="text-[#fb7104] text-[42px] font-extrabold leading-tight drop-shadow">
              KẾT NỐI CỘNG ĐỒNG
            </h1>
            <h2 className="text-[#fb7104] text-[38px] font-extrabold leading-tight mb-4 drop-shadow">
              LÀM PHIM TẠI ĐỊA PHƯƠNG
            </h2>
            <p className="text-white text-base max-w-[480px] leading-relaxed drop-shadow">
              PAI cung cấp đầu mối liên hệ địa phương phục vụ khảo sát bối cảnh, thuê nhà dân,
              huy động quần chúng và hỗ trợ quay phim
            </p>
          </div>
        </div>

        {/* ── Main content ── */}
        <main className="flex-1 max-w-[1440px] mx-auto w-full px-8 py-8">

          {/* Filter bar */}
          <div className="flex items-center gap-4 mb-8">
            <ProvinceFilterDropdown value={filterProvince} onChange={setFilterProvince} />
            {/* Search input */}
            <div className="h-[57px] w-[770px] bg-[rgba(255,208,162,0.5)] rounded-lg flex items-center px-5 gap-3">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Tìm tỉnh..."
                className="flex-1 bg-transparent border-none outline-none text-black text-lg placeholder:text-black/50"
              />
              <svg className="w-5 h-5 shrink-0 opacity-60" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.pcb337f0} fill="#414853" />
              </svg>
            </div>
          </div>

          {/* Province cards grid — 2 columns */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {filtered.map((card) => (
              <ProvinceCardComponent key={card.id} card={card} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-2 text-center py-16 text-black/50 text-lg">
                Không tìm thấy tỉnh / thành phố phù hợp
              </div>
            )}
          </div>

          {/* Bottom two-column section */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {/* Left — Quy trình phối hợp */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-black text-[22px] font-semibold mb-5 tracking-wide">
                QUY TRÌNH PHỐI HỢP
              </h3>
              <ol className="flex flex-col gap-4">
                {PROCESS_STEPS.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-black text-lg">
                    <span className="shrink-0 font-medium">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right — Liên hệ điều phối Trung tâm PAI */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-black text-[22px] font-semibold mb-5 tracking-wide text-center">
                LIÊN HỆ ĐIỀU PHỐI<br />TRUNG TÂM PAI
              </h3>
              <div className="flex flex-col gap-4">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 25.7406 25.6658">
                      <path d={svgPaths.p3561f8f0} fill="#FB7104" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-black text-base">Liên hệ: </span>
                    <span className="text-[#fb7104] text-lg font-semibold">0345 830 777</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <svg className="w-7 h-6" fill="none" viewBox="0 0 28.3218 22.6575">
                      <path d={svgPaths.p1e561600} fill="#FB7104" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-black text-base">Email: </span>
                    <span className="text-[#fb7104] text-lg font-semibold">support@pai.vn</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-7" fill="none" viewBox="0 0 24.0172 28.4083">
                      <path d={svgPaths.p11fc00} fill="#FB7104" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-black text-base">Số 123, Đường ABC, TP Hà Nội</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Image cards section ── */}
          <div className="mb-10">
            <h3 className="text-black text-[22px] font-semibold mb-6 tracking-wide">
              LIÊN HỆ ĐIỀU PHỐI TRUNG TÂM PAI
            </h3>
            <div className="grid grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-sm bg-white">
                  <div className="relative h-44">
                    <img
                      src={imgCameraCrew}
                      alt="Camera crew"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-black text-base mb-1">Hà Giang</p>
                    <p className="text-black/60 text-sm leading-snug">
                      Xin phép quay hoặc điều phối khu dân cư được áp dụng...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
