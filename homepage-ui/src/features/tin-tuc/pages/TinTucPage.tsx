"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { imgBgLandscape, imgFooterLogo } from "@/assets";
import svgPaths from "@/imports/svg-3nhau68ioe";
import svgFilter from "@/imports/svg-sn77ftf7a8";
const imgNewsMain = "/assets/mainpic.jpeg";
// ─── Types ────────────────────────────────────────────────────────────────────
type Region = "Tất cả tỉnh thành" | "Miền Bắc" | "Miền Trung" | "Miền Nam";

const REGION_OPTIONS: { label: Region; icon: React.ReactNode }[] = [
  {
    label: "Tất cả tỉnh thành",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20 20">
        <path d={svgFilter.p2712ce80} fill="#414853" />
      </svg>
    ),
  },
  {
    label: "Miền Bắc",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20.0265 20.2254">
        <path d={svgFilter.pfa58900} fill="#414853" />
      </svg>
    ),
  },
  {
    label: "Miền Trung",
    icon: (
      <svg className="w-[18px] h-5 shrink-0" fill="none" viewBox="0 0 18.0001 20">
        <path d={svgFilter.pd0eb040} fill="#414853" />
      </svg>
    ),
  },
  {
    label: "Miền Nam",
    icon: (
      <svg className="w-3.5 h-5 shrink-0" fill="none" viewBox="0 0 14 20.004">
        <path d={svgFilter.pf8b1bc0} fill="#414853" />
      </svg>
    ),
  },
];

// ─── Region Dropdown ──────────────────────────────────────────────────────────
function RegionDropdown({ value, onChange }: { value: Region; onChange: (v: Region) => void }) {
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
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full h-[49px] bg-white rounded-lg flex items-center px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-colors border border-gray-100"
      >
        {/* Always show filter icon in trigger */}
        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20 20">
          <path d={svgFilter.p2712ce80} fill="#414853" />
        </svg>
        <span className="flex-1 text-left text-black text-base">{value}</span>
        {/* Chevron */}
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
          {REGION_OPTIONS.map((opt, idx) => {
            const isActive = value === opt.label;
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => { onChange(opt.label); setOpen(false); }}
                className={`w-full h-[49px] flex items-center gap-3 px-4 cursor-pointer transition-colors
                  ${idx !== 0 ? "border-t border-gray-100" : ""}
                  ${isActive
                    ? "bg-[rgba(251,113,4,0.1)] text-[#fb7104]"
                    : "text-black hover:bg-[rgba(251,113,4,0.06)] hover:text-[#fb7104]"
                  }`}
              >
                <span className={`flex items-center justify-center w-5 shrink-0 transition-colors ${isActive ? "[&_path]:fill-[#fb7104]" : ""}`}>
                  {opt.icon}
                </span>
                <span className="text-base">{opt.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ rating = 1 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-5 h-5" fill="none" viewBox="0 0 20.0272 19.1241">
          <path d={svgPaths.p2eb79180} fill={s <= rating ? "#FFE100" : "#414853"} />
        </svg>
      ))}
    </div>
  );
}

// ─── Calendar Icon ────────────────────────────────────────────────────────────
function CalendarIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p9007700} fill="#414853" />
    </svg>
  );
}

// ─── Checkmark Icon ───────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg className="w-5 h-4 shrink-0" fill="none" viewBox="0 0 22.2519 16.1842">
      <path d={svgPaths.p2e084400} fill="#414853" />
    </svg>
  );
}

