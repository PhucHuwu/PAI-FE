"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  imgBgLandscape,
  imgFooterLogo,
} from "@/assets";
import svgPaths from "@/imports/svg-9dgyajseqp";
import svgFilter from "@/imports/svg-r1ys8dctmr";

// ─── Figma image ──────────────────────────────────────────────────────────────
const imgEventCard = "/assets/mainpic.jpeg";
// ─── Types ───────────────────────────────────────────────────────────────────
type StatusType = "Đã diễn ra" | "Đang diễn ra" | "Sắp diễn ra";
type FilterType = "Tất cả" | StatusType;

interface Event {
  id: number;
  title: string;
  description: string;
  status: StatusType;
  image: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const EVENTS: Event[] = [
  { id: 1,  title: "Festival Hoa Đà Lạt 2024", description: "Không gian bối cảnh cổ điển theo thiên hướng Pháp lãng mạn và...", status: "Đã diễn ra",   image: imgEventCard },
  { id: 2,  title: "Festival Hoa Đà Lạt 2024", description: "Không gian bối cảnh cổ điển theo thiên hướng Pháp lãng mạn và...", status: "Đang diễn ra", image: imgEventCard },
  { id: 3,  title: "Festival Hoa Đà Lạt 2024", description: "Không gian bối cảnh cổ điển theo thiên hướng Pháp lãng mạn và...", status: "Sắp diễn ra",  image: imgEventCard },
  { id: 4,  title: "Festival Hoa Đà Lạt 2024", description: "Không gian bối cảnh cổ điển theo thiên hướng Pháp lãng mạn và...", status: "Đã diễn ra",   image: imgEventCard },
  { id: 5,  title: "Festival Hoa Đà Lạt 2024", description: "Không gian bối cảnh cổ điển theo thiên hướng Pháp lãng mạn và...", status: "Đang diễn ra", image: imgEventCard },
  { id: 6,  title: "Festival Hoa Đà Lạt 2024", description: "Không gian bối cảnh cổ điển theo thiên hướng Pháp lãng mạn và...", status: "Sắp diễn ra",  image: imgEventCard },
  { id: 7,  title: "Festival Hoa Đà Lạt 2024", description: "Không gian bối cảnh cổ điển theo thiên hướng Pháp lãng mạn và...", status: "Đã diễn ra",   image: imgEventCard },
  { id: 8,  title: "Festival Hoa Đà Lạt 2024", description: "Không gian bối cảnh cổ điển theo thiên hướng Pháp lãng mạn và...", status: "Đang diễn ra", image: imgEventCard },
  { id: 9,  title: "Festival Hoa Đà Lạt 2024", description: "Không gian bối cảnh cổ điển theo thiên hướng Pháp lãng mạn và...", status: "Sắp diễn ra",  image: imgEventCard },
  { id: 10, title: "Lễ hội Đền Hùng 2025",     description: "Hành trình khám phá cội nguồn dân tộc Việt Nam tại Phú Thọ...",   status: "Sắp diễn ra",  image: imgEventCard },
  { id: 11, title: "Carnaval Hạ Long 2024",     description: "Lễ hội đường phố sôi động bên Vịnh Hạ Long tuyệt đẹp...",         status: "Đã diễn ra",   image: imgEventCard },
  { id: 12, title: "Hội An Lantern Festival",   description: "Đêm hội lồng đèn rực rỡ giữa phố cổ Hội An cổ kính...",           status: "Đang diễn ra", image: imgEventCard },
];

const FILTER_OPTIONS: FilterType[] = ["Tất cả", "Đã diễn ra", "Đang diễn ra", "Sắp diễn ra"];

// ─── Status badge config ──────────────────────────────────────────────────────
const STATUS_CONFIG: Record<StatusType, { bg: string; label: string }> = {
  "Đã diễn ra":   { bg: "#0770e0", label: "Đã diễn ra" },
  "Đang diễn ra": { bg: "#16a34a", label: "Đang diễn ra" },
  "Sắp diễn ra":  { bg: "#9333ea", label: "Sắp diễn ra" },
};

// ─── Filter icon components (from Figma svg-r1ys8dctmr) ──────────────────────
function IconFilterAll() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20 20">
      <path d={svgFilter.p2712ce80} fill="#414853" />
    </svg>
  );
}
function IconFilterDaDienRa() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20.0265 20.2254">
      <path d={svgFilter.pfa58900} fill="#414853" />
    </svg>
  );
}
function IconFilterDangDienRa() {
  return (
    <svg className="w-[18px] h-5 shrink-0" fill="none" viewBox="0 0 18.0001 20">
      <path d={svgFilter.pd0eb040} fill="#414853" />
    </svg>
  );
}
function IconFilterSapDienRa() {
  return (
    <svg className="w-3.5 h-5 shrink-0" fill="none" viewBox="0 0 14 20.004">
      <path d={svgFilter.pf8b1bc0} fill="#414853" />
    </svg>
  );
}

