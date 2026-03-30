'use client';

import React, { useState, useRef } from "react";
import Link from 'next/link'
import svgPaths from '@/assets/import/svg-8d5vo7up8h'
import userImg from '@/public/assets/UserIcon.svg';
import logo from '@/public/assets/Logo1.svg';
import { Menu, X, ChevronDown } from "lucide-react";
import svgThuTuc from '@/assets/import/svg-5f8ts2r75e';
import svgHoTro from '@/assets/import/svg-1olhhx3kod';
import svgTinTuc from '@/assets/import/svg-0kyd8xp00s';
import svgTaiChinh from '@/assets/import/svg-azm0jqzmsu';

// ─── Types ────────────────────────────────────────────────────────────────────
interface LargeDropdownItem {
  type: "large";
  href: string;
  iconPath: string;
  iconViewBox: string;
  title: string;
  subtitle: string;
}
interface SmallDropdownItem {
  type: "small";
  href: string;
  text: string;
}
type DropdownItem = LargeDropdownItem | SmallDropdownItem;

interface NavItemConfig {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
  dropdownWidth?: number;
  dropdownAlign?: "left" | "right";
}

// ─── Nav Config ───────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItemConfig[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Địa điểm", href: "/dia-diem" },
  {
    label: "Thủ tục/ Giấy phép",
    href: "/thu-tuc-giay-phep",
    dropdownWidth: 342,
    dropdown: [
      {
        type: "large",
        href: '/thu-tuc-giay-phep/van-ban-phap-luat',
        iconPath: svgThuTuc.p2544a680,
        iconViewBox: "0 0 39.3333 49.1667",
        title: "Văn bản pháp luật",
        subtitle: "Quy định và điều khoản",
      },
      {
        type: "large",
        href: '/thu-tuc-giay-phep/quy-trinh-cap-phep',
        iconPath: svgThuTuc.p294ee800,
        iconViewBox: "0 0 39.3333 49.1667",
        title: "Quy trình cấp phép",
        subtitle: "Thủ tục",
      },
      {
        type: "large",
        href: '/thu-tuc-giay-phep/ho-so-giay-phep',
        iconPath: svgThuTuc.p2aae2800,
        iconViewBox: "0 0 49.1667 46.7084",
        title: "Hồ sơ giấy phép",
        subtitle: "Hoàn tất thủ tục",
      },
    ],
  },
  {
    label: "Hỗ trợ thực địa",
    href: "/ho-tro-thuc-dia",
    dropdownWidth: 342,
    dropdown: [
      {
        type: "large",
        href: '/ho-tro-thuc-dia/dieu-phoi-co-quan-chuc-nang',
        iconPath: svgHoTro.p32850600,
        iconViewBox: "0 0 49.1667 49.1667",
        title: "Phối hợp cơ quan chức năng",
        subtitle: "Điều kiện tham gia",
      },
      {
        type: "large",
        href: '/ho-tro-thuc-dia/ket-noi-cong-dong',
        iconPath: svgHoTro.p3c4fb300,
        iconViewBox: "0 0 49.1542 43.6051",
        title: "Kết nối cộng đồng",
        subtitle: "Mạng xã hội",
      },
    ],
  },
  {
    label: "Tin tức",
    href: "/tin-tuc",
    dropdownWidth: 342,
    dropdown: [
      {
        type: "large",
        href: '/tin-tuc/chinh-sach',
        iconPath: svgTinTuc.pc2f4200,
        iconViewBox: "0 0 49.2319 49.7207",
        title: "Chính sách",
        subtitle: "Văn bản và chính sách địa phương",
      },
      {
        type: "large",
        href: '/tin-tuc/su-kien',
        iconPath: svgTinTuc.p26cb3400,
        iconViewBox: "0 0 49.1667 54.0833",
        title: "Sự kiện",
        subtitle: "Các sự kiện sắp diễn ra",
      },
      {
        type: "large",
        href: '/tin-tuc/tin-tuc',
        iconPath: svgTinTuc.p2d385300,
        iconViewBox: "0 0 49.1667 44.25",
        title: "Tin tức",
        subtitle: "Tin tức gần đây",
      },
    ],
  },
  {
    label: "Tài chính",
    href: "/tai-chinh",
    dropdownWidth: 292,
    dropdownAlign: "right",
    dropdown: [
      { type: "small", href: '/tai-chinh/chinh-sach-uu-dai', text: "Chính sách & Ưu đãi" },
      { type: "small", href: '/tai-chinh/chi-phi-dich-vu', text: "Chi phí & Dịch vụ phổ biến" },
      { type: "small", href: '/tai-chinh/quy-nguon-luc', text: "Quỹ & Nguồn hỗ trợ" },
    ],
  },
];

