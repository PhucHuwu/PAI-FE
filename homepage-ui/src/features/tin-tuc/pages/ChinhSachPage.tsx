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
  svgChevronDown,
  svgPageLeft,
  svgPageRight,
} from "@/assets";
import svgPaths from "@/imports/svg-3z3elz4r7x";

// ─── Types ───────────────────────────────────────────────────────────────────
type FilterCategory = "Tất cả" | "Văn bản địa phương" | "Chính sách địa phương" | "Tài liệu khác";

interface DocItem {
  id: number;
  category: FilterCategory;
  title: string;
  subtitle: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const ALL_DOCS: DocItem[] = [
  { id: 1,  category: "Văn bản địa phương",    title: "Quyết định tổ chức lễ hội",            subtitle: "Kế hoạch và quy định chi tiết lễ hội" },
  { id: 2,  category: "Văn bản địa phương",    title: "Quyết định tổ chức lễ hội",            subtitle: "Kế hoạch và quy định chi tiết lễ hội" },
  { id: 3,  category: "Văn bản địa phương",    title: "Nghị định về hoạt động văn hóa",       subtitle: "Quy định hoạt động văn hoá nghệ thuật" },
  { id: 4,  category: "Văn bản địa phương",    title: "Thông tư hướng dẫn cấp phép quay",    subtitle: "Hướng dẫn chi tiết cấp phép quay phim" },
  { id: 5,  category: "Chính sách địa phương", title: "Chính sách việc di chuyển đoàn phim", subtitle: "Quy định vùng lưu ý khi di chuyển tới các địa phương Việt Nam" },
  { id: 6,  category: "Chính sách địa phương", title: "Chính sách việc di chuyển đoàn phim", subtitle: "Quy định vùng lưu ý khi di chuyển tới các địa phương Việt Nam" },
  { id: 7,  category: "Chính sách địa phương", title: "Chính sách ưu đãi đoàn phim nước ngoài", subtitle: "Các ưu đãi thuế và phí cho đoàn phim nước ngoài" },
  { id: 8,  category: "Chính sách địa phương", title: "Chính sách bảo tồn di sản",           subtitle: "Quy định bảo vệ di sản khi quay phim" },
  { id: 9,  category: "Tài liệu khác",         title: "Tài liệu về văn hóa địa phương",     subtitle: "Lịch sử và phát triển địa phương" },
  { id: 10, category: "Tài liệu khác",         title: "Tài liệu về văn hóa địa phương",     subtitle: "Lịch sử và phát triển địa phương" },
  { id: 11, category: "Tài liệu khác",         title: "Bản đồ bối cảnh quay phim",          subtitle: "Danh sách địa điểm phù hợp quay phim" },
  { id: 12, category: "Tài liệu khác",         title: "Hướng dẫn liên hệ địa phương",       subtitle: "Danh bạ các cơ quan hỗ trợ quay phim" },
];

const ITEMS_PER_PAGE = 4; // 2 per category × 3 categories shown on page

const FILTER_OPTIONS: FilterCategory[] = [
  "Tất cả",
  "Văn bản địa phương",
  "Chính sách địa phương",
  "Tài liệu khác",
];

// ─── SVG helpers ──────────────────────────────────────────────────────────────
// Book / open-book icon — Văn bản địa phương
function IconBook() {
  return (
    <svg className="w-[50px] h-[50px]" fill="none" viewBox="0 0 49.2319 49.7207">
      <path d={svgPaths.pc2f4200} fill="#414853" />
    </svg>
  );
}

// Document icon — each item row
function IconDoc({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 39.3333 49.1667">
      <path d={svgPaths.p2544a680} fill="#414853" />
    </svg>
  );
}

// Policy / people icon — Chính sách địa phương
function IconPolicy() {
  return (
    <svg className="w-[50px] h-[50px]" fill="none" viewBox="0 0 44.2503 49.1667">
      <path d={svgPaths.pd85ac80} fill="#414853" />
    </svg>
  );
}

// Bookmark icon — Tài liệu khác
function IconBookmark() {
  return (
    <svg className="w-[40px] h-[50px]" fill="none" viewBox="0 0 34.4167 49.1764">
      <path d={svgPaths.p1704f500} fill="#414853" />
    </svg>
  );
}

// Download icon
function IconDownload() {
  return (
    <svg className="w-[23px] h-[20px]" fill="none" viewBox="0 0 23.25 20">
      <path d={svgPaths.p32ae7b80} fill="#414853" />
    </svg>
  );
}

// Filter icon
function IconFilter() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p2712ce80} fill="#414853" />
    </svg>
  );
}

