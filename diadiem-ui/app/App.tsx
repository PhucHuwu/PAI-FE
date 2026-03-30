import { useState, useRef, useEffect } from "react";
import {
  // ── images ──────────────────────────────────────────────────────────────────
  imgUserAvatar,
  imgLogo,
  imgLocationDefault,
  imgPAIChart,
  imgHoHoanKiem,
  imgVanMieu,
  imgLangHCM,
  imgHoangThanhThangLong,
  imgNhaThoLon,
  imgChuaThay,
  // ── svg paths ───────────────────────────────────────────────────────────────
  svgSearch,
  svgCheckmark,
  svgChevronUp,
  svgChevronDown,
  svgHeartOutline,
  svgHeartFilled,
  svgSpinner,
} from "../assets";

// ─── Verified Badge ───────────────────────────────────────────────────────────
function VerifiedBadge() {
  return (
    <div className="flex items-center gap-1.5 bg-[#e4e8e0] rounded-xl px-2.5 py-1 w-fit">
      <div className="relative shrink-0" style={{ width: 18, height: 18 }}>
        <svg className="absolute block size-full" fill="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="#4D9271" r="9" />
        </svg>
        <div className="absolute" style={{ inset: "28.81% 20.7% 28.6% 20.74%" }}>
          <svg className="absolute block size-full" fill="none" viewBox="0 0 11.7115 8.518">
            <path d={svgCheckmark} fill="white" />
          </svg>
        </div>
      </div>
      <span className="text-[#4d9271] text-sm font-medium">Verified</span>
    </div>
  );
}

// ─── Location Card ────────────────────────────────────────────────────────────
interface LocationCardProps {
  title: string;
  location: string;
  verified?: boolean;
  image: string;
}

function LocationCard({ title, location, verified = true, image }: LocationCardProps) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col">
      <div className="relative h-[220px] shrink-0">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>
      <div className="flex flex-col gap-1.5 px-4 pt-3 pb-4 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-bold text-black text-xl">{title}</span>
          <button
            onClick={() => setLiked(!liked)}
            className="cursor-pointer shrink-0"
            aria-label="Yêu thích"
          >
            <svg width="28" height="26" viewBox="0 0 33.3498 30.7748" fill="none">
              {liked ? (
                <path d={svgHeartFilled} fill="#BA252E" />
              ) : (
                <path d={svgHeartOutline} fill="black" />
              )}
            </svg>
          </button>
        </div>
        <span className="text-black text-base">{location}</span>
        {verified && <VerifiedBadge />}
      </div>
    </div>
  );
}

// ─── Dropdown (plain, non-interactive) ───────────────────────────────────────
function Dropdown({ label }: { label: string }) {
  return (
    <div className="relative w-full border border-black rounded-xl h-[52px] flex items-center px-4 cursor-pointer bg-white">
      <span className="flex-1 text-black/50 text-base font-medium">{label}</span>
      <div className="shrink-0 w-5 h-5 relative overflow-hidden">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 10.5416 6.24659">
          <path d={svgChevronDown} fill="black" />
        </svg>
      </div>
    </div>
  );
}

// ─── Province Dropdown ────────────────────────────────────────────────────────
const PROVINCES = [
  "Hà Nội",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Hội An",
  "Huế",
  "Quảng Bình",
  "Hạ Long",
  "Sapa",
  "Đà Lạt",
  "Nha Trang",
];

interface ProvinceDropdownProps {
  value: string;
  onChange: (v: string) => void;
}

