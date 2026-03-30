import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { ProvinceDropdown } from "../components/ProvinceDropdown";
import {
  imgBgLandscape,
  imgFooterLogo,
  svgDocument,
  svgDownload,
  svgStar,
  svgFacebook,
  svgEmail,
  svgInstagram,
  svgYouTube,
  svgPageLeft,
  svgPageRight,
  svgChevronDown,
} from "../../assets";

// ─── Types ────────────────────────────────────────────────────────────────────
interface LegalDoc {
  id: number;
  code: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const nghiDinhDocs: LegalDoc[] = [
  {
    id: 1,
    code: "Nghị định 131/2022/NĐ-CP",
    description: "Quy định chi tiết một số điều của Luật Điện Ảnh",
  },
  {
    id: 2,
    code: "Nghị định 128/2015/NĐ-CP",
    description:
      "Quy định về xử phạt vi phạm hành chính trong lĩnh vực văn hóa, thể thao, du lịch và quảng cáo",
  },
];

const thongTuDocs: LegalDoc[] = [
  {
    id: 3,
    code: "Thông tư 05/2023/TT-BVHTTDL",
    description:
      "Quy định tiêu chí phân loại phim, biểu mẫu giấy phép phân loại phim điện ảnh",
  },
  {
    id: 4,
    code: "Thông tư 14/2016/TT-BVHTTDL",
    description:
      "Quy định thẩm quyền, trình tự thực hiện việc phân loại phim",
  },
];

const quyetDinhDocs: LegalDoc[] = [
  {
    id: 5,
    code: "Quyết định 196/QĐ-PHPT&TTDT",
    description:
      "Công bố danh mục dịch vụ sự nghiệp sống sự cùng ngân sách nhà nước Lĩnh vực phát thanh truyền hình, điện ảnh",
  },
  {
    id: 6,
    code: "Quyết định 4631/QĐ-BVHTTDL",
    description:
      "Công bố thủ tục hành chính thuộc phạm vi chức năng quản lý của Bộ Văn Hóa, Thể thao và tàu lịch trong lĩnh vực điện ảnh",
  },
];

// ─── Section types for filter sidebar ────────────────────────────────────────
type DocType = "nghiDinh" | "thongTu" | "quyetDinh" | null;

// ─── Document Row ─────────────────────────────────────────────────────────────
function DocRow({ doc }: { doc: LegalDoc }) {
  return (
    <div className="flex items-start gap-4 py-5 border-b border-[#e8e8e8] last:border-b-0">
      {/* Doc icon */}
      <div className="shrink-0 mt-0.5 w-10 h-10 flex items-center justify-center">
        <svg className="w-7 h-8" fill="none" viewBox="0 0 16 20">
          <path d={svgDocument} fill="#414853" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-black text-lg font-medium leading-snug">{doc.code}</p>
        <p className="text-black/70 text-base mt-1 leading-snug">{doc.description}</p>
      </div>

      {/* Actions */}
      <div className="shrink-0 flex flex-col items-end gap-2 ml-4">
        <button className="flex items-center gap-1 bg-gradient-to-b from-[#ff8423] to-[#e46400] text-white px-5 py-2 rounded-lg cursor-pointer hover:from-[#ffdd32] hover:to-[rgba(255,221,50,0.7)] hover:text-[#ba252e] transition-all duration-200 whitespace-nowrap">
          <span className="font-medium">Xem chi tiết</span>
          <span className="font-bold">&gt;</span>
        </button>
        <button className="flex items-center gap-1.5 text-black/60 text-sm cursor-pointer hover:text-black transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 18 20">
            <path d={svgDownload} fill="currentColor" />
          </svg>
          <span>Tải về</span>
        </button>
      </div>
    </div>
  );
}

// ─── Section with star heading ────────────────────────────────────────────────
function DocSection({
  title,
  docs,
}: {
  title: string;
  docs: LegalDoc[];
}) {
  return (
    <div className="mb-2">
      {/* Section header */}
      <div className="bg-[rgba(251,113,4,0.08)] rounded-t-xl px-6 py-4 flex items-center gap-3">
        <svg className="w-7 h-7 shrink-0" fill="none" viewBox="0 0 42.5578 40.6387">
          <path d={svgStar} fill="#414853" />
        </svg>
        <h2 className="text-black text-2xl font-medium">{title}</h2>
      </div>

      {/* Docs */}
      <div className="bg-white rounded-b-xl px-6 divide-y divide-[#e8e8e8]">
        {docs.map((doc) => (
          <DocRow key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
}

// ─── Sidebar Dropdown ─────────────────────────────────────────────────────────
function SidebarDropdown({ label }: { label: string }) {
  return (
    <div className="w-full bg-white/90 rounded-xl h-12 flex items-center px-4 cursor-pointer border border-black/10">
      <span className="flex-1 text-black/60 text-base">{label}</span>
      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 10.5416 6.24659">
        <path d={svgChevronDown} fill="#414853" />
      </svg>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar({
  activeType,
  onTypeChange,
}: {
  activeType: DocType;
  onTypeChange: (t: DocType) => void;
}) {
  const docTypes: { key: DocType; label: string }[] = [
    { key: "nghiDinh", label: "Nghị định" },
    { key: "thongTu", label: "Thông tư" },
    { key: "quyetDinh", label: "Quyết định" },
  ];

  return (
    <aside className="w-[280px] shrink-0 flex flex-col gap-0 self-start">
      {/* Gradient background card */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-b from-[rgba(251,113,4,0.18)] to-white/0 border border-[rgba(251,113,4,0.15)]">
        {/* BỘ LỌC title */}
        <div className="px-6 pt-5 pb-3">
          <h2 className="text-black text-2xl">BỘ LỌC</h2>
        </div>

        {/* Location dropdowns */}
        <div className="px-4 pb-4 flex flex-col gap-3">
          <ProvinceDropdown />
          <SidebarDropdown label="Xã / Phường" />
        </div>

        {/* Divider */}
        <div className="mx-4 h-px bg-black/20 mb-2" />

        {/* Doc type filter */}
        <div className="px-4 pb-5">
          {docTypes.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => onTypeChange(activeType === key ? null : key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors text-left
                ${activeType === key
                  ? "bg-[rgba(251,113,4,0.12)] text-black font-semibold"
                  : "text-black hover:bg-black/5"
                }`}
            >
              <svg className="w-5 h-6 shrink-0" fill="none" viewBox="0 0 16 20">
                <path d={svgDocument} fill="#414853" />
              </svg>
              <span className="text-base">{label}</span>
            </button>
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
      {/* Prev */}
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="w-10 h-10 border border-[#d5d5d5] rounded-l-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-3 h-4" fill="none" viewBox="0 0 4.68494 7.90186">
          <path d={svgPageLeft} fill="#414853" />
        </svg>
      </button>

      {/* Current page */}
      <div className="h-10 min-w-[40px] border-t border-b border-[#d5d5d5] bg-[#ffd0a2] flex items-center justify-center px-3">
        <span className="font-medium text-base text-black">{current}</span>
      </div>

      {/* Label */}
      <div className="h-10 border-t border-b border-[#d5d5d5] flex items-center px-4">
        <span className="text-base text-black">1 of {total} pages</span>
      </div>

      {/* Next */}
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
          {/* Logo + description */}
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

          {/* Nav links */}
          <div className="flex flex-1 gap-20 pt-4">
            {["Khám phá", "Sản xuất", "Khám phá", "Liên hệ"].map((item, i) => (
              <span key={i} className="font-bold text-[#414853] text-xl cursor-pointer hover:text-[#fb7104] transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 mt-8">
          {/* Facebook */}
          <button className="w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-5 h-9" fill="none" viewBox="0 0 22.0787 42.5001">
              <path d={svgFacebook} fill="#414853" />
            </svg>
          </button>
          {/* Email */}
          <button className="w-12 h-12 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-11 h-9" fill="none" viewBox="0 0 54.1667 43.3333">
              <path d={svgEmail} fill="#414853" />
            </svg>
          </button>
          {/* Instagram */}
          <button className="w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg className="w-9 h-9" fill="none" viewBox="0 0 42.5 42.5">
              <path d={svgInstagram} fill="#414853" />
            </svg>
          </button>
          {/* YouTube */}
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
export default function ThuTucGiayPhep() {
  const [activeType, setActiveType] = useState<DocType>(null);
  const [page, setPage] = useState(1);

  // Filter docs based on selected type
  const sectionsToShow = activeType
    ? {
        nghiDinh: activeType === "nghiDinh",
        thongTu: activeType === "thongTu",
        quyetDinh: activeType === "quyetDinh",
      }
    : { nghiDinh: true, thongTu: true, quyetDinh: true };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background landscape image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={imgBgLandscape}
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[rgba(246,243,238,0.88)]" />
      </div>

      {/* Content above z-10 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto w-full px-8 py-3">
          <nav className="flex items-center gap-2 text-base text-black/60">
            <Link to="/" className="hover:text-[#fb7104] transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link to="/thu-tuc-giay-phep" className="hover:text-[#fb7104] transition-colors">Thủ tục &amp; Giấy phép</Link>
            <span>/</span>
            <span className="font-semibold text-black text-lg">Văn bản pháp luật</span>
          </nav>
        </div>

        {/* Main layout */}
        <main className="flex-1 max-w-[1440px] mx-auto w-full px-8 pb-10 flex gap-8 items-start">
          {/* Sidebar */}
          <Sidebar activeType={activeType} onTypeChange={setActiveType} />

          {/* Content panel */}
          <div className="flex-1 bg-white rounded-tr-xl rounded-br-xl shadow-sm min-h-[600px] flex flex-col">
            {/* Header */}
            <div className="px-8 py-5 border-b border-[#9D1111]/30">
              <h1 className="text-black text-xl tracking-wide">
                CÁC VĂN BẢN PHÁT LUẬT LIÊN QUAN ĐẾN ĐIỆN ẢNH
              </h1>
            </div>

            {/* Document sections */}
            <div className="flex-1 px-8 py-6 flex flex-col gap-4">
              {sectionsToShow.nghiDinh && (
                <DocSection title="Nghị định" docs={nghiDinhDocs} />
              )}
              {sectionsToShow.thongTu && (
                <DocSection title="Thông tư" docs={thongTuDocs} />
              )}
              {sectionsToShow.quyetDinh && (
                <DocSection title="Quyết định" docs={quyetDinhDocs} />
              )}
            </div>

            {/* Pagination */}
            <div className="px-8 pb-8">
              <Pagination current={page} total={4} onChange={setPage} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}