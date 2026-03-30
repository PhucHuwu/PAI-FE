"use client";

import { useState } from "react";
import Link from "next/link";
import { ProvinceDropdown } from "../../components/ProvinceDropdown";
import {
  imgBgLandscape,
  imgFooterLogo,
  svgChevronDown,
  svgChevronUp,
  svgDownload,
  svgFacebook,
  svgEmail,
  svgInstagram,
  svgYouTube,
  svgPageLeft,
  svgDocument,
} from "@/assets";

// ─── SVG path for the form/document icon (from svg-244btzughu.ts) ─────────────
const svgFormIcon =
  "M14.5833 23.3333H17.5C18.2735 23.3333 19.0154 23.026 19.5624 22.4791C20.1094 21.9321 20.4167 21.1902 20.4167 20.4167C20.4167 19.6431 20.1094 18.9013 19.5624 18.3543C19.0154 17.8073 18.2735 17.5 17.5 17.5H14.5833C13.8098 17.5 13.0679 17.8073 12.5209 18.3543C11.974 18.9013 11.6667 19.6431 11.6667 20.4167C11.6667 21.1902 11.974 21.9321 12.5209 22.4791C13.0679 23.026 13.8098 23.3333 14.5833 23.3333ZM32.0833 29.1667H14.5833C13.8098 29.1667 13.0679 29.474 12.5209 30.0209C11.974 30.5679 11.6667 31.3098 11.6667 32.0833C11.6667 32.8569 11.974 33.5987 12.5209 34.1457C13.0679 34.6927 13.8098 35 14.5833 35H32.0833C32.8569 35 33.5987 34.6927 34.1457 34.1457C34.6927 33.5987 35 32.8569 35 32.0833C35 31.3098 34.6927 30.5679 34.1457 30.0209C33.5987 29.474 32.8569 29.1667 32.0833 29.1667ZM32.0833 40.8333H14.5833C13.8098 40.8333 13.0679 41.1406 12.5209 41.6876C11.974 42.2346 11.6667 42.9765 11.6667 43.75C11.6667 44.5235 11.974 45.2654 12.5209 45.8124C13.0679 46.3594 13.8098 46.6667 14.5833 46.6667H32.0833C32.8569 46.6667 33.5987 46.3594 34.1457 45.8124C34.6927 45.2654 35 44.5235 35 43.75C35 42.9765 34.6927 42.2346 34.1457 41.6876C33.5987 41.1406 32.8569 40.8333 32.0833 40.8333ZM46.6667 20.2417C46.6363 19.9737 46.5776 19.7098 46.4917 19.4542V19.1917C46.3514 18.8918 46.1644 18.6161 45.9375 18.375L28.4375 0.875C28.1964 0.64813 27.9207 0.46107 27.6208 0.320833C27.5338 0.308467 27.4454 0.308467 27.3583 0.320833C27.062 0.150912 26.7348 0.0418373 26.3958 0H8.75C6.42936 0 4.20376 0.921873 2.56282 2.56282C0.921873 4.20376 0 6.42936 0 8.75V49.5833C0 51.904 0.921873 54.1296 2.56282 55.7705C4.20376 57.4115 6.42936 58.3333 8.75 58.3333H32.0833C32.8569 58.3333 33.5987 58.026 34.1457 57.4791C34.6927 56.9321 35 56.1902 35 55.4167C35 54.6431 34.6927 53.9013 34.1457 53.3543C33.5987 52.8073 32.8569 52.5 32.0833 52.5H8.75C7.97645 52.5 7.23459 52.1927 6.68761 51.6457C6.14062 51.0988 5.83333 50.3569 5.83333 49.5833V8.75C5.83333 7.97645 6.14062 7.23459 6.68761 6.68761C7.23459 6.14062 7.97645 5.83333 8.75 5.83333H23.3333V14.5833C23.3333 16.904 24.2552 19.1296 25.8961 20.7705C27.5371 22.4115 29.7627 23.3333 32.0833 23.3333H40.8333V29.1667C40.8333 29.9402 41.1406 30.6821 41.6876 31.2291C42.2346 31.776 42.9765 32.0833 43.75 32.0833C44.5235 32.0833 45.2654 31.776 45.8124 31.2291C46.3594 30.6821 46.6667 29.9402 46.6667 29.1667V20.4167C46.6667 20.4167 46.6667 20.4167 46.6667 20.2417ZM32.0833 17.5C31.3098 17.5 30.5679 17.1927 30.0209 16.6457C29.474 16.0987 29.1667 15.3569 29.1667 14.5833V9.94583L36.7208 17.5H32.0833ZM43.75 37.9167C42.9765 37.9167 42.2346 38.224 41.6876 38.7709C41.1406 39.3179 40.8333 40.0598 40.8333 40.8333V46.6667C40.8333 47.4402 41.1406 48.1821 41.6876 48.7291C42.2346 49.276 42.9765 49.5833 43.75 49.5833C44.5235 49.5833 45.2654 49.276 45.8124 48.7291C46.3594 48.1821 46.6667 47.4402 46.6667 46.6667V40.8333C46.6667 40.0598 46.3594 39.3179 45.8124 38.7709C45.2654 38.224 44.5235 37.9167 43.75 37.9167Z";

