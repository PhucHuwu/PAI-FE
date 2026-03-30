import { Bell } from "lucide-react";
import imgLogo from "figma:asset/0cc2640c46d620d6b41eb7ed53406956f72892ae.png";
import imgAdminAvatar from "figma:asset/771d48019accbed3440140ddf3d4191421b5cf3c.png";

export function Header() {
  return (
    <header className="h-[70px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-between px-6 z-20 flex-shrink-0">
      <div className="h-full flex items-center">
        <img src={imgLogo} alt="Việt Nam PAI Logo" className="h-full object-contain" />
      </div>
      <div className="flex items-center gap-4">
        <button className="w-8 h-8 flex items-center justify-center text-[#414853] hover:text-[#ba252e]">
          <Bell size={22} />
        </button>
        <div className="flex items-center gap-3">
          <img src={imgAdminAvatar} alt="Admin avatar" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-[14px] font-semibold text-black leading-tight">Cục Điện Ảnh</p>
            <p className="text-[12px] text-gray-500">Admin</p>
          </div>
          <svg width="12" height="8" viewBox="0 0 16 9.41512" fill="none">
            <path d="M1 1L8.5 8L15 1" stroke="#3882AD" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </header>
  );
}
