import { NavLink, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  MapPin,
  BookOpen,
  Newspaper,
  Wallet,
  Star,
} from "lucide-react";

const navItems = [
  { label: "Bảng điều khiển", path: "/", icon: LayoutDashboard, exact: true },
  { label: "Quản lý vendor/user", path: "/vendor-user", icon: Users },
  { label: "Quản lý địa điểm", path: "/dia-diem", icon: MapPin },
  { label: "Luật Điện Ảnh", path: "/luat-dien-anh", icon: BookOpen },
  { label: "Quản lý tin tức", path: "/tin-tuc", icon: Newspaper },
  { label: "Quản lý tài chính", path: "/tai-chinh", icon: Wallet },
  { label: "Chỉ số Pai", path: "/chi-so-pai", icon: Star },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-[240px] flex-shrink-0 bg-white shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col h-full z-10">
      <nav className="flex flex-col gap-1 pt-4 px-2">
        {navItems.map((item) => {
          const isActive = item.exact
            ? location.pathname === item.path
            : location.pathname === item.path || location.pathname.startsWith(item.path + "/");
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative flex items-center gap-3 py-[14px] px-3 rounded-[7px] overflow-hidden group"
            >
              {isActive && (
                <>
                  <div className="absolute left-0 top-0 h-full w-[10px] bg-[#ba252e] rounded-tl-[7px] rounded-bl-[7px]" />
                  <div className="absolute left-[10px] top-0 h-full right-0 bg-[#ffd0a2] rounded-tr-[7px] rounded-br-[7px]" />
                </>
              )}
              {!isActive && (
                <div className="absolute inset-0 bg-transparent group-hover:bg-[#fff1e4] rounded-[7px] transition-colors" />
              )}
              <Icon
                size={20}
                className={`relative z-10 flex-shrink-0 ${isActive ? "text-[#ba252e]" : "text-[#ba252e]"}`}
              />
              <span
                className={`relative z-10 text-[15px] font-medium leading-tight ${
                  isActive ? "text-[#ba252e]" : "text-black"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