// Search icon
function IconSearch() {
  return (
    <svg className="w-[25px] h-[25px]" fill="none" viewBox="0 0 25.0149 24.9959">
      <path d={svgPaths.p11ad7ac0} fill="#FB7104" />
    </svg>
  );
}

// ─── Filter Dropdown ──────────────────────────────────────────────────────────
function FilterDropdown({
  value,
  onChange,
}: {
  value: FilterCategory;
  onChange: (v: FilterCategory) => void;
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
        className="h-[49px] w-[302px] bg-white rounded-lg flex items-center px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-colors border border-gray-100"
      >
        <IconFilter />
        <span className="flex-1 text-left text-black text-base">{value}</span>
        <svg
          className={`w-[11px] h-[6px] shrink-0 transition-transform duration-200 ${open ? "" : "rotate-180"}`}
          fill="none"
          viewBox="0 0 10.5175 6.24659"
        >
          <path d={svgPaths.p2f532800} fill="#414853" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-full bg-white rounded-b-xl shadow-lg overflow-hidden border border-gray-100">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full px-4 py-3 text-left text-sm transition-colors border-b border-gray-50 last:border-0 cursor-pointer
                ${value === opt
                  ? "bg-[rgba(251,113,4,0.1)] text-[#fb7104] font-semibold"
                  : "text-black hover:bg-[rgba(251,113,4,0.06)] hover:text-[#fb7104]"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Document Row ─────────────────────────────────────────────────────────────
function DocRow({ item }: { item: DocItem }) {
  return (
    <div className="flex items-center gap-4 py-4 px-5 border-b border-[#9D1111]/20 last:border-b-0">
      {/* Doc icon */}
      <div className="shrink-0 flex items-center justify-center w-[59px]">
        <IconDoc />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-black text-2xl leading-snug truncate">{item.title}</p>
        <p className="text-black text-lg leading-snug opacity-70 truncate">{item.subtitle}</p>
      </div>

      {/* Actions */}
      <div className="shrink-0 flex flex-col items-end gap-1">
        {/* Xem chi tiết */}
        <button
          type="button"
          className="h-[43px] px-6 bg-[#fb7104] rounded-lg flex items-center gap-2 text-white text-base cursor-pointer hover:bg-[#e06500] transition-colors whitespace-nowrap"
        >
          Xem chi tiết
          <span className="text-lg">&gt;</span>
        </button>
        {/* Tải về */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
          <IconDownload />
          <span className="text-black text-base">Tải về</span>
        </div>
      </div>
    </div>
  );
}

// ─── Category Section ─────────────────────────────────────────────────────────
function CategorySection({
  icon,
  label,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  items: DocItem[];
}) {
  if (items.length === 0) return null;
  return (
    <div>
      {/* Category header */}
      <div className="flex items-center gap-4 px-5 py-4 rounded-lg bg-[rgba(251,113,4,0.1)] mb-0">
        <div className="shrink-0 flex items-center justify-center w-[59px]">{icon}</div>
        <span className="text-black text-[28px] font-medium">{label}</span>
      </div>
      {/* Items */}
      {items.map((item) => (
        <DocRow key={item.id} item={item} />
      ))}
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
export default function ChinhSach() {
  const [filter, setFilter] = useState<FilterCategory>("Tất cả");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  // Filter docs
  const filtered = ALL_DOCS.filter((doc) => {
    const matchCat = filter === "Tất cả" || doc.category === filter;
    const matchSearch =
      !searchText ||
      doc.title.toLowerCase().includes(searchText.toLowerCase()) ||
      doc.subtitle.toLowerCase().includes(searchText.toLowerCase());
    return matchCat && matchSearch;
  });

  // Group by category preserving order
  const grouped: Record<string, DocItem[]> = {};
  const catOrder: FilterCategory[] = ["Văn bản địa phương", "Chính sách địa phương", "Tài liệu khác"];
  catOrder.forEach((cat) => {
    grouped[cat] = filtered.filter((d) => d.category === cat);
  });

  // Pagination: page over the flat filtered list
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const pageFiltered = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // Re-group the paged items
  const pagedGrouped: Record<string, DocItem[]> = {};
  catOrder.forEach((cat) => {
    pagedGrouped[cat] = pageFiltered.filter((d) => d.category === cat);
  });

  const categoryMeta: { key: FilterCategory; icon: React.ReactNode }[] = [
    { key: "Văn bản địa phương",    icon: <IconBook /> },
    { key: "Chính sách địa phương", icon: <IconPolicy /> },
    { key: "Tài liệu khác",         icon: <IconBookmark /> },
  ];

  function goToPage(p: number) {
    setPage(Math.max(1, Math.min(totalPages, p)));
  }

  // Reset page when filter/search changes
  function handleFilter(v: FilterCategory) {
    setFilter(v);
    setPage(1);
  }
  function handleSearch(v: string) {
    setSearchText(v);
    setPage(1);
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
            <span className="font-semibold text-[22px]">Chính sách</span>
          </div>

          {/* ── Filter bar ── */}
          <div className="flex items-center gap-3 mb-5">
            {/* Category filter dropdown */}
            <FilterDropdown value={filter} onChange={handleFilter} />

            {/* Search input */}
            <div className="flex-1 h-[49px] bg-white rounded-lg flex items-center px-5 gap-3 border border-gray-100">
              <IconSearch />
              <input
                type="text"
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Tìm kiếm thông tin ở đây"
                className="flex-1 bg-transparent border-none outline-none text-base text-black placeholder:text-[#878787]"
              />
            </div>
          </div>

          {/* ── Main white card ── */}
          <div className="bg-white rounded-lg overflow-hidden">
            {/* Card header */}
            <div className="px-10 py-5 border-b-2 border-[#9D1111]">
              <p className="text-black text-2xl">CÁC VĂN BẢN VÀ CHÍNH SÁCH ĐỊA PHƯƠNG</p>
            </div>

            {/* Category sections */}
            <div className="divide-y-2 divide-[#9D1111]/20">
              {categoryMeta.map(({ key, icon }) => {
                const items = pagedGrouped[key];
                if (!items || items.length === 0) return null;
                return (
                  <CategorySection
                    key={key}
                    icon={icon}
                    label={key}
                    items={items}
                  />
                );
              })}

              {filtered.length === 0 && (
                <div className="px-10 py-16 text-center text-black/50 text-lg">
                  Không tìm thấy văn bản / chính sách phù hợp
                </div>
              )}
            </div>

            {/* ── Pagination ── */}
            <div className="flex items-center justify-end gap-2 px-6 py-5 border-t border-gray-100">
              {/* Prev */}
              <button
                type="button"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                className="h-[43px] w-[51px] border border-[#d5d5d5] rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg className="w-[5px] h-[8px]" fill="none" viewBox="0 0 4.68494 7.90186">
                  <path d={svgPageLeft} fill="#414853" />
                </svg>
              </button>

              {/* Current page */}
              <div className="h-[43px] min-w-[51px] bg-[#ffd0a2] border border-[#d5d5d5] rounded-lg flex items-center justify-center px-2">
                <span className="text-black text-xl font-medium">{page}</span>
              </div>

              {/* Page info */}
              <div className="h-[43px] min-w-[190px] border border-[#d5d5d5] rounded-lg flex items-center justify-center px-3">
                <span className="text-black text-base">1 of {totalPages} pages</span>
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                className="h-[43px] w-[51px] border border-[#d5d5d5] rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg className="w-[6px] h-[10px] rotate-180" fill="none" viewBox="0 0 5.775 10.05">
                  <path d={svgPaths.p1c675c00} fill="#414853" />
                </svg>
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