// ─── News Card (center column — image + title + desc + stars) ─────────────────
interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  rating?: number;
  image?: string;
}
function NewsCard({ title, date, description, rating = 1, image }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
      {/* Title + Date */}
      <div className="px-4 pt-4 pb-2">
        <p className="text-black text-xl mb-1 leading-snug">{title}</p>
        <div className="flex items-center gap-2">
          <CalendarIcon />
          <span className="text-black/60 text-base">{date}</span>
        </div>
      </div>
      {/* Image */}
      <div className="relative w-full" style={{ paddingBottom: "56%" }}>
        <img
          src={image || imgNewsMain}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 border border-[#c6c6c6] rounded" />
      </div>
      {/* Description + Stars */}
      <div className="px-4 py-3">
        <p className="text-black text-base leading-snug mb-3 line-clamp-2">{description}</p>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}

// ─── Featured Article (left column big card) ──────────────────────────────────
function FeaturedCard() {
  return (
    <div className="bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
      {/* Article 1: top featured */}
      <div className="px-4 pt-4 pb-3">
        {/* Badge */}
        <span className="inline-block bg-[#fb7104] text-white text-sm px-3 py-0.5 rounded-2xl mb-2">
          Thủ tục / cấp phép
        </span>
        <p className="text-black text-xl font-medium leading-snug mb-2">
          Hướng dẫn thủ tục xin giấy phép, quay phim tại các địa điểm công cộng
        </p>
        <div className="flex items-center gap-2 mb-3">
          <CalendarIcon />
          <span className="text-black/60 text-base">18/04/2024</span>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full" style={{ paddingBottom: "50%" }}>
        <img src={imgNewsMain} alt="news" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 border-t border-b border-[#c6c6c6]" />
      </div>

      {/* Article 2 bottom */}
      <div className="px-4 pt-3 pb-4">
        <p className="text-black text-xl font-medium leading-snug mb-2">
          Bảng giá dịch vụ thuê phim trường &amp; studio tại Hà Nội 2024
        </p>
        <div className="flex items-center gap-2">
          <CalendarIcon />
          <span className="text-black/60 text-base">15/04/2024</span>
        </div>
      </div>
    </div>
  );
}

// ─── Small Article Row (left column) ─────────────────────────────────────────
function SmallArticleCard({ title, date, image }: { title: string; date: string; image?: string }) {
  return (
    <div className="bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
      {/* Top: title + date */}
      <div className="px-4 pt-3 pb-2">
        <p className="text-black text-xl font-medium leading-snug mb-2">{title}</p>
        <div className="flex items-center gap-2">
          <CalendarIcon />
          <span className="text-black/60 text-base">{date}</span>
        </div>
      </div>
      {/* Image */}
      <div className="relative w-full" style={{ paddingBottom: "52%" }}>
        <img
          src={image || imgNewsMain}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 border border-[#c6c6c6]" />
      </div>
      {/* Bottom description */}
      <div className="px-4 py-3">
        <p className="text-black text-base leading-snug line-clamp-2">
          Trang thông tin cập nhật hoạt động và thông tin đến khách hàng
        </p>
      </div>
    </div>
  );
}

// ─── Sidebar Item ─────────────────────────────────────────────────────────────
function SidebarItem({ title, date }: { title: string; date: string }) {
  return (
    <div className="flex items-start gap-2 py-2 cursor-pointer hover:text-[#fb7104] transition-colors group">
      <span className="mt-1 shrink-0 group-hover:[&_path]:fill-[#fb7104] transition-colors">
        <CheckIcon />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-black text-base leading-snug group-hover:text-[#fb7104] transition-colors line-clamp-2">
          {title}
        </p>
      </div>
      <span className="text-black/50 text-sm whitespace-nowrap shrink-0 mt-0.5">{date}</span>
    </div>
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

        {/* Social icons */}
        <div className="flex items-center gap-5 mt-8">
          {/* Facebook */}
          <button className="w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-5 h-9" fill="none" viewBox="0 0 22.0787 42.5001">
              <path d={svgPaths.pa65b6f0} fill="#414853" />
            </svg>
          </button>
          {/* Email */}
          <button className="w-12 h-12 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-11 h-9" fill="none" viewBox="0 0 54.1667 43.3333">
              <path d={svgPaths.p3cd0ea00} fill="#414853" />
            </svg>
          </button>
          {/* Instagram */}
          <button className="w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-9 h-9" fill="none" viewBox="0 0 42.5 42.5">
              <path d={svgPaths.pd07dcf0} fill="#414853" />
            </svg>
          </button>
          {/* YouTube */}
          <button className="w-12 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-11 h-8" fill="none" viewBox="0 0 49.5198 34.7663">
              <path d={svgPaths.p160b0100} fill="#414853" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const CENTER_CARDS = [
  {
    id: 1,
    title: "Liên hoan phim Quốc tế Hà Nội (HANIFF) trở lại vào tháng 11",
    date: "16/04/2024",
    description: "Trang thông tin cập nhật hoạt động và thông tin đến khách hàng",
    rating: 1,
  },
  {
    id: 2,
    title: "Liên hoan phim Quốc tế Hà Nội (HANIFF) trở lại vào tháng 11",
    date: "16/04/2024",
    description: "Trang thông tin cập nhật hoạt động và thông tin đến khách hàng",
    rating: 1,
  },
  {
    id: 3,
    title: "Liên hoan phim Quốc tế Hà Nội (HANIFF) trở lại vào tháng 11",
    date: "16/04/2024",
    description: "Trang thông tin cập nhật hoạt động và thông tin đến khách hàng",
    rating: 1,
  },
];

const SIDEBAR_ITEMS = [
  { id: 1, title: "Hướng dẫn kế hoạch các trận tranh cổ", date: "16/04/2024" },
  { id: 2, title: "Triển lãm kinh nghiệm trường quay", date: "16/04/2024" },
  { id: 3, title: "Đạo diện phim nổi bật tháng 4", date: "16/04/2024" },
  { id: 4, title: "Hướng dẫn kế hoạch các trận tranh cổ", date: "16/04/2024" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TinTuc() {
  const [region, setRegion] = useState<Region>("Tất cả tỉnh thành");
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={imgBgLandscape} alt="" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-[rgba(246,243,238,0.55)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 max-w-[1440px] mx-auto w-full px-8 py-6">

          {/* ── Page title ── */}
          <h1 className="text-center text-5xl font-bold text-[#fb7104] mb-6 tracking-widest uppercase">
            TIN TỨC NGÀNH PHIM
          </h1>

          {/* ── Filter bar ── */}
          <div className="flex items-center gap-3 mb-5">
            <RegionDropdown value={region} onChange={setRegion} />
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

          {/* ── Main content card ── */}
          <div className="bg-white/95 rounded-lg p-6">

            {/* ── 3-column grid ── */}
            <div className="flex gap-6">

              {/* ─── LEFT COLUMN ─── */}
              <div className="w-[30%] shrink-0 flex flex-col gap-5">
                {/* Section header */}
                <h2 className="text-[#fb7104] text-2xl font-semibold">Tin mới nhất</h2>

                {/* Featured big card */}
                <FeaturedCard />

                {/* Small article cards */}
                <SmallArticleCard
                  title={`Phim trường lớn nhất Sài Gòn "Openned Studio" sẽ vào hoạt động`}
                  date="07/04/2024"
                />
                <SmallArticleCard
                  title="Quảng Ninh Xin phép quay phát Hà Nội"
                  date="16/04/2024"
                />
              </div>

              {/* ─── VERTICAL SEPARATOR ─── */}
              <div className="w-px bg-[#e0e0e0] self-stretch mx-1 shrink-0" />

              {/* ─── CENTER COLUMN ─── */}
              <div className="flex-1 flex flex-col gap-5">
                {CENTER_CARDS.map((card) => (
                  <NewsCard
                    key={card.id}
                    title={card.title}
                    date={card.date}
                    description={card.description}
                    rating={card.rating}
                  />
                ))}
              </div>

              {/* ─── VERTICAL SEPARATOR ─── */}
              <div className="w-px bg-[#e0e0e0] self-stretch mx-1 shrink-0" />

              {/* ─── RIGHT SIDEBAR ─── */}
              <div className="w-[22%] shrink-0">
                {/* Sidebar header */}
                <h2 className="text-[#fb7104] text-2xl font-semibold mb-4">Tin mới nhất</h2>

                {/* Separator */}
                <div className="border-t border-[#d0d0d0] mb-3" />

                {/* Sidebar items */}
                <div className="flex flex-col divide-y divide-[#e8e8e8]">
                  {SIDEBAR_ITEMS.map((item) => (
                    <SidebarItem key={item.id} title={item.title} date={item.date} />
                  ))}
                </div>
              </div>

            </div>{/* end 3-col */}
          </div>

        </main>
      </div>
    </div>
  );
}
