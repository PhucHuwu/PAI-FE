"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import svgPaths from "@/imports/svg-12aspj3ovn";
const imgImage57 = "/assets/mainpic.jpeg";
const imgRectangle251 = "/assets/mainpic.jpeg";
const imgRectangle267 = "/assets/mainpic.jpeg";
const imgRectangle252 = "/assets/mainpic.jpeg";
const imgRectangle253 = "/assets/mainpic.jpeg";
const imgRectangle254 = "/assets/mainpic.jpeg";
const imgRectangle255 = "/assets/mainpic.jpeg";

// ─── Info Cards ───────────────────────────────────────────────────────────────
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  titleLine2?: string;
  content: string;
  contentLine2?: string;
}

function InfoCard({ icon, title, titleLine2, content, contentLine2 }: InfoCardProps) {
  return (
    <div className="bg-white rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[271px] h-[303px] flex flex-col items-center justify-start overflow-hidden shrink-0">
      {/* Icon */}
      <div className="mt-6 size-[63px] flex items-center justify-center shrink-0">
        {icon}
      </div>
      {/* Title */}
      <div className="mt-4 text-center px-4">
        <p className="font-semibold text-[24px] text-black leading-[1.5]">{title}</p>
        {titleLine2 && <p className="font-semibold text-[24px] text-black leading-[1.5]">{titleLine2}</p>}
      </div>
      {/* Content */}
      <div className="mt-3 text-center px-4">
        <p className="font-medium text-[20px] text-black leading-[1.5]">{content}</p>
        {contentLine2 && <p className="font-medium text-[20px] text-black leading-[1.5]">{contentLine2}</p>}
      </div>
    </div>
  );
}