// ─── Large dropdown row (red icon + title + subtitle) ─────────────────────────
function LargeDropdownRow({ item }: { item: LargeDropdownItem }) {
  return (
    <Link
      href={item.href}
      className="flex items-center bg-white hover:bg-orange-100 transition-colors border-b border-gray-100 last:border-0 cursor-pointer"
      style={{ minHeight: 91 }}
    >
      {/* Icon area: matches Figma's 20px left padding, 59px container */}
      <div className="flex-shrink-0 flex items-center justify-center"
           style={{ width: 79, paddingLeft: 20 }}>
        <div style={{ width: 39, height: 49 }}>
          <svg
            className="w-full h-full"
            fill="none"
            viewBox={item.iconViewBox}
          >
            <path d={item.iconPath} fill="#9D1111" />
          </svg>
        </div>
      </div>
      {/* Text area: matches Figma's 25.73% left inset = ~88px from container edge */}
      <div className="flex flex-col justify-center py-3 pr-4">
        <p className="font-semibold text-[18px] text-black leading-snug whitespace-nowrap">
          {item.title}
        </p>
        <p className="text-[14px] text-black leading-snug mt-0.5">
          {item.subtitle}
        </p>
      </div>
    </Link>
  );
}

// ─── Small dropdown row (TaiChinh: orange arrow + text) ───────────────────────
function SmallDropdownRow({ item, isFirst, isLast }: {
  item: SmallDropdownItem;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <Link
      href={item.href}
      className="flex items-center gap-3 px-5 bg-white hover:bg-orange-100 transition-colors cursor-pointer border-b border-gray-100 last:border-0"
      style={{ minHeight: 91 }}
    >
      {/* Orange chevron arrow */}
      <div className="flex-shrink-0" style={{ width: 12, height: 14 }}>
        <svg
          className="w-full h-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 12.1036 13.479"
        >
          <path
            d={svgTaiChinh.p3ef4fb80}
            stroke="#FB7104"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      </div>
      <p className="font-semibold text-[18px] text-black leading-snug whitespace-nowrap">{item.text}</p>
    </Link>
  );
}

// ─── Dropdown panel ───────────────────────────────────────────────────────────
function DropdownPanel({ items, width, align = "left" }: { items: DropdownItem[]; width: number; align?: "left" | "right" }) {
  return (
    <div
      className={`absolute top-full z-50 overflow-hidden shadow-[0px_6px_20px_rgba(0,0,0,0.18)] ${align === "right" ? "right-0" : "left-0"}`}
      style={{ width, minWidth: width }}
    >
      {items.map((item, i) =>
        item.type === "large" ? (
          <LargeDropdownRow key={i} item={item} />
        ) : (
          <SmallDropdownRow
            key={i}
            item={item}
            isFirst={i === 0}
            isLast={i === items.length - 1}
          />
        )
      )}
    </div>
  );
}

// ─── Desktop nav item (with hover dropdown) ───────────────────────────────────
function DesktopNavItem({ item }: { item: NavItemConfig }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (item.dropdown) setOpen(true);
  };
  const onLeave = () => {
    if (item.dropdown) {
      timerRef.current = setTimeout(() => setOpen(false), 120);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <Link
        href={item.href}
        className="flex items-center gap-0.5 text-[#f26c23] text-[22px] font-bold whitespace-nowrap hover:text-[#ff8f3a] transition-colors py-1"
      >
        {item.label}
        {item.dropdown && (
          <ChevronDown
            size={16}
            className={`ml-0.5 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""} text-[#f26c23]`}
          />
        )}
      </Link>
      {/* Invisible bridge to prevent gap between nav item and dropdown */}
      {item.dropdown && open && (
        <div className="absolute top-full left-0 w-full h-1 z-50" />
      )}
      {item.dropdown && open && (
        <DropdownPanel items={item.dropdown} width={item.dropdownWidth ?? 342} align={item.dropdownAlign} />
      )}
    </div>
  );
}

