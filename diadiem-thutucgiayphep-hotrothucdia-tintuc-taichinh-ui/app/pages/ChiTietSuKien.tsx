import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { imgBgLandscape, imgFooterLogo } from "../../assets";
import svgPaths from "../../imports/svg-h2fd5sjp1i";
import svgFilter from "../../imports/svg-r1ys8dctmr";

// Figma assets
import imgEventBanner from "figma:asset/aa8ea0fb0601a7e18cc669443a0e59489d547313.png";

type FilterType = "Tất cả" | "Đã diễn ra" | "Đang diễn ra" | "Sắp diễn ra";
const FILTER_OPTIONS: FilterType[] = ["Tất cả", "Đã diễn ra", "Đang diễn ra", "Sắp diễn ra"];

// ─── Filter Dropdown ──────────────────────────────────────────────────────────
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

  const OPTION_ICONS: Record<FilterType, React.ReactNode> = {
    "Tất cả":        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20 20"><path d={svgFilter.p2712ce80} fill="#414853" /></svg>,
    "Đã diễn ra":   <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20.0265 20.2254"><path d={svgFilter.pfa58900} fill="#414853" /></svg>,
    "Đang diễn ra": <svg className="w-[18px] h-5 shrink-0" fill="none" viewBox="0 0 18.0001 20"><path d={svgFilter.pd0eb040} fill="#414853" /></svg>,
    "Sắp diễn ra":  <svg className="w-3.5 h-5 shrink-0" fill="none" viewBox="0 0 14 20.004"><path d={svgFilter.pf8b1bc0} fill="#414853" /></svg>,
  };

  return (
    <div ref={ref} className="relative w-[302px]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full h-[49px] bg-white rounded-lg flex items-center px-4 gap-3 cursor-pointer hover:bg-gray-50 transition-colors border border-gray-100"
      >
        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 20 20">
          <path d={svgFilter.p2712ce80} fill="#414853" />
        </svg>
        <span className="flex-1 text-left text-black text-base">{value}</span>
        <svg className={`w-[11px] h-[6px] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 10.5175 6.24659">
          <path d={svgFilter.p2f532800} fill="#414853" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 w-full bg-white rounded-b-xl shadow-lg overflow-hidden border border-gray-100">
          {FILTER_OPTIONS.map((opt, idx) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full h-[49px] flex items-center gap-3 px-4 cursor-pointer transition-colors
                ${idx !== 0 ? "border-t border-gray-100" : ""}
                ${value === opt ? "bg-[rgba(251,113,4,0.1)] text-[#fb7104]" : "text-black hover:bg-[rgba(251,113,4,0.06)] hover:text-[#fb7104]"}`}
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

// ─── Info bullet icon ─────────────────────────────────────────────────────────
function IconInfo() {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 shrink-0 mt-0.5">
      {/* Orange circle */}
      <svg className="absolute w-6 h-6" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" fill="#FB7104" r="12" />
      </svg>
      {/* White info icon on top */}
      <svg className="relative w-[26.67px] h-[26.67px]" fill="none" viewBox="0 0 26.6667 26.6667">
        <path d={svgPaths.p37de1c00} fill="white" />
      </svg>
    </span>
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
export default function ChiTietSuKien() {
  const [filter, setFilter] = useState<FilterType>("Tất cả");
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src={imgBgLandscape} alt="" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-[rgba(246,243,238,0.55)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 max-w-[1440px] mx-auto w-full px-8 py-6">

          {/* ── Breadcrumb ── */}
          <div className="flex items-center gap-2 mb-4">
            <Link to="/" className="text-black/50 text-base hover:text-[#fb7104] transition-colors">Trang chủ</Link>
            <span className="text-black/50 text-base">/</span>
            <Link to="/tin-tuc" className="text-black/50 text-base hover:text-[#fb7104] transition-colors">Tin tức</Link>
            <span className="text-black/50 text-base">/</span>
            <Link to="/tin-tuc/su-kien" className="text-black/50 text-base hover:text-[#fb7104] transition-colors">Sự kiện</Link>
          </div>

          {/* ── Filter bar ── */}
          <div className="flex items-center gap-3 mb-5">
            <FilterDropdown value={filter} onChange={setFilter} />
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
          <div className="bg-white rounded-lg overflow-hidden">

            {/* ─── Top: Title + two-column layout ─── */}
            <div className="px-6 pt-6 pb-4">

              {/* Event title */}
              <h1 className="text-4xl mb-6 leading-tight">
                <span className="font-bold text-black">Festival Hoa </span>
                <span className="font-bold text-[#fb7104]">Đà Lạt</span>
                <span className="font-bold text-black"> 2024</span>
              </h1>

              {/* Two-column layout */}
              <div className="flex gap-6">

                {/* ─── Left: event info ─── */}
                <div className="flex-1 min-w-0 bg-[#f8f8f8] rounded-lg p-6">

                  {/* Section 1 */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative flex items-center justify-center w-8 h-8 shrink-0 mt-0.5">
                      <svg className="absolute w-6 h-6" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" fill="#FB7104" r="12" />
                      </svg>
                      <svg className="relative w-[26.67px] h-[26.67px]" fill="none" viewBox="0 0 26.6667 26.6667">
                        <path d={svgPaths.p37de1c00} fill="white" />
                      </svg>
                    </div>
                    <h2 className="text-[#fb7104] text-[22px] font-medium">Giới thiệu về sự kiện</h2>
                  </div>
                  <p className="text-black text-base leading-relaxed text-justify mb-6 pl-11">
                    Festival Hoa Đà Lạt là sự kiện văn hóa, du lịch mang tầm quốc gia và quốc tế. Nhằm tôn vinh giá trị của hoa và nghề trồng hoa tại Địa phương. Đây là dịp để quảng bá hình ảnh thành phố ngàn hoa đến với du khách cả ở Việt Nam nói riêng và nước ngoài nói chung.
                  </p>

                  {/* Separator */}
                  <div className="border-t border-[#9B9B9B]/40 mb-6 ml-11" />

                  {/* Section 2 */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative flex items-center justify-center w-8 h-8 shrink-0 mt-0.5">
                      <svg className="absolute w-6 h-6" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" fill="#FB7104" r="12" />
                      </svg>
                      <svg className="relative w-[26.67px] h-[26.67px]" fill="none" viewBox="0 0 26.6667 26.6667">
                        <path d={svgPaths.p37de1c00} fill="white" />
                      </svg>
                    </div>
                    <h2 className="text-[#fb7104] text-[22px] font-medium">Mục đích và ý nghĩa</h2>
                  </div>
                  <p className="text-black text-base leading-relaxed text-justify mb-6 pl-11">
                    Thúc đẩy phát triển kinh tế du lịch, tôn vinh các nghệ nhân trồng hoa và tạo ra không gian văn hóa cộng đồng đặc sắc, góp phần khẳng định thương hiệu Thành phố sáng tạo của UNESCO.
                  </p>

                  {/* Separator */}
                  <div className="border-t border-[#9B9B9B]/40 mb-6" />

                  {/* Section 3 */}
                  <h2 className="text-[#fb7104] text-[22px] font-semibold uppercase mb-4">
                    Các hoạt động chính của lễ hội hoa
                  </h2>
                  <ul className="list-disc pl-8 mb-4 text-[#6c2f00] text-base">
                    <li className="leading-relaxed">Liên hoan giao lưu văn nghệ</li>
                  </ul>
                  <p className="text-black text-base leading-relaxed text-justify">
                    Sau một ngày dài khám phá bạn có thể chọn điểm dừng chân buổi tối ở lễ hội văn hóa văn nghệ của bà con nơi đây tổ chức để tôn vinh vẻ đẹp truyền thống tinh hoa của ngành trồng hoa ở Đà Lạt. Với quy mô lớn, song hành cùng là các Nhà tài trợ nổi bật như Lang'farm, DaLatLove,... Tham gia lễ hội đêm ngoài được thưởng thức những tiết mục văn hóa văn nghệ, các bạn còn có thể thưởng thức tất cả những đặc sản của Đà Lạt được bày quán ở các sạp hàng với nhiều màu sắc bắt mắt. Không những được no cái bụng mà còn đã con mắt chiêm ngưỡng vẻ đẹp của người Đà Lạt vừa hiền hòa vừa mến yêu.
                  </p>
                </div>

                {/* ─── Vertical separator ─── */}
                <div className="w-px bg-[#9B9B9B]/40 self-stretch mx-1 hidden lg:block" />

                {/* ─── Right: info cards ─── */}
                <div className="w-[370px] shrink-0 flex flex-col gap-4">

                  {/* THỜI GIAN VÀ ĐỊA ĐIỂM card */}
                  <div className="bg-white border border-[#c2c2c2] rounded-lg p-5">
                    <h3 className="text-[#a4a4a4] text-lg font-semibold uppercase mb-4 tracking-wide">
                      Thời gian và địa điểm
                    </h3>

                    {/* Separator */}
                    <div className="border-t border-[#9B9B9B]/50 mb-4" />

                    <p className="text-[#a4a4a4] text-sm font-semibold uppercase tracking-wide mb-2">Thời gian</p>
                    <p className="text-black text-base mb-4">Từ ngày 30/12 đến hết ngày 31/12/2024</p>

                    <p className="text-[#a4a4a4] text-sm font-semibold uppercase tracking-wide mb-2">Địa điểm</p>
                    <p className="text-black text-base mb-1">Tại các địa điểm:</p>
                    <ul className="list-disc pl-6 text-black text-base space-y-1">
                      <li>Quảng trường Lâm Viên</li>
                      <li>Công viên Trần Quốc Toản</li>
                      <li>Một số làng hoa tiêu biểu</li>
                    </ul>
                  </div>

                  {/* LƯU Ý card */}
                  <div className="bg-white border border-[#c2c2c2] rounded-lg p-5">
                    <h3 className="text-[#a4a4a4] text-lg font-semibold uppercase mb-4 tracking-wide">
                      Lưu ý
                    </h3>
                    <ul className="list-disc pl-6 text-black text-base space-y-3">
                      <li className="leading-snug">
                        Lễ hội quy mô lớn vì vậy hãy đảm bảo đồ cá nhân của bạn được cất ở nơi an toàn nhất
                      </li>
                      <li className="leading-snug">
                        Để xem được toàn cảnh, chỗ đẹp nhất bạn nên đến sớm
                      </li>
                      <li className="leading-snug">
                        Luôn cảnh giác các hành vi lừa đảo, giả danh người thân hay người nổi tiếng nhằm chiếm đoạt tài sản
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Full-width event photo ─── */}
            <div className="px-6 pb-2">
              <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: "33%" }}>
                <img
                  src={imgEventBanner}
                  alt="Festival Hoa Đà Lạt 2024"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="text-center italic text-black/60 text-base py-4">
                Biểu diễn văn nghệ "Lễ Hội Hoa Đà Lạt" Quảng trường An Viên (2024)
              </p>
            </div>

          </div>{/* end main card */}
        </main>

        <Footer />
      </div>
    </div>
  );
}