// ─── Video Player (still) ────────────────────────────────────────────────────
function VideoCard() {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      className="relative rounded-[12px] overflow-hidden shrink-0 cursor-pointer"
      style={{ width: 542, height: 305 }}
      onClick={() => setPlaying((p) => !p)}
    >
      <img src={imgRectangle251} alt="Cảnh phim" className="absolute inset-0 w-full h-full object-cover" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-[12px]" />
      {/* Play button */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-[82px] rounded-full bg-[#A8A8A8]/80 flex items-center justify-center">
            {/* Triangle rotated 90deg */}
            <svg viewBox="0 0 37.67 32.62" className="w-[37px] ml-2" fill="white">
              <path d={svgPaths.p39b8800} fill="white" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Compare Slider ──────────────────────────────────────────────────────────
function CompareSlider() {
  const [pos, setPos] = useState(50); // percent

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  return (
    <div
      className="relative rounded-[12px] overflow-hidden shrink-0 select-none cursor-col-resize"
      style={{ width: 542, height: 305 }}
      onMouseMove={(e) => { if (e.buttons === 1) handleMove(e); }}
      onClick={handleMove}
    >
      {/* Base image (right — real life) */}
      <img src={imgRectangle267} alt="Thực tế" className="absolute inset-0 w-full h-full object-cover" />
      {/* Overlay image (left — film scene) clipped */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={imgRectangle251} alt="Cảnh phim" className="absolute inset-0 h-full object-cover" style={{ width: 542 }} />
      </div>
      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[4px] bg-[#DD7128] shadow-lg"
        style={{ left: `calc(${pos}% - 2px)` }}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 size-[46px] rounded-full bg-[#DD7128] flex items-center justify-center shadow-md">
          <svg viewBox="0 0 46.685 309.936" className="hidden" />
          {/* Left/Right arrows */}
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 16 16" className="size-4" fill="none">
              <path d={svgPaths.p2728be80} stroke="white" strokeLinecap="round" strokeWidth="2.5" />
            </svg>
            <svg viewBox="0 0 16 16" className="size-4" fill="none">
              <path d={svgPaths.p13513a80} stroke="white" strokeLinecap="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Film Detail Page ─────────────────────────────────────────────────────────
export default function FilmDetailPage() {
  const router = useRouter();

  const infoCards: InfoCardProps[] = [
    {
      icon: (
        <svg viewBox="0 0 52.5 57.75" className="w-[52px] h-[58px]" fill="none">
          <path d={svgPaths.p2fd40900} fill="#DD7128" />
        </svg>
      ),
      title: "THỜI ĐIỂM QUAY",
      content: "Tháng 10 - Tháng 12",
      contentLine2: "(Mùa khô, bèo xanh, lúa vàng)",
    },
    {
      icon: (
        <svg viewBox="0 0 57.5 57.5" className="w-[58px] h-[58px]" fill="none">
          <path d={svgPaths.p4da5c80} fill="#DD7128" />
        </svg>
      ),
      title: "THỜI GIAN",
      titleLine2: "THỰC HIỆN",
      content: "14 ngày",
      contentLine2: "(8 ngày quay chính tại bối cảnh)",
    },
    {
      icon: (
        <svg viewBox="0 0 44.9062 56.1328" className="w-[45px] h-[56px]" fill="none">
          <path d={svgPaths.p930500} fill="#DD7128" />
        </svg>
      ),
      title: "GHI CHÚ",
      titleLine2: "ĐOÀN PHIM",
      content: '"Địa hình hiểm trở, khó di chuyển khi đi đoàn nhiều xe lớn"',
    },
    {
      icon: (
        <svg viewBox="0 0 59.1518 47.3333" className="w-[59px] h-[47px]" fill="none">
          <path d={svgPaths.p3e7eed00} fill="#DD7128" />
        </svg>
      ),
      title: "GÓC NẮNG",
      titleLine2: "LÝ TƯỞNG",
      content: "16:00 - 18:00",
      contentLine2: "(Nắng chiều vàng lung linh màu nhiệm)",
    },
  ];

  const scenePhotos = [imgRectangle252, imgRectangle253, imgRectangle254, imgRectangle255];

  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-[1440px] mx-auto px-[122px] pb-16">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="mt-6 mb-2 flex items-center gap-2 text-[#fb7104] hover:opacity-75 transition-opacity"
        >
          <svg viewBox="0 0 20 20" className="size-5 rotate-180" fill="none">
            <path d="M4 10h12M10 4l6 6-6 6" stroke="#fb7104" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Quay lại
        </button>

        {/* Page Title */}
        <h1 className="font-bold text-[40px] text-black text-center leading-[1.5] mt-4 mb-8">
          THÔNG TIN BỐI CẢNH PHIM
        </h1>

        {/* ── THÔNG TIN DỰ ÁN ───────────────────────────────────── */}
        <h2 className="font-bold text-[40px] text-black leading-[1.5] mb-6">
          THÔNG TIN DỰ ÁN: "PHÒNG TRỌ MA BẦU"
        </h2>

        <div className="flex gap-8 items-start mb-12">
          {/* Poster */}
          <div className="shrink-0 w-[434px] h-[550px] overflow-hidden">
            <img src={imgImage57} alt="Phòng trọ Ma Bầu" className="w-full h-full object-cover" />
          </div>

          {/* Info box */}
          <div className="flex-1 border border-[#bababa] rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-8 h-[550px] flex flex-col justify-center gap-5">
            <p className="font-bold text-[32px] text-black leading-[1.5]">THÔNG TIN DỰ ÁN</p>
            <div className="space-y-4 text-[32px]">
              <p className="text-black leading-[1.5]">
                Tên phim: <span className="text-[#ffac59]">Phòng trọ Ma Bầu</span>
              </p>
              <p className="text-black leading-[1.5]">
                Thể loại: <span className="text-[#ffac59]">Phim kinh dị</span>
              </p>
              <p className="text-black leading-[1.5]">
                Đạo diễn: <span className="text-[#ffac59]">Huỳnh Phương</span>
              </p>
              <p className="text-black leading-[1.5]">
                DOP : <span className="text-[#ffac59]">Phương Lan</span>
              </p>
              <p className="text-black leading-[1.5]">
                Năm sản xuất: <span className="text-[#ffac59]">2025</span>
              </p>
              <p className="text-black leading-[1.5]">
                Sản xuất: <span className="text-[#ffac59]">24HSTUDIO</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── BỐI CẢNH LÊN PHIM ─────────────────────────────────── */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-2">
            <h2 className="font-bold text-[40px] text-black leading-[1.5]">BỐI CẢNH LÊN PHIM</h2>
            <span className="text-[16px] text-black opacity-50">Bốiu</span>
          </div>
          <div className="flex gap-10 mb-2">
            <p className="font-bold text-[32px] text-black leading-[1.5] w-[542px]">CẢNH PHIM</p>
            <p className="font-bold text-[32px] text-black leading-[1.5]">CẢNH TRÊN PHIM &amp; THỰC TẾ</p>
          </div>
          <div className="flex gap-7">
            <VideoCard />
            <CompareSlider />
          </div>
        </div>

        {/* ── CÁC CẢNH TRONG PHIM ───────────────────────────────── */}
        <div className="mt-12 mb-10">
          <h2 className="font-bold text-[32px] text-black text-center leading-[1.5] mb-6">
            CÁC CẢNH TRONG PHIM
          </h2>
          <div className="flex gap-[10px]">
            {scenePhotos.map((src, i) => (
              <div key={i} className="flex-1 h-[162px] rounded-[12px] overflow-hidden">
                <img src={src} alt={`Cảnh ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* ── NỘI DUNG KỸ THUẬT ─────────────────────────────────── */}
        <div className="mt-12">
          <h2 className="font-bold text-[32px] text-black text-center leading-[1.5] mb-8">
            NỘI DUNG KỸ THUẬT
          </h2>
          <div className="flex gap-[25px] justify-center flex-wrap">
            {infoCards.map((card, i) => (
              <InfoCard key={i} {...card} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