function ProvinceDropdown({ value, onChange }: ProvinceDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full border border-black rounded-xl h-[52px] flex items-center px-4 cursor-pointer bg-white"
      >
        <span className={`flex-1 text-base font-medium text-left ${value ? "text-black" : "text-black/50"}`}>
          {value || "Tỉnh / Thành phố"}
        </span>
        <div className={`shrink-0 w-5 h-5 relative overflow-hidden transition-transform ${open ? "rotate-180" : ""}`}>
          <svg className="absolute block size-full" fill="none" viewBox="0 0 10.5416 6.24659">
            <path d={svgChevronDown} fill="black" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="absolute z-50 top-[54px] left-0 w-full bg-white border border-black rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.15)] overflow-hidden">
          {PROVINCES.map((province) => (
            <button
              key={province}
              type="button"
              onClick={() => { onChange(province); setOpen(false); }}
              className={`w-full text-left px-4 py-3 text-base transition-colors cursor-pointer border-b border-black/10 last:border-b-0
                ${value === province
                  ? "bg-[#fb7104]/10 text-[#fb7104] font-semibold"
                  : "text-black hover:bg-gray-50"
                }`}
            >
              {province}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Collapsible Filter Row ───────────────────────────────────────────────────
interface FilterRowProps {
  label: string;
  defaultOpen?: boolean;
  subOptions?: string[];
}

function FilterRow({ label, defaultOpen = false, subOptions }: FilterRowProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggleCheck = (option: string) => {
    setChecked((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between w-full cursor-pointer py-2"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-black text-base">▽ {label}</span>
        <div className={`w-5 h-5 relative overflow-hidden transition-transform ${open ? "" : "rotate-180"}`}>
          <svg className="absolute block size-full" fill="none" viewBox="0 0 10.5175 6.24659">
            <path d={svgChevronUp} fill="black" />
          </svg>
        </div>
      </div>

      {open && subOptions && subOptions.length > 0 && (
        <div className="flex flex-col gap-2 pb-3 pl-1">
          {subOptions.map((option) => (
            <label
              key={option}
              className="flex items-start gap-3 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => toggleCheck(option)}
                className={`shrink-0 mt-0.5 w-5 h-5 border border-black shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer relative transition-colors ${
                  checked[option] ? "bg-[#b1b1b1]" : "bg-white"
                }`}
              >
                {checked[option] && (
                  <svg className="absolute inset-0 w-full h-full p-[3px]" viewBox="0 0 14.0539 10.2216" fill="none">
                    <path d="M13.7319 0.295798C13.639 0.20207 13.5284 0.127675 13.4065 0.0769067C13.2846 0.026138 13.1539 0 13.0219 0C12.8899 0 12.7592 0.026138 12.6373 0.0769067C12.5155 0.127675 12.4049 0.20207 12.3119 0.295798L4.86192 7.7558L1.73192 4.6158C1.6354 4.52256 1.52146 4.44925 1.3966 4.40004C1.27175 4.35084 1.13843 4.32671 1.00424 4.32903C0.870064 4.33135 0.737655 4.36008 0.614576 4.41357C0.491498 4.46706 0.380161 4.54428 0.286922 4.6408C0.193684 4.73732 0.12037 4.85126 0.0711659 4.97612C0.0219619 5.10097 -0.00216855 5.2343 0.000152918 5.36848C0.00247438 5.50266 0.0312022 5.63507 0.0846957 5.75814C0.138189 5.88122 0.215401 5.99256 0.311922 6.0858L4.15192 9.9258C4.24489 10.0195 4.35549 10.0939 4.47735 10.1447C4.59921 10.1955 4.72991 10.2216 4.86192 10.2216C4.99393 10.2216 5.12464 10.1955 5.2465 10.1447C5.36836 10.0939 5.47896 10.0195 5.57192 9.9258L13.7319 1.7658C13.8334 1.67216 13.9144 1.5585 13.9698 1.432C14.0252 1.30551 14.0539 1.1689 14.0539 1.0308C14.0539 0.892697 14.0252 0.756092 13.9698 0.629592C13.8334 0.503092 13.7319 0.389441 13.6319 0.295798Z" fill="black" />
                  </svg>
                )}
              </button>
              <span className="text-black text-base">{option}</span>
            </label>
          ))}
        </div>
      )}

      <div className="w-full h-px bg-black" />
    </div>
  );
}

// ─── Collapsible Section ──────────────────────────────────────────────────────
interface CollapsibleSectionProps {
  label: string;
  children?: React.ReactNode;
}

function CollapsibleSection({ label, children }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between w-full cursor-pointer py-3"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-black text-lg">{label}</span>
        <div className={`w-5 h-5 relative overflow-hidden transition-transform ${open ? "" : "rotate-180"}`}>
          <svg className="absolute block size-full" fill="none" viewBox="0 0 10.5175 6.24659">
            <path d={svgChevronUp} fill="black" />
          </svg>
        </div>
      </div>
      <div className="w-full h-px bg-black" />
      {open && children && (
        <div className="pt-2 pb-3">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({
  selectedProvince,
  onProvinceChange,
}: {
  selectedProvince: string;
  onProvinceChange: (v: string) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <aside className="w-[280px] shrink-0 flex flex-col gap-4 pt-2">
      {/* Title */}
      <h2 className="font-semibold text-black text-3xl">BỘ LỌC</h2>

      {/* Khu vực */}
      <div className="flex flex-col gap-3">
        <span className="font-semibold text-black text-lg">Khu vực</span>
        <ProvinceDropdown value={selectedProvince} onChange={onProvinceChange} />
        <Dropdown label="Xã / Phường" />
      </div>

      <div className="w-full h-px bg-black" />

      {/* Loại hình */}
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-black text-lg mb-1">Loại hình</span>
        <FilterRow
          label="Không gian xây dựng"
          subOptions={[
            "Nhà ở (nhà phố, biệt thự, chung cư, tập thể cũ)",
            "Văn phòng / Tòa nhà",
            "Quán café / Nhà hàng / Bar",
            "Khách sạn / Resort",
            "Trường học",
            "Bệnh viện",
            "Nhà xưởng / Kho bãi",
            "Khu bỏ hoang",
          ]}
        />
        <FilterRow
          label="Cảnh quan & danh lam thắng cảnh"
          subOptions={[
            "Núi",
            "Biển",
            "Sông / Hồ",
            "Hang động",
            "Thác nước",
            "Rừng",
            "Ruộng bậc thang",
            "Đồi / Cao nguyên",
          ]}
        />
        <FilterRow
          label="Không gian công cộng"
          subOptions={[
            "Phố xá / Hẻm",
            "Quảng trường",
            "Công viên",
            "Phố đi bộ",
            "Chợ",
            "Bến tàu / Bến xe",
            "Cầu",
          ]}
        />
        <FilterRow
          label="Công trình - địa điểm nhà nước"
          subOptions={[
            "Di tích lịch sử",
            "Bảo tàng",
            "Đền / Chùa / Miếu",
            "Nhà hát",
            "Trường công",
            "Bệnh viện công",
            "Cơ quan hành chính",
          ]}
        />
        <FilterRow
          label="Studio & Không gian quay dựng"
          subOptions={[
            "Studio trong nhà",
            "Studio ngoài trời",
            "Phim trường",
            "Studio chụp ảnh",
            "Studio TV / Livestream",
            "Phòng Green Screen",
            "Phòng White Cyclorama",
            "Warehouse Studio",
          ]}
        />
        <FilterRow
          label="Phong cách chủ đạo"
          subOptions={[
            "Hoang sơ",
            "Hùng vĩ",
            "Thơ mộng",
            "Truyền thống",
            "Lịch sử",
            "Bao cấp",
            "Cổ điển",
            "Hiện đại",
            "Công nghiệp",
            "Nghệ thuật",
            "Đời thường",
            "Trang nghiêm",
          ]}
        />
      </div>

      {/* Tìm kiếm nâng cao */}
      <CollapsibleSection label="Tìm kiếm nâng cao">
        <div className="relative w-full">
          <div className="w-full h-[46px] border border-black/50 rounded-full flex items-center px-4 gap-2 bg-white">
            <svg className="shrink-0 w-5 h-5 opacity-50" fill="none" viewBox="0 0 18 18">
              <path d={svgSearch} fill="black" />
            </svg>
            <input
              type="text"
              placeholder="Nhập từ khóa tìm kiếm"
              className="flex-1 bg-transparent border-none outline-none text-base text-black/50"
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className={`
            flex-1 h-[38px] rounded-[10px] font-semibold text-base
            shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer
            transition-all duration-200
            ${isLoading
              ? "bg-[#c8c8c8] text-[#9e9e9e] cursor-not-allowed"
              : "bg-gradient-to-b from-[#ff8423] to-[#e46400] border border-[#fb7104] text-white hover:from-[#ffdd32] hover:to-[rgba(255,221,50,0.5)] hover:text-[#ba252e] hover:border-[#ffdd32]"
            }
          `}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4 shrink-0" viewBox="0 0 36.6667 36.6667" fill="none">
                <path d={svgSpinner} fill="#9e9e9e" />
              </svg>
              <span>Tìm kiếm</span>
            </span>
          ) : (
            "Tìm kiếm"
          )}
        </button>
        <button className="flex-1 h-[38px] bg-[#eaeaea] hover:bg-[#949494] rounded-xl font-semibold text-base text-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-colors duration-200">
          Đặt lại bộ lọc
        </button>
      </div>
    </aside>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center gap-8">
        {/* Logo */}
        <div className="shrink-0 h-[60px] w-[180px] relative">
          <img
            src={imgLogo}
            alt="Vietnam Film Production"
            className="absolute inset-0 w-full h-full object-contain object-left pointer-events-none"
          />
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-[580px] relative">
          <div className="w-full h-[52px] bg-[#ffac59]/50 rounded-full flex items-center px-5 gap-3">
            <svg className="shrink-0 w-5 h-5" fill="none" viewBox="0 0 18 18">
              <path d={svgSearch} fill="#49454F" />
            </svg>
            <input
              type="text"
              placeholder=""
              className="flex-1 bg-transparent border-none outline-none text-base text-gray-700"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-6 shrink-0">
          <span className="font-bold text-black text-lg">EN/VI</span>
          <span className="text-black text-lg cursor-pointer">Login</span>
          <div className="w-[50px] h-[50px] relative rounded-full overflow-hidden">
            <img
              src={imgUserAvatar}
              alt="User"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Nav links */}
      <nav className="max-w-[1440px] mx-auto px-8 pb-3 flex gap-12">
        {["Trang chủ", "Địa điểm", "Thủ tục/ Giấy phép", "Hỗ trợ thực địa", "Tin tức", "Tài chính"].map((item) => (
          <a
            key={item}
            href="#"
            className="font-extrabold text-[#fb7104] text-lg whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const defaultLocations = [
  { id: 1, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgLocationDefault },
  { id: 2, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgLocationDefault },
  { id: 3, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgLocationDefault },
  { id: 4, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgLocationDefault },
  { id: 5, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgLocationDefault },
  { id: 6, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgLocationDefault },
];

const hanoiLocations = [
  { id: 1, title: "Hồ Hoàn Kiếm",           location: "Hàng Trống, Hoàn Kiếm, Hà Nội",               verified: true, image: imgHoHoanKiem },
  { id: 2, title: "Văn Miếu Quốc Tử Giám",  location: "58 Quốc Tử Giám, Văn Miếu, Đống Đa, Hà Nội", verified: true, image: imgVanMieu },
  { id: 3, title: "Lăng Chủ tịch Hồ Chí Minh", location: "Số 2 Hùng Vương, Hà Nội",                  verified: true, image: imgLangHCM },
  { id: 4, title: "Hoàng thành Thăng Long",  location: "Số 19C Hoàng Diệu, Hà Nội",                   verified: true, image: imgHoangThanhThangLong },
  { id: 5, title: "Nhà thờ Lớn Hà Nội",     location: "Số 40 Nhà Chung, Hoàn Kiếm, Hà Nội",          verified: true, image: imgNhaThoLon },
  { id: 6, title: "Chùa Thầy",              location: "Xã Quốc Oai, Hà Nội",                          verified: true, image: imgChuaThay },
];

// ─── Province Panel ───────────────────────────────────────────────────────────
function ProvincePanel({ province }: { province: string }) {
  const provinceData: Record<string, { title: string; description: string }> = {
    "Hà Nội": {
      title: "Thành phố Hà Nội",
      description:
        "Hà Nội, thủ đô hơn 1000 năm văn hiến của Việt Nam, là trung tâm chính trị, văn hóa và kinh tế quan trọng bậc nhất. Nằm ở trung tâm đồng bằng sông Hồng, thành phố nổi tiếng với kiến trúc cổ kính, văn hóa lâu đời, ẩm thực tinh tế và là điểm đến du lịch đặc sắc, kết hợp hài hòa giữa nét cổ điển và hiện đại.",
    },
  };

  const data = provinceData[province] ?? {
    title: `Tỉnh / Thành phố ${province}`,
    description: `${province} là một trong những điểm đến hấp dẫn tại Việt Nam với nhiều địa điểm quay phim độc đáo, cảnh quan đa dạng và cơ sở hạ tầng phục vụ sản xuất phim ngày càng phát triển.`,
  };

  return (
    <div className="w-full mb-2">
      <p className="text-black/50 text-2xl mb-3">{data.title}</p>

      <div className="flex gap-6 items-start">
        <p className="flex-1 text-black text-sm leading-relaxed">{data.description}</p>

        {/* PAI Chart */}
        <div className="shrink-0 flex flex-col items-center gap-1">
          <div className="relative w-[180px] h-[160px]">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-black/50 text-[10px] text-center whitespace-nowrap">Hỗ trợ tài chính</span>
            <span className="absolute top-[36px] right-0 text-black/50 text-[10px] whitespace-nowrap">Hỗ trợ thông tin</span>
            <span className="absolute bottom-[28px] left-0 text-black/50 text-[10px] whitespace-nowrap">Hạ tầng sẵn có</span>
            <span className="absolute bottom-0 left-[22px] text-black/50 text-[10px] whitespace-nowrap">Hỗ trợ thủ tục pháp lý</span>
            <span className="absolute bottom-0 right-0 text-black/50 text-[10px] whitespace-nowrap">Hỗ trợ tại thực địa</span>
            <img
              src={imgPAIChart}
              alt="PAI Chart"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] object-contain"
            />
          </div>
          <p className="text-[#fb7104] text-xs font-bold text-center">Chỉ số thu hút đoàn làm phim (PAI)</p>
        </div>
      </div>

      <div className="w-full h-px bg-black/10 mt-4" />
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [selectedProvince, setSelectedProvince] = useState("");

  const activeLocations = selectedProvince === "Hà Nội" ? hanoiLocations : defaultLocations;
  const resultCount = selectedProvince === "Hà Nội" ? "6" : "1,245";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-8 py-8 flex gap-10">
        <Sidebar selectedProvince={selectedProvince} onProvinceChange={setSelectedProvince} />

        {/* Content */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-black text-xl">
            <span className="font-semibold text-2xl">{resultCount}</span>{" "}
            <span>địa điểm quay phim đã được tìm thấy</span>
          </p>

          {selectedProvince && <ProvincePanel province={selectedProvince} />}

          <div className="grid grid-cols-2 gap-5">
            {activeLocations.map((loc) => (
              <LocationCard
                key={loc.id}
                title={loc.title}
                location={loc.location}
                verified={loc.verified}
                image={loc.image}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