// SVG path for checkbox square outline (p5859780)
const svgCheckSquare =
  "M15 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5V15C0 16.3261 0.526784 17.5979 1.46447 18.5355C2.40215 19.4732 3.67392 20 5 20H15C16.3261 20 17.5979 19.4732 18.5355 18.5355C19.4732 17.5979 20 16.3261 20 15V5C20 3.67392 19.4732 2.40215 18.5355 1.46447C17.5979 0.526784 16.3261 0 15 0ZM18 15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18H5C4.20435 18 3.44129 17.6839 2.87868 17.1213C2.31607 16.5587 2 15.7956 2 15V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H15C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5V15Z";

// ─── Data ─────────────────────────────────────────────────────────────────────
type FormType = "donXinCapPhep" | "donDangKy" | "donCamKet" | "donDeNghiKhac";

const formTypes: { key: FormType; label: string }[] = [
  { key: "donXinCapPhep", label: "Đơn xin cấp phép" },
  { key: "donDangKy", label: "Đơn đăng ký" },
  { key: "donCamKet", label: "Đơn cam kết" },
  { key: "donDeNghiKhac", label: "Đơn đề nghị khác" },
];

const allDocs = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  title: "Mẫu đơn đề nghị cấp phép",
  description: "Biểu mẫu đơn đề nghị cấp phép quay phim mới nhất",
}));

const PAGE_SIZE = 7;

