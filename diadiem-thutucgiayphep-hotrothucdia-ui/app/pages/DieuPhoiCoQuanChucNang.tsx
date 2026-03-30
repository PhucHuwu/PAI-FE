import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import {
  imgBgLandscape,
  imgFooterLogo,
  svgFacebook,
  svgEmail,
  svgInstagram,
  svgYouTube,
} from "../../assets";

// Chevron down SVG path (from svg-udzgr4kd6w.ts — p3c3ab600)
const svgChevronDown =
  "M10.2458 0.290792C10.0584 0.104542 9.80498 0 9.5408 0C9.27661 0 9.02316 0.104542 8.8358 0.290792L5.2458 3.83079L1.7058 0.290792C1.51844 0.104542 1.26498 0 1.0008 0C0.736612 0 0.483161 0.104542 0.295798 0.290792C0.20207 0.383755 0.127675 0.494356 0.0769067 0.616216C0.026138 0.738075 0 0.868781 0 1.00079C0 1.1328 0.026138 1.26351 0.0769067 1.38537C0.127675 1.50723 0.20207 1.61783 0.295798 1.71079L4.5358 5.95079C4.62876 6.04452 4.73936 6.11891 4.86122 6.16968C4.98308 6.22045 5.11379 6.24659 5.2458 6.24659C5.37781 6.24659 5.50852 6.22045 5.63037 6.16968C5.75223 6.11891 5.86284 6.04452 5.9558 5.95079L10.2458 1.71079C10.3395 1.61783 10.4139 1.50723 10.4647 1.38537C10.5155 1.26351 10.5416 1.1328 10.5416 1.00079C10.5416 0.868781 10.5155 0.738075 10.4647 0.616216C10.4139 0.494356 10.3395 0.383755 10.2458 0.290792Z";

// ─── Table data ───────────────────────────────────────────────────────────────
interface CoQuanRow {
  stt: number;
  phamVi: string;
  coQuan: string;
  tinh: boolean;
  thongTin?: string;
}

const tableData: CoQuanRow[] = [
  {
    stt: 1,
    phamVi: "Hỗ trợ thủ tục bổ sung tại hiện trường",
    coQuan: "Sở Văn Hóa - Thể Thao và Du Lịch",
    tinh: true,
  },
  {
    stt: 2,
    phamVi: "Điều phối an ninh - trật tự",
    coQuan: "Công an địa phương",
    tinh: true,
  },
  {
    stt: 3,
    phamVi: "Phân luồng giao thông khi quay ngoại cảnh",
    coQuan: "CSGT (Phân luồng giao thông)",
    tinh: true,
  },
  {
    stt: 4,
    phamVi: "Giảm sát bảo vệ môi trường",
    coQuan: "Ban quản lý di tích / danh thắng",
    tinh: true,
  },
  {
    stt: 5,
    phamVi: "Làm việc với ban quản lý khu bảo tồn",
    coQuan: "Kiểm lâm (rừng - vườn quốc gia)",
    tinh: true,
  },
];

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
export default function DieuPhoiCoQuanChucNang() {
  const [tinhSort, setTinhSort] = useState<"asc" | "desc">("asc");

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={imgBgLandscape}
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[rgba(246,243,238,0.5)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto w-full px-8 pt-4 pb-2">
          <nav className="flex items-center gap-2 text-base text-black/60">
            <Link to="/" className="hover:text-[#fb7104] transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-black">Hỗ trợ thực địa</span>
          </nav>
        </div>

        {/* Page title */}
        <div className="max-w-[1440px] mx-auto w-full px-8 pb-6">
          <h1 className="text-black text-4xl tracking-wide">
            ĐIỀU PHỐI CƠ QUAN CHỨC NĂNG
          </h1>
        </div>

        {/* Main content */}
        <main className="flex-1 max-w-[1440px] mx-auto w-full px-8 pb-12">
          {/* Table card */}
          <div className="bg-white/60 rounded-2xl overflow-hidden shadow-sm">
            {/* Description bar */}
            <div className="bg-[rgba(251,113,4,0.55)] px-6 py-4">
              <p className="text-white text-base leading-snug">
                Phối hợp với các sở, ban, ngành để đảm bảo quá trình ghi hình diễn ra thuận lợi, an toàn , đúng quy định pháp luật tại địa phương
              </p>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse">
                {/* Header */}
                <thead>
                  <tr>
                    {/* STT */}
                    <th className="bg-[rgba(251,113,4,0.6)] border border-[#b9b9b9] px-3 py-3 text-white text-lg font-semibold text-center w-16 whitespace-nowrap">
                      STT
                    </th>
                    {/* Phạm vi hỗ trợ */}
                    <th className="bg-[rgba(251,113,4,0.6)] border border-[#b9b9b9] px-3 py-3 text-white text-lg font-semibold text-center">
                      Phạm vi hỗ trợ
                    </th>
                    {/* Cơ quan phối hợp */}
                    <th className="bg-[rgba(251,113,4,0.6)] border border-[#b9b9b9] px-3 py-3 text-white text-lg font-semibold text-center">
                      Cơ quan phối hợp
                    </th>
                    {/* Tỉnh / Thành — sortable */}
                    <th className="bg-[rgba(251,113,4,0.6)] border border-[#b9b9b9] px-3 py-3 text-white text-lg font-semibold text-center w-48">
                      <button
                        onClick={() => setTinhSort(s => s === "asc" ? "desc" : "asc")}
                        className="flex items-center justify-center gap-2 w-full cursor-pointer group"
                      >
                        <span>Tỉnh / Thành</span>
                        <svg
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${tinhSort === "desc" ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 10.5416 6.24659"
                        >
                          <path d={svgChevronDown} fill="white" />
                        </svg>
                      </button>
                    </th>
                    {/* Thông tin liên hệ */}
                    <th className="bg-[rgba(251,113,4,0.6)] border border-[#b9b9b9] px-3 py-3 text-white text-lg font-semibold text-center">
                      Thông tin liên hệ
                    </th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {tableData.map((row, idx) => {
                    const isEven = idx % 2 === 1;
                    const rowBg = isEven
                      ? "bg-[rgba(251,113,4,0.35)]"
                      : "bg-[rgba(251,113,4,0.2)]";
                    return (
                      <tr key={row.stt} className={rowBg}>
                        {/* STT */}
                        <td className="border border-[#b9b9b9] px-3 py-3 text-white text-base text-center font-medium">
                          {row.stt}
                        </td>
                        {/* Phạm vi hỗ trợ */}
                        <td className="border border-[#b9b9b9] px-4 py-3 text-white text-sm leading-snug">
                          {row.phamVi}
                        </td>
                        {/* Cơ quan phối hợp */}
                        <td className="border border-[#b9b9b9] px-4 py-3 text-white text-sm leading-snug">
                          {row.coQuan}
                        </td>
                        {/* Tỉnh / Thành — checkmark */}
                        <td className="border border-[#b9b9b9] px-3 py-3 text-center">
                          {row.tinh && (
                            <span className="text-[#2e7c01] text-3xl font-semibold leading-none select-none">
                              ✓
                            </span>
                          )}
                        </td>
                        {/* Thông tin liên hệ */}
                        <td className="border border-[#b9b9b9] px-4 py-3 text-white text-sm">
                          {row.thongTin ?? ""}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
