import { useState, useRef } from "react";
import { Link, useLocation } from "react-router";
import { imgLogo, imgUserAvatar, svgSearch } from "../../assets";

const NAV_LINKS = [
  { label: "Trang chủ",          path: "/",                   children: null },
  { label: "Địa điểm",           path: "/dia-diem",            children: null },
  {
    label: "Thủ tục/ Giấy phép",
    path: "/thu-tuc-giay-phep",
    children: [
      { label: "Văn bản pháp luật",   path: "/thu-tuc-giay-phep/van-ban-phap-luat" },
      { label: "Quy trình cấp phép",  path: "/thu-tuc-giay-phep/quy-trinh-cap-phep" },
      { label: "Mẫu đơn / Biểu mẫu", path: "/thu-tuc-giay-phep/ho-so-giay-phep" },
    ],
  },
  {
    label: "Hỗ trợ thực địa",
    path: "/ho-tro-thuc-dia",
    children: [
      { label: "Điều phối cơ quan chức năng", path: "/ho-tro-thuc-dia/dieu-phoi-co-quan-chuc-nang" },
      { label: "Kết nối cộng đồng", path: "/ho-tro-thuc-dia/ket-noi-cong-dong" },
    ],
  },
  { label: "Tin tức",             path: "/tin-tuc",            children: null },
  { label: "Tài chính",           path: "/tai-chinh",          children: null },
];

export function Navbar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (path: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(path);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 shrink-0">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center gap-8">
        {/* Logo */}
        <Link to="/" className="shrink-0 h-[60px] w-[220px] relative block">
          <img
            src={imgLogo}
            alt="Vietnam Film Production"
            className="absolute inset-0 w-full h-full object-contain object-left pointer-events-none"
          />
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-[580px]">
          <div className="w-full h-[52px] bg-[#ffac59]/50 rounded-full flex items-center px-5 gap-3">
            <svg className="shrink-0 w-5 h-5" fill="none" viewBox="0 0 18 18">
              <path d={svgSearch} fill="#49454F" />
            </svg>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="flex-1 bg-transparent border-none outline-none text-base text-gray-700"
            />
          </div>
        </div>

        {/* Right */}
        <div className="ml-auto flex items-center gap-6 shrink-0">
          <span className="font-bold text-black text-lg cursor-pointer">EN/VI</span>
          <span className="text-black text-lg cursor-pointer">Login</span>
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden shrink-0">
            <img src={imgUserAvatar} alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Nav links */}
      <nav className="max-w-[1440px] mx-auto px-8 pb-3 flex gap-10">
        {NAV_LINKS.map((item) => {
          const isActive =
            (location.pathname.startsWith(item.path) && item.path !== "/") ||
            (item.path === "/" && location.pathname === "/");

          if (!item.children) {
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-extrabold text-[#fb7104] text-lg whitespace-nowrap hover:opacity-80 transition-opacity ${
                  isActive ? "border-b-2 border-[#fb7104]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          }

          // Item with dropdown
          return (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.path)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.path}
                className={`font-extrabold text-[#fb7104] text-lg whitespace-nowrap hover:opacity-80 transition-opacity flex items-center gap-1 ${
                  isActive ? "border-b-2 border-[#fb7104]" : ""
                }`}
              >
                {item.label}
                {/* Chevron indicator */}
                <svg
                  className={`w-3 h-3 mt-0.5 transition-transform duration-200 ${openMenu === item.path ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#fb7104"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {/* Dropdown menu */}
              {openMenu === item.path && (
                <div
                  className="absolute left-0 top-full pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter(item.path)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden min-w-[220px]">
                    {item.children.map((child, idx) => {
                      const childActive = location.pathname === child.path;
                      return (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`flex items-center gap-3 px-5 py-3.5 text-base whitespace-nowrap transition-colors
                            ${childActive
                              ? "bg-[rgba(251,113,4,0.12)] text-[#fb7104] font-semibold"
                              : "text-[#414853] hover:bg-[rgba(251,113,4,0.08)] hover:text-[#fb7104]"
                            }
                            ${idx !== 0 ? "border-t border-gray-100" : ""}
                          `}
                          onClick={() => setOpenMenu(null)}
                        >
                          {/* Dot indicator */}
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              childActive ? "bg-[#fb7104]" : "bg-[#bfbfbf]"
                            }`}
                          />
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </header>
  );
}