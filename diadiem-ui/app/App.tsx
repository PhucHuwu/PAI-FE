import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-wpm40hznwg";
import imgImage5 from "figma:asset/0158398dce39f3540d812ef24aa06f7b6e273c4a.png";
import imgImage72 from "figma:asset/87f115d3a906d6e3c91d9fe61b5114c37f9d6d3c.png";
import imgRectangle241 from "figma:asset/e1f7721aae66257262042cf2408fedab3c772654.png";
// ─── Hà Nội location images ───────────────────────────────────────────────────
import imgChuaThay from "figma:asset/b2d0be26f996232e8cecfba4308618aa63de0093.png";
import imgHoangThanh from "figma:asset/a7c888230caac7398f7e1a959f694d922321a2f6.png";
import imgVanMieu from "figma:asset/7e629568b3ccf670656d1468eba0312a88878f39.png";
import imgNhaThoLon from "figma:asset/0b5d633a16399729ace02dad63c1d35085f3702d.png";
import imgLangHCM from "figma:asset/b2554e35cfea31efd180b933bbd6d04e15ca66c6.png";
import imgHoHoanKiem from "figma:asset/efe8146cd5363b0298df13077a3a5b75d5192d90.png";
import imgPAIChart from "figma:asset/d009992d84f12d231b42afba6b5688b9baf0cfd7.png";

// ─── Loading Spinner SVG path ─────────────────────────────────────────────────
const spinnerPath = "M8.8077 23.8333C8.68743 23.6247 8.5272 23.4418 8.3362 23.2951C8.14519 23.1484 7.92714 23.0408 7.69452 22.9785C7.46189 22.9161 7.21926 22.9002 6.9805 22.9317C6.74173 22.9632 6.51151 23.0414 6.303 23.1619L3.1269 24.9953C2.70598 25.2385 2.3989 25.639 2.27315 26.1086C2.1474 26.5782 2.21329 27.0785 2.45632 27.4995C2.69936 27.9206 3.09964 28.2279 3.56918 28.3538C4.03872 28.4798 4.53907 28.4142 4.96023 28.1714L8.13633 26.3381C8.5573 26.0947 8.86446 25.6943 8.99034 25.2246C9.11623 24.755 9.05053 24.2546 8.8077 23.8333ZM3.12688 11.6714L6.30298 13.5047C6.51153 13.6252 6.74179 13.7035 6.98059 13.735C7.2194 13.7665 7.46207 13.7507 7.69475 13.6884C7.92743 13.6261 8.14555 13.5185 8.33665 13.3719C8.52775 13.2253 8.68809 13.0424 8.80851 12.8338C8.92893 12.6252 9.00707 12.3949 9.03845 12.1561C9.06984 11.9173 9.05387 11.6746 8.99144 11.4419C8.92902 11.2093 8.82137 10.9912 8.67464 10.8002C8.52792 10.6092 8.34499 10.4489 8.13632 10.3286L4.96021 8.49528C4.53905 8.25246 4.0387 8.18683 3.56916 8.31282C3.09963 8.43881 2.69934 8.7461 2.45631 9.16714C2.21327 9.58817 2.14739 10.0885 2.27313 10.5581C2.39888 11.0277 2.70597 11.4281 3.12688 11.6714ZM7.33333 18.3333C7.33333 17.8471 7.14018 17.3808 6.79636 17.037C6.45255 16.6932 5.98623 16.5 5.5 16.5H1.83333C1.3471 16.5 0.880788 16.6932 0.536971 17.037C0.193154 17.3808 0 17.8471 0 18.3333C0 18.8196 0.193154 19.2859 0.536971 19.6297C0.880788 19.9735 1.3471 20.1667 1.83333 20.1667H5.5C5.98623 20.1667 6.45255 19.9735 6.79636 19.6297C7.14018 19.2859 7.33333 18.8196 7.33333 18.3333ZM27.859 12.8333C28.1022 13.2543 28.5027 13.5616 28.9724 13.6874C29.442 13.8133 29.9425 13.7476 30.3637 13.5047L33.5398 11.6714C33.7485 11.5511 33.9314 11.3908 34.0781 11.1998C34.2248 11.0088 34.3325 10.7907 34.3949 10.5581C34.4573 10.3254 34.4733 10.0827 34.4419 9.84393C34.4105 9.60511 34.3324 9.37481 34.212 9.1662C34.0916 8.95758 33.9312 8.77474 33.7401 8.62811C33.549 8.48148 33.3309 8.37394 33.0982 8.31164C32.8655 8.24934 32.6229 8.23348 32.3841 8.26499C32.1453 8.2965 31.915 8.37476 31.7065 8.49528L28.5304 10.3286C28.1094 10.5719 27.8022 10.9724 27.6763 11.442C27.5504 11.9117 27.6161 12.4121 27.859 12.8333V12.8333ZM23.8333 8.8077C24.2546 9.0506 24.755 9.11633 25.2246 8.99044C25.6943 8.86455 26.0948 8.55734 26.3381 8.13633L28.1714 4.96023C28.2919 4.75168 28.3702 4.52142 28.4017 4.28262C28.4332 4.04381 28.4173 3.80114 28.355 3.56846C28.2927 3.33579 28.1852 3.11767 28.0386 2.92656C27.8919 2.73546 27.7091 2.57512 27.5005 2.4547C27.2919 2.33428 27.0616 2.25615 26.8227 2.22476C26.5839 2.19337 26.3413 2.20935 26.1086 2.27177C25.876 2.33419 25.6579 2.44184 25.4669 2.58857C25.2758 2.73529 25.1156 2.91822 24.9953 3.1269L23.1619 6.303C22.9191 6.72424 22.8534 7.22465 22.9793 7.69429C23.1052 8.16392 23.4124 8.56439 23.8333 8.8077V8.8077ZM33.5398 24.9953L30.3637 23.1619C30.1551 23.0414 29.9249 22.9632 29.6861 22.9317C29.4473 22.9002 29.2046 22.916 28.9719 22.9783C28.7392 23.0406 28.5211 23.1482 28.33 23.2948C28.1389 23.4414 27.9786 23.6243 27.8582 23.8329C27.7377 24.0415 27.6596 24.2718 27.6282 24.5106C27.5968 24.7494 27.6128 24.9921 27.6752 25.2247C27.7376 25.4574 27.8453 25.6754 27.992 25.8665C28.1388 26.0575 28.3217 26.2177 28.5304 26.3381L31.7065 28.1714C32.1276 28.4142 32.628 28.4798 33.0975 28.3538C33.567 28.2279 33.9673 27.9206 34.2104 27.4995C34.4534 27.0785 34.5193 26.5782 34.3935 26.1086C34.2678 25.639 33.9607 25.2385 33.5398 24.9953V24.9953ZM26.3381 28.5303C26.2177 28.3217 26.0575 28.1387 25.8665 27.992C25.6754 27.8453 25.4574 27.7376 25.2247 27.6752C24.9921 27.6128 24.7494 27.5968 24.5106 27.6282C24.2718 27.6596 24.0415 27.7377 23.8329 27.8581C23.6243 27.9786 23.4414 28.1389 23.2948 28.33C23.1482 28.5211 23.0406 28.7392 22.9783 28.9719C22.916 29.2046 22.9002 29.4472 22.9317 29.6861C22.9632 29.9249 23.0414 30.1551 23.1619 30.3637L24.9953 33.5398C25.1156 33.7484 25.2758 33.9314 25.4669 34.0781C25.6579 34.2248 25.876 34.3325 26.1086 34.3949C26.3413 34.4573 26.5839 34.4733 26.8227 34.4419C27.0616 34.4105 27.2919 34.3324 27.5005 34.212C27.7091 34.0916 27.8919 33.9312 28.0386 33.7401C28.1852 33.549 28.2927 33.3309 28.355 33.0982C28.4173 32.8655 28.4332 32.6229 28.4017 32.384C28.3702 32.1452 28.2919 31.915 28.1714 31.7064L26.3381 28.5303ZM34.8333 16.5H31.1667C30.6804 16.5 30.2141 16.6932 29.8703 17.037C29.5265 17.3808 29.3333 17.8471 29.3333 18.3333C29.3333 18.8196 29.5265 19.2859 29.8703 19.6297C30.2141 19.9735 30.6804 20.1667 31.1667 20.1667H34.8333C35.3196 20.1667 35.7859 19.9735 36.1297 19.6297C36.4735 19.2859 36.6667 18.8196 36.6667 18.3333C36.6667 17.8471 36.4735 17.3808 36.1297 17.037C35.7859 16.6932 35.3196 16.5 34.8333 16.5ZM18.3333 29.3333C17.8471 29.3333 17.3808 29.5265 17.037 29.8703C16.6932 30.2141 16.5 30.6804 16.5 31.1667V34.8333C16.5 35.3196 16.6932 35.7859 17.037 36.1297C17.3808 36.4735 17.8471 36.6667 18.3333 36.6667C18.8196 36.6667 19.2859 36.4735 19.6297 36.1297C19.9735 35.7859 20.1667 35.3196 20.1667 34.8333V31.1667C20.1667 30.6804 19.9735 30.2141 19.6297 29.8703C19.2859 29.5265 18.8196 29.3333 18.3333 29.3333ZM12.8333 27.859C12.6248 27.7384 12.3946 27.6602 12.1558 27.6287C11.9171 27.5972 11.6744 27.6131 11.4418 27.6755C11.2092 27.7378 10.9911 27.8454 10.8001 27.9921C10.6091 28.1388 10.4489 28.3217 10.3286 28.5304L8.49528 31.7065C8.25246 32.1276 8.18683 32.628 8.31282 33.0975C8.43881 33.567 8.7461 33.9673 9.16714 34.2104C9.58817 34.4534 10.0885 34.5193 10.5581 34.3935C11.0277 34.2678 11.4281 33.9607 11.6714 33.5398L13.5047 30.3637C13.7476 29.9424 13.8132 29.442 13.6874 28.9724C13.5615 28.5027 13.2543 28.1023 12.8333 27.859V27.859ZM18.3333 0C17.8471 0 17.3808 0.193154 17.037 0.536971C16.6932 0.880788 16.5 1.3471 16.5 1.83333V5.5C16.5 5.98623 16.6932 6.45255 17.037 6.79636C17.3808 7.14018 17.8471 7.33333 18.3333 7.33333C18.8196 7.33333 19.2859 7.14018 19.6297 6.79636C19.9735 6.45255 20.1667 5.98623 20.1667 5.5V1.83333C20.1667 1.3471 19.9735 0.880788 19.6297 0.536971C19.2859 0.193154 18.8196 0 18.3333 0V0Z";

// ─── Verified Badge ──────────────────────────────────────────────────────────
function VerifiedBadge() {
  return (
    <div className="flex items-center gap-1.5 bg-[#e4e8e0] rounded-xl px-2.5 py-1 w-fit">
      <div className="relative shrink-0" style={{ width: 18, height: 18 }}>
        <svg className="absolute block size-full" fill="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="#4D9271" r="9" />
        </svg>
        <div className="absolute" style={{ inset: "28.81% 20.7% 28.6% 20.74%" }}>
          <svg className="absolute block size-full" fill="none" viewBox="0 0 11.7115 8.518">
            <path d={svgPaths.p1f85000} fill="white" />
          </svg>
        </div>
      </div>
      <span className="text-[#4d9271] text-sm font-medium">Verified</span>
    </div>
  );
}

// ─── Location Card ───────────────────────────────────────────────────────────
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
            <svg
              width="28"
              height="26"
              viewBox="0 0 33.3498 30.7748"
              fill="none"
            >
              {liked ? (
                <path d="M30.2867 3.08179C28.5172 1.3118 26.1712 0.235663 23.6754 0.0490879C21.1795 -0.137487 18.6996 0.577889 16.6867 2.06512C14.5661 0.487848 11.9266 -0.227362 9.29986 0.063515C6.67307 0.354392 4.25406 1.62975 2.52995 3.63276C0.805835 5.63577 -0.0953057 8.21765 0.00799234 10.8585C0.11129 13.4993 1.21135 16.0029 3.08666 17.8651L15.5033 30.2818C15.6583 30.438 15.8426 30.562 16.0457 30.6466C16.2488 30.7312 16.4666 30.7748 16.6867 30.7748C16.9067 30.7748 17.1245 30.7312 17.3276 30.6466C17.5307 30.562 17.7151 30.438 17.87 30.2818L30.2867 17.8651C31.2577 16.8947 32.0281 15.7424 32.5537 14.4741C33.0793 13.2058 33.3498 11.8463 33.3498 10.4735C33.3498 9.10057 33.0793 7.74114 32.5537 6.47284C32.0281 5.20455 31.2577 4.05225 30.2867 3.08179Z" fill="#BA252E" />
              ) : (
                <path d={svgPaths.p3962df00} fill="black" />
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

// ─── Dropdown ─────────────────────────────────────────────────────────────────
function Dropdown({ label }: { label: string }) {
  return (
    <div className="relative w-full border border-black rounded-xl h-[52px] flex items-center px-4 cursor-pointer bg-white">
      <span className="flex-1 text-black text-base font-medium">{label}</span>
      <div className="shrink-0 w-5 h-5 relative overflow-hidden">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 10.5416 6.24659">
          <path d={svgPaths.p3c3ab600} fill="black" />
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
            <path d={svgPaths.p3c3ab600} fill="black" />
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
            <path d={svgPaths.p2f532800} fill="black" />
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
            <path d={svgPaths.p2f532800} fill="black" />
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
function Sidebar({ selectedProvince, onProvinceChange }: { selectedProvince: string; onProvinceChange: (v: string) => void }) {
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
          label="không gian công cộng"
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
              <path d={svgPaths.p16b4a380} fill="black" />
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
            group flex-1 h-[38px] rounded-[10px] font-semibold text-base
            shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer
            relative overflow-hidden transition-all duration-200
            ${isLoading
              ? "bg-[#c8c8c8] text-[#9e9e9e] cursor-not-allowed"
              : "bg-gradient-to-b from-[#ff8423] to-[#e46400] border border-[#fb7104] text-white hover:from-[#ffdd32] hover:to-[rgba(255,221,50,0.5)] hover:text-[#ba252e] hover:border-[#ffdd32]"
            }
          `}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin w-4 h-4 shrink-0"
                viewBox="0 0 36.6667 36.6667"
                fill="none"
              >
                <path d={spinnerPath} fill="#9e9e9e" />
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
            src={imgImage72}
            alt="Vietnam Film Production"
            className="absolute inset-0 w-full h-full object-contain object-left pointer-events-none"
          />
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-[580px] relative">
          <div className="w-full h-[52px] bg-[#ffac59] bg-opacity-50 rounded-full flex items-center px-5 gap-3">
            <div className="shrink-0 w-5 h-5 relative overflow-hidden">
              <svg className="absolute block size-full" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p16b4a380} fill="#49454F" />
              </svg>
            </div>
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
              src={imgImage5}
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

// ─── Main Content ─────────────────────────────────────────────────────────────
const locations = [
  { id: 1, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgRectangle241 },
  { id: 2, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgRectangle241 },
  { id: 3, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgRectangle241 },
  { id: 4, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgRectangle241 },
  { id: 5, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgRectangle241 },
  { id: 6, title: "Hang Én", location: "Bố Trạch, Quảng Bình", verified: true, image: imgRectangle241 },
];

const hanoiLocations = [
  { id: 1, title: "Hồ Hoàn Kiếm", location: "Hàng Trống, Hoàn Kiếm, Hà Nội", verified: true, image: imgHoHoanKiem },
  { id: 2, title: "Văn Miếu Quốc Tử Giám", location: "58 Quốc Tử Giám, Văn Miếu, Đống Đa, Hà Nội", verified: true, image: imgVanMieu },
  { id: 3, title: "Lăng Chủ tịch Hồ Chí Minh", location: "Số 2 Hùng Vương, Hà Nội", verified: true, image: imgLangHCM },
  { id: 4, title: "Hoàng thành Thăng Long", location: "Số 19C Hoàng Diệu, Hà Nội", verified: true, image: imgHoangThanh },
  { id: 5, title: "Nhà thờ Lớn Hà Nội", location: "Số 40 Nhà Chung, Hoàn Kiếm, Hà Nội", verified: true, image: imgNhaThoLon },
  { id: 6, title: "Chùa Thầy", location: "Xã Quốc Oai, Hà Nội", verified: true, image: imgChuaThay },
];

// ─── Province Panel ────────────────────────────────────────────────────────────
function ProvincePanel({ province }: { province: string }) {
  const provinceData: Record<string, { title: string; description: string }> = {
    "Hà Nội": {
      title: "Thành phố Hà Nội",
      description: "Hà Nội, thủ đô hơn 1000 năm văn hiến của Việt Nam, là trung tâm chính trị, văn hóa và kinh tế quan trọng bậc nhất. Nằm ở trung tâm đồng bằng sông Hồng, thành phố nổi tiếng với kiến trúc cổ kính, văn hóa lâu đời, ẩm thực tinh tế và là điểm đến du lịch đặc sắc, kết hợp hài hòa giữa nét cổ điển và hiện đại.",
    },
  };

  const data = provinceData[province] ?? {
    title: `Tỉnh / Thành phố ${province}`,
    description: `${province} là một trong những điểm đến hấp dẫn tại Việt Nam với nhiều địa điểm quay phim độc đáo, cảnh quan đa dạng và cơ sở hạ tầng phục vụ sản xuất phim ngày càng phát triển.`,
  };

  return (
    <div className="w-full mb-2">
      {/* Title row */}
      <p className="text-black/50 text-2xl mb-3">{data.title}</p>

      {/* Info + chart row */}
      <div className="flex gap-6 items-start">
        {/* Description */}
        <p className="flex-1 text-black text-sm leading-relaxed">{data.description}</p>

        {/* PAI Chart */}
        <div className="shrink-0 flex flex-col items-center gap-1">
          <div className="relative w-[180px] h-[160px]">
            {/* Axis labels */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-black/50 text-[10px] text-center whitespace-nowrap">Hỗ trợ tài chính</span>
            <span className="absolute top-[36px] right-0 text-black/50 text-[10px] text-center whitespace-nowrap">Hỗ trợ thông tin</span>
            <span className="absolute bottom-[28px] left-0 text-black/50 text-[10px] whitespace-nowrap">Hạ tầng sẵn có</span>
            <span className="absolute bottom-0 left-[22px] text-black/50 text-[10px] whitespace-nowrap">Hỗ trợ thủ tục pháp lý</span>
            <span className="absolute bottom-0 right-0 text-black/50 text-[10px] whitespace-nowrap">Hỗ trợ tại thực địa</span>
            {/* Chart image centered */}
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

  const activeLocations = selectedProvince === "Hà Nội" ? hanoiLocations : locations;
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