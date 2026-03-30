import { useState, useRef, useEffect } from "react";

// chevron-down path (from svg-8f3h7d1bje / svg-udzgr4kd6w)
const CHEVRON_DOWN =
  "M10.2458 0.290792C10.0584 0.104542 9.80498 0 9.5408 0C9.27661 0 9.02316 0.104542 8.8358 0.290792L5.2458 3.83079L1.7058 0.290792C1.51844 0.104542 1.26498 0 1.0008 0C0.736612 0 0.483161 0.104542 0.295798 0.290792C0.20207 0.383755 0.127675 0.494356 0.0769067 0.616216C0.026138 0.738075 0 0.868781 0 1.00079C0 1.1328 0.026138 1.26351 0.0769067 1.38537C0.127675 1.50723 0.20207 1.61783 0.295798 1.71079L4.5358 5.95079C4.62876 6.04452 4.73936 6.11891 4.86122 6.16968C4.98308 6.22045 5.11379 6.24659 5.2458 6.24659C5.37781 6.24659 5.50852 6.22045 5.63037 6.16968C5.75223 6.11891 5.86284 6.04452 5.9558 5.95079L10.2458 1.71079C10.3395 1.61783 10.4139 1.50723 10.4647 1.38537C10.5155 1.26351 10.5416 1.1328 10.5416 1.00079C10.5416 0.868781 10.5155 0.738075 10.4647 0.616216C10.4139 0.494356 10.3395 0.383755 10.2458 0.290792Z";

export const PROVINCES = [
  "Tỉnh Thái Nguyên",
  "TP Hà Nội",
  "TP Hồ Chí Minh",
  "Tỉnh Quảng Ninh",
  "Tỉnh Tuyên Quang",
  "Tỉnh Cao Bằng",
  "Tỉnh Lai Châu",
  "Tỉnh Lào Cai",
  "Tỉnh Điện Biên",
  "Tỉnh Lạng Sơn",
  "Tỉnh Sơn La",
  "Tỉnh Phú Thọ",
  "Tỉnh Bắc Ninh",
  "TP. Hải Phòng",
  "Tỉnh Hưng Yên",
  "Tỉnh Ninh Bình",
  "Tỉnh Thanh Hóa",
  "Tỉnh Nghệ An",
  "Tỉnh Hà Tĩnh",
  "Tỉnh Quảng Trị",
  "TP Huế",
  "TP Đà Nẵng",
  "Tỉnh Quảng Ngãi",
  "Tỉnh Gia Lai",
  "Tỉnh Đắk Lắk",
  "Tỉnh Lâm Đồng",
  "Tỉnh Đồng Nai",
  "Tỉnh Tây Ninh",
  "Tỉnh Đồng Tháp",
  "Tỉnh An Giang",
  "Tỉnh Vĩnh Long",
  "TP Cần Thơ",
  "Tỉnh Cà Mau",
];

interface ProvinceDropdownProps {
  value?: string | null;
  onChange?: (province: string | null) => void;
  /** Width applied to both trigger and dropdown list. Default: "100%" */
  width?: string | number;
}

export function ProvinceDropdown({ value, onChange, width }: ProvinceDropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(value ?? null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Sync external value
  useEffect(() => {
    if (value !== undefined) setSelected(value ?? null);
  }, [value]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function onOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  function handleSelect(province: string) {
    const next = selected === province ? null : province;
    setSelected(next);
    onChange?.(next);
    setOpen(false);
  }

  return (
    <div
      ref={wrapRef}
      className="relative"
      style={{ width: width ?? "100%" }}
    >
      {/* ── Trigger button ── */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full h-12 flex items-center justify-center gap-2.5 px-3 rounded-xl cursor-pointer transition-opacity hover:opacity-90"
        style={{ background: "rgba(253,170,104,0.5)" }}
      >
        <span className="font-semibold text-lg text-white whitespace-nowrap leading-snug flex-1 text-center">
          {selected ?? "Tỉnh / Thành"}
        </span>
        <svg
          className={`w-[18px] h-[11px] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 10.5416 6.24659"
        >
          <path d={CHEVRON_DOWN} fill="#414853" />
        </svg>
      </button>

      {/* ── Dropdown list ── */}
      {open && (
        <div
          className="absolute left-0 top-full z-50 w-full bg-white shadow-lg rounded-b-xl overflow-hidden"
          style={{ maxHeight: "192px", overflowY: "auto" }}
        >
          {PROVINCES.map((province) => {
            const isSelected = selected === province;
            return (
              <button
                key={province}
                type="button"
                onClick={() => handleSelect(province)}
                className={`w-full h-12 flex items-center px-3 text-left transition-colors border-b border-gray-50 last:border-b-0 cursor-pointer
                  ${isSelected
                    ? "bg-[rgba(251,113,4,0.15)] text-[#fb7104]"
                    : "bg-white text-black hover:bg-[rgba(251,113,4,0.07)] hover:text-[#fb7104]"
                  }`}
              >
                <span className="font-semibold text-[18px] leading-snug whitespace-nowrap">
                  {province}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