// ─── Document Row ─────────────────────────────────────────────────────────────
function DocRow({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl border border-[#bfbfbf] flex items-center gap-4 px-4 py-5 shrink-0">
      {/* Form icon */}
      <div className="shrink-0 w-[58px] h-[58px] flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 46.6667 58.3676" fill="none">
          <path d={svgFormIcon} fill="#AD5700" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-black text-xl font-medium leading-snug">{title}</p>
        <p className="text-black text-base mt-1 leading-snug">{description}</p>
      </div>

      {/* Actions */}
      <div className="shrink-0 flex flex-col items-end gap-2 ml-2">
        <button className="flex items-center gap-1 bg-[#fb7104] hover:bg-[#e46400] text-white font-bold text-base px-6 py-3 rounded-lg cursor-pointer transition-colors whitespace-nowrap">
          Xem chi tiết &nbsp;&gt;
        </button>
        <button className="flex items-center gap-1.5 text-black/60 text-sm cursor-pointer hover:text-black transition-colors mt-1">
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 18 20">
            <path d={svgDownload} fill="currentColor" />
          </svg>
          <span>Tải về</span>
        </button>
      </div>
    </div>
  );
}

// ─── Sidebar Dropdown ─────────────────────────────────────────────────────────
function SidebarDropdown({ label }: { label: string }) {
  return (
    <div className="w-full bg-white/90 rounded-xl h-12 flex items-center px-4 cursor-pointer border border-black/10">
      <span className="flex-1 text-black/60 text-base">{label}</span>
      <svg className="w-4 h-4 shrink-0 rotate-180" fill="none" viewBox="0 0 10.5175 6.24659">
        <path d={svgChevronUp} fill="#414853" />
      </svg>
    </div>
  );
}

// ─── Checkbox item ─────────────────────────────────────────────────────────────
function CheckboxItem({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left cursor-pointer ${
        checked ? "bg-[rgba(251,113,4,0.2)]" : "hover:bg-black/5"
      }`}
    >
      {/* Checkbox */}
      <div className="shrink-0 w-5 h-5 relative">
        {checked ? (
          // Checked state: filled square with checkmark
          <div className="w-full h-full border border-black bg-[#b1b1b1] flex items-center justify-center">
            <svg className="w-3 h-3" viewBox="0 0 14 11" fill="none">
              <path
                d="M1 5L5 9L13 1"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : (
          // Unchecked: outlined square
          <svg className="w-full h-full" viewBox="0 0 20 20" fill="none">
            <path d={svgCheckSquare} fill="#414853" />
          </svg>
        )}
      </div>
      <span className="text-black text-base">{label}</span>
    </button>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar({
  checked,
  onToggle,
}: {
  checked: Record<FormType, boolean>;
  onToggle: (k: FormType) => void;
}) {
  const [viTriOpen, setViTriOpen] = useState(true);

  return (
    <aside className="w-[280px] shrink-0 flex flex-col gap-0 self-start">
      <div className="rounded-xl overflow-hidden bg-gradient-to-b from-[rgba(251,113,4,0.18)] to-white/0 border border-[rgba(251,113,4,0.15)]">
        {/* BỘ LỌC */}
        <div className="px-6 pt-5 pb-3">
          <h2 className="text-black text-2xl">BỘ LỌC</h2>
        </div>

        {/* Vị trí collapsible */}
        <button
          type="button"
          onClick={() => setViTriOpen(!viTriOpen)}
          className="w-full px-6 py-2 flex items-center justify-between cursor-pointer hover:bg-black/5 transition-colors"
        >
          <span className="text-black text-base">Vị trí</span>
          <svg
            className={`w-4 h-4 transition-transform ${viTriOpen ? "" : "rotate-180"}`}
            fill="none"
            viewBox="0 0 10.5175 6.24659"
          >
            <path d={svgChevronUp} fill="#414853" />
          </svg>
        </button>

        {/* Location dropdowns */}
        {viTriOpen && (
          <div className="px-4 pb-3 flex flex-col gap-3">
            <ProvinceDropdown />
            <SidebarDropdown label="Xã / Phường" />
          </div>
        )}

        {/* Red divider */}
        <div className="mx-4 h-px bg-[#9D1111]/30 my-1" />

        {/* Form type checkboxes */}
        <div className="px-4 pb-5 pt-2">
          {formTypes.map(({ key, label }) => (
            <CheckboxItem
              key={key}
              label={label}
              checked={checked[key]}
              onChange={() => onToggle(key)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────
function Pagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (p: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-0 mt-6">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="w-10 h-10 border border-[#d5d5d5] rounded-l-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-3 h-4" fill="none" viewBox="0 0 4.68494 7.90186">
          <path d={svgPageLeft} fill="#414853" />
        </svg>
      </button>

      <div className="h-10 min-w-[40px] border-t border-b border-[#d5d5d5] bg-[#ffd0a2] flex items-center justify-center px-3">
        <span className="font-medium text-base text-black">{current}</span>
      </div>

      <div className="h-10 border-t border-b border-[#d5d5d5] flex items-center px-4">
        <span className="text-base text-black">1 of {total} pages</span>
      </div>

      <button
        onClick={() => onChange(Math.min(total, current + 1))}
        disabled={current === total}
        className="w-10 h-10 border border-[#d5d5d5] rounded-r-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-3 h-4 rotate-180" fill="none" viewBox="0 0 4.68494 7.90186">
          <path d={svgPageLeft} fill="#414853" />
        </svg>
      </button>
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
              <img
                src={imgFooterLogo}
                alt="Việt Nam PAI"
                className="absolute inset-0 w-full h-full object-contain object-left"
              />
            </div>
            <p className="text-[#414853] text-sm leading-relaxed">
              Được bảo trợ bởi Học viện Công nghệ Bưu chính
              <br />
              Viễn thông và Hiệp hội Xúc tiến Điện ảnh Việt Nam
            </p>
          </div>

          <div className="flex flex-1 gap-20 pt-4">
            {["Khám phá", "Sản xuất", "Khám phá", "Liên hệ"].map((item, i) => (
              <span
                key={i}
                className="font-bold text-[#414853] text-xl cursor-pointer hover:text-[#fb7104] transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5 mt-8">
          <button className="w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-5 h-9" fill="none" viewBox="0 0 22.0787 42.5001">
              <path d={svgFacebook} fill="#414853" />
            </svg>
          </button>
          <button className="w-12 h-12 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-11 h-9" fill="none" viewBox="0 0 54.1667 43.3333">
              <path d={svgEmail} fill="#414853" />
            </svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-9 h-9" fill="none" viewBox="0 0 42.5 42.5">
              <path d={svgInstagram} fill="#414853" />
            </svg>
          </button>
          <button className="w-12 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-11 h-8" fill="none" viewBox="0 0 49.5312 34.8048">
              <path d={svgYouTube} fill="#414853" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HoSoGiayPhep() {
  const [checkedForms, setCheckedForms] = useState<Record<FormType, boolean>>({
    donXinCapPhep: true,
    donDangKy: false,
    donCamKet: false,
    donDeNghiKhac: false,
  });
  const [page, setPage] = useState(1);

  const toggleForm = (key: FormType) => {
    setCheckedForms((prev) => ({ ...prev, [key]: !prev[key] }));
    setPage(1);
  };

  const totalDocs = allDocs.length;
  const totalPages = Math.ceil(totalDocs / PAGE_SIZE);
  const pageDocs = allDocs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={imgBgLandscape}
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[rgba(246,243,238,0.88)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto w-full px-8 py-3">
          <nav className="flex items-center gap-2 text-base text-black/60">
            <Link href="/" className="hover:text-[#fb7104] transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link
              href="/thu-tuc-giay-phep"
              className="hover:text-[#fb7104] transition-colors"
            >
              Thủ tục &amp; Giấy phép
            </Link>
            <span>/</span>
            <span className="font-semibold text-black text-lg">
              Mẫu đơn / Biểu mẫu
            </span>
          </nav>
        </div>

        {/* Main layout */}
        <main className="flex-1 max-w-[1440px] mx-auto w-full px-8 pb-10 flex gap-8 items-start">
          {/* Sidebar */}
          <Sidebar checked={checkedForms} onToggle={toggleForm} />

          {/* Content panel */}
          <div className="flex-1 bg-white rounded-tr-xl rounded-br-xl shadow-sm min-h-[600px] flex flex-col">
            {/* Panel header */}
            <div className="px-8 pt-7 pb-4">
              <h1 className="text-black text-3xl font-medium">
                Mẫu đơn / Biểu mẫu
              </h1>
              <p className="text-black text-base mt-1 leading-snug">
                Các biểu mẫu, đơn từ cần thiết cho việc xin giấy phép
                <br />
                và sản xuất phim tại Việt Nam
              </p>
            </div>

            {/* Red separator */}
            <div className="mx-8 h-px bg-[#9D1111]/40" />

            {/* Doc count */}
            <div className="px-8 py-4 flex items-baseline gap-3">
              <span className="text-[#fb7104] text-3xl font-semibold">
                {totalDocs}
              </span>
              <span className="text-black text-base">
                Văn bản liên quan đến quy trình cấp phép
              </span>
            </div>

            {/* Document list */}
            <div className="flex-1 px-8 pb-6 flex flex-col gap-3">
              {pageDocs.map((doc) => (
                <DocRow
                  key={doc.id}
                  title={doc.title}
                  description={doc.description}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="px-8 pb-8">
              <Pagination
                current={page}
                total={totalPages}
                onChange={setPage}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