// ─── Mobile nav item (accordion) ─────────────────────────────────────────────
function MobileNavItem({ item, onClose }: { item: NavItemConfig; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="flex px-5 py-4 text-[#f26c23] font-bold text-lg border-b border-gray-100"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-100">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-[#f26c23] font-bold text-lg"
        onClick={() => setExpanded((v) => !v)}
      >
        <span>{item.label}</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 flex-shrink-0 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="bg-gray-50 border-t border-gray-100">
          {item.dropdown.map((subItem, i) =>
            subItem.type === "large" ? (
              <Link
                key={i}
                href={subItem.href}
                className="flex items-center gap-4 px-5 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-100"
              >
                <div className="flex-shrink-0" style={{ width: 32, height: 40 }}>
                  <svg className="w-full h-full" fill="none" viewBox={subItem.iconViewBox}>
                    <path d={subItem.iconPath} fill="#9D1111" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-base text-black leading-snug">
                    {subItem.title}
                  </p>
                  <p className="text-sm text-gray-600 leading-snug mt-0.5">
                    {subItem.subtitle}
                  </p>
                </div>
              </Link>
            ) : (
              <Link
                key={i}
                href={subItem.href}
                className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-gray-100"
              >
                <div className="flex-shrink-0" style={{ width: 10, height: 12 }}>
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1036 13.479">
                    <path d={svgTaiChinh.p3ef4fb80} stroke="#FB7104" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <p className="text-base text-black">{subItem.text}</p>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────
export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 lg:py-4">

        {/* ── Top row: Logo + Search + Controls ── */}
        <div className="flex items-center justify-between gap-3 lg:gap-6 mb-3 lg:mb-4">

          {/* Logo */}
          <div className="flex-shrink-0 w-[140px] sm:w-[180px] lg:w-[240px]">
            <img
              src={logo.src}
              alt="Vietnam Film Universe"
              className="w-full h-auto"
            />
          </div>

          {/* Search Bar — hidden on xs, visible sm+ */}
          <div className="hidden sm:flex flex-1 max-w-[850px]">
            <div className="relative bg-[#FDE2C6] rounded-full px-5 lg:px-6 py-2.5 lg:py-3 w-full">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="flex-shrink-0 w-[18px] h-[18px]">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p16b4a380} fill="#49454F" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-600 text-base lg:text-lg"
                />
              </div>
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 flex-shrink-0">
            <button className="hidden sm:block text-base lg:text-[22px] font-black text-black hover:text-[#fb7104] transition-colors whitespace-nowrap">
              EN/VI
            </button>
            <button className="hidden sm:block text-base lg:text-[22px] text-black hover:text-[#fb7104] transition-colors">
              Login
            </button>
            <div className="hidden sm:block w-[38px] lg:w-[50px] h-[38px] lg:h-[50px] rounded-full overflow-hidden border-2 border-transparent hover:border-[#fb7104] cursor-pointer transition-all flex-shrink-0">
              <img src={userImg.src} alt="User" className="w-full h-full object-cover" />
            </div>
            {/* Hamburger button — visible below lg */}
            <button
              className="lg:hidden p-1.5 rounded-md text-[#f26c23] hover:bg-orange-50 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ── Desktop nav bar ── */}
        <nav className="hidden lg:flex items-center justify-between w-full mt-1">
          {NAV_ITEMS.map((item, i) => (
            <DesktopNavItem key={i} item={item} />
          ))}
        </nav>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl max-h-[80vh] overflow-y-auto">
          {/* Search bar for xs screens */}
          <div className="sm:hidden px-4 py-3 border-b border-gray-200">
            <div className="bg-[#FDE2C6] rounded-full px-4 py-2 flex items-center gap-2">
              <div className="flex-shrink-0 w-[16px] h-[16px]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p16b4a380} fill="#49454F" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-600 text-base"
              />
            </div>
          </div>

          {/* Nav items */}
          {NAV_ITEMS.map((item, i) => (
            <MobileNavItem key={i} item={item} onClose={() => setMobileOpen(false)} />
          ))}

          {/* User actions for xs screens */}
          <div className="sm:hidden flex items-center justify-around px-4 py-4 border-t border-gray-200 bg-gray-50">
            <button className="text-lg font-black text-black hover:text-[#fb7104] transition-colors">
              EN/VI
            </button>
            <button className="text-lg text-black hover:text-[#fb7104] transition-colors">
              Login
            </button>
            <div className="w-[38px] h-[38px] rounded-full overflow-hidden border-2 border-gray-200">
              <img src={userImg.src} alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