const OPTION_ICONS: Record<FilterType, React.ReactNode> = {
  "Tất cả":        <IconFilterAll />,
  "Đã diễn ra":   <IconFilterDaDienRa />,
  "Đang diễn ra": <IconFilterDangDienRa />,
  "Sắp diễn ra":  <IconFilterSapDienRa />,
};

// ─── Filter Dropdown (Figma-accurate) ────────────────────────────────────────
function FilterDropdown({ value, onChange }: { value: FilterType; onChange: (v: FilterType) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative w-[302px]">
      {/* Trigger row */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full h-[49px] bg-white rounded-lg flex items-center px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-colors border border-gray-100"
      >
        <IconFilterAll />
        <span className="flex-1 text-left text-black text-base">{value}</span>
        {/* Chevron — rotated when open (points up = chevron-up svg is "pointing up" already, rotate-180 = down) */}
        <svg
          className={`w-[11px] h-[6px] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 10.5175 6.24659"
        >
          <path d={svgFilter.p2f532800} fill="#414853" />
        </svg>
      </button>

      {/* Dropdown list */}
      {open && (
        <div className="absolute left-0 top-full z-50 w-full bg-white rounded-b-xl shadow-lg overflow-hidden border border-gray-100">
          {FILTER_OPTIONS.map((opt, idx) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full h-[49px] flex items-center gap-3 px-4 cursor-pointer transition-colors
                ${idx !== 0 ? "border-t border-gray-100" : ""}
                ${value === opt
                  ? "bg-[rgba(251,113,4,0.1)] text-[#fb7104]"
                  : "text-black hover:bg-[rgba(251,113,4,0.06)] hover:text-[#fb7104]"
                }`}
            >
              <span className={`flex items-center justify-center w-5 shrink-0 ${value === opt ? "[&_path]:fill-[#fb7104]" : ""}`}>
                {OPTION_ICONS[opt]}
              </span>
              <span className="text-base">{opt}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Event Card ───────────────────────────────────────────────────────────────
function EventCard({ event }: { event: Event }) {
  const badge = STATUS_CONFIG[event.status];
  return (
    <Link
      href={`/tin-tuc/su-kien/${event.id}`}
      className="bg-white rounded-lg overflow-hidden border border-[#c6c6c6] cursor-pointer hover:shadow-lg transition-shadow block"
    >
      {/* Image */}
      <div className="relative" style={{ paddingBottom: "60%" }}>
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
        />
        {/* Status badge */}
        <div
          className="absolute top-[3.5%] right-[3.8%] px-3 py-1 rounded-2xl"
          style={{ backgroundColor: badge.bg }}
        >
          <span className="text-white text-[13px] font-semibold whitespace-nowrap">{badge.label}</span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#fffaf5]/80 border-t border-[#c6c6c6] px-4 py-3">
        <p className="text-black text-xl font-medium leading-snug mb-1">{event.title}</p>
        <p className="text-black text-base leading-snug line-clamp-2 opacity-80">{event.description}</p>
      </div>
    </Link>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-white/80 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 py-10">
        <div className="flex gap-12 items-start">
          <div className="w-[320px] shrink-0">
            <div className="h-[90px] w-[280px] relative mb-3">
              <img
                src={imgFooterLogo}
                alt="Việt Nam PAI"
                className="absolute inset-0 w-full h-full object-contain object-left"
              />
            </div>
            <p className="text-[#414853] text-sm leading-relaxed">
              Được bảo trợ bởi Học viện Công nghệ Bưu chính<br />
              Viễn thông và Hiệp hội Xúc tiến Điện ảnh Việt Nam
            </p>
          </div>
          <div className="flex flex-1 gap-20 pt-4">
            {["Khám phá", "Sản xuất", "Khám phá", "Liên hệ"].map((item, i) => (
              <span key={i} className="font-bold text-[#414853] text-xl cursor-pointer hover:text-[#fb7104] transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5 mt-8">
          <button className="w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-5 h-9" fill="none" viewBox="0 0 22.0787 42.5001"><path d={svgPaths.pa65b6f0} fill="#414853" /></svg>
          </button>
          <button className="w-12 h-12 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-11 h-9" fill="none" viewBox="0 0 54.1667 43.3333"><path d={svgPaths.p3cd0ea00} fill="#414853" /></svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-9 h-9" fill="none" viewBox="0 0 42.5 42.5"><path d={svgPaths.pd07dcf0} fill="#414853" /></svg>
          </button>
          <button className="w-12 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-11 h-8" fill="none" viewBox="0 0 49.5198 34.7663"><path d={svgPaths.p160b0100} fill="#414853" /></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SuKien() {
  const [filter, setFilter] = useState<FilterType>("Tất cả");
  const [search, setSearch] = useState("");

  const filtered = EVENTS.filter((e) => {
    const matchStatus = filter === "Tất cả" || e.status === filter;
    const matchSearch =
      !search ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  function handleFilter(v: FilterType) {
    setFilter(v);
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={imgBgLandscape} alt="" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-[rgba(246,243,238,0.55)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 max-w-[1440px] mx-auto w-full px-8 py-6">

          {/* ── Breadcrumb ── */}
          <div className="flex items-center gap-2 text-black text-base mb-4">
            <Link href="/" className="hover:text-[#fb7104] transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/tin-tuc" className="hover:text-[#fb7104] transition-colors">Tin tức</Link>
            <span>/</span>
            <span className="font-semibold text-[22px]">Sự kiện</span>
          </div>

          {/* ── Filter bar ── */}
          <div className="flex items-center gap-3 mb-5">
            <FilterDropdown value={filter} onChange={handleFilter} />
            {/* Search */}
            <div className="flex-1 h-[49px] bg-white rounded-lg flex items-center px-5 gap-3 border border-gray-100">
              <svg className="w-[25px] h-[25px] shrink-0" fill="none" viewBox="0 0 25.0149 24.9959">
                <path d={svgPaths.p11ad7ac0} fill="#FB7104" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm thông tin ở đây"
                className="flex-1 bg-transparent border-none outline-none text-base text-black placeholder:text-[#878787]"
              />
            </div>
          </div>

          {/* ── Main white card ── */}
          <div className="bg-white/95 rounded-lg p-6">

            {/* Section title */}
            <h2 className="text-black text-2xl font-medium mb-6 tracking-wide">
              TRẠNG THÁI SỰ KIỆN VÀ HOẠT ĐỘNG
            </h2>

            {/* 3-column grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-3 gap-5">
                {filtered.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center text-black/50 text-lg">
                Không tìm thấy sự kiện phù hợp
              </div>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}
