"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { StarChart, type StarChartDataPoint } from "@/components/molecules/StarChart";
import svgPaths from "@/imports/svg-6kz2gzxz6l";
const imgRectangle235 = "/assets/mainpic.jpeg";
const imgImage50 = "/assets/mainpic.jpeg";
const imgImage51 = "/assets/mainpic.jpeg";
const imgImage52 = "/assets/mainpic.jpeg";
const imgScreenshot202603171837341 = "/assets/mainpic.jpeg";
const imgImage56 = "/assets/mainpic.jpeg";
const imgImage59 = "/assets/mainpic.jpeg";
const imgImage57 = "/assets/mainpic.jpeg";
const imgImage58 = "/assets/mainpic.jpeg";
const imgGroup481 = "/assets/mainpic.jpeg";
import { ImageViewer } from "@/features/dia-diem-detail/components/ImageViewer";

// ─── Hero Image ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <div className="w-full h-[420px] overflow-hidden relative">
      <img
        src={imgRectangle235}
        alt="Hang Én Hero"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

const paiChartData: StarChartDataPoint[] = [
  { criterion: "Hạ tầng sẵn có", value: 4, fullMark: 5 },
  { criterion: "Hỗ trợ tài chính", value: 3, fullMark: 5 },
  { criterion: "Hỗ trợ thông tin", value: 4, fullMark: 5 },
  { criterion: "Hỗ trợ tại thực địa", value: 5, fullMark: 5 },
  { criterion: "Hỗ trợ thủ tục pháp lý", value: 4, fullMark: 5 },
];

// ─── Quảng Trị Panel ────────────────────────────────────────────────────────
function QuangTriPanel() {
  return (
    <div className="rounded-[10px] overflow-hidden shadow-md flex flex-col h-full">
      <div className="bg-[#730007] h-[100px] flex items-center justify-center">
        <span className="text-white font-semibold text-2xl">Quảng Trị</span>
      </div>
      <div className="bg-white flex-1 flex items-center justify-center p-4">
        <div className="w-[240px] h-[240px]">
          <StarChart data={paiChartData} width={220} height={220} />
        </div>
      </div>
    </div>
  );
}

// ─── Gallery + Panel ────────────────────────────────────────────────────────
function GallerySection({ onImageClick }: { onImageClick: (index: number) => void }) {
  const photos = [imgImage50, imgImage51, imgImage52];
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-6">
      <div className="flex gap-4">
        <div className="flex gap-3 flex-1">
          {photos.map((src, i) => (
            <div
              key={i}
              className="flex-1 h-[160px] rounded-[10px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onImageClick(i)}
            >
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="w-[340px] shrink-0">
          <QuangTriPanel />
        </div>
      </div>

      <div className="mt-4">
        <a
          href="https://www.halomedia.vn/360tours/ninh-binh"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#ffac59] text-white font-semibold text-base px-6 py-3 rounded-[1000px] hover:opacity-90 transition-opacity"
        >
          <svg viewBox="0 0 25.0727 25.0032" className="size-5 shrink-0" fill="none">
            <path d={svgPaths.p2a913080} fill="white" />
          </svg>
          Xem VR 360°
        </a>
      </div>
    </div>
  );
}

// ─── Location Info ───────────────────────────────────────────────────────────
function LocationInfo() {
  return (
    <div className="flex-1 min-w-0">
      <h1 className="text-[36px] font-semibold text-black mb-1">Hang Én</h1>
      <p className="text-[18px] text-black mb-2">Sơn Trạch, Quảng Trị (Quảng Bình cũ)</p>
      <p className="text-[18px] text-black mb-1">Quy định:</p>
      <ul className="list-disc list-inside text-[18px] text-black space-y-1 mb-5">
        <li>Không làm tác động cảnh quan</li>
        <li>Không quay ngoài khung giờ cho phép</li>
        <li>Bảo vệ môi trường / động vật / di tích</li>
      </ul>
      <p className="text-[17px] text-black leading-[1.8]">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hang Én là một trong những hang động lớn và ấn tượng nhất thế giới, nằm trong vùng lõi của Vườn quốc gia Phong Nha – Kẻ Bàng. Hang nổi bật với không gian rộng lớn, trần hang cao vút cùng hệ sinh thái độc đáo và dòng suối xanh trong chảy xuyên qua lòng hang. Đây cũng là nơi sinh sống của hàng nghìn con chim én, tạo nên khung cảnh vừa hùng vĩ vừa sống động. Hang Én không chỉ là điểm đến lý tưởng cho những ai yêu thích khám phá, trekking mà còn mang lại trải nghiệm gần gũi với thiên nhiên nguyên sơ hiếm có.
      </p>
    </div>
  );
}

// ─── Contact Info ────────────────────────────────────────────────────────────
function ContactInfo() {
  return (
    <div className="w-[380px] shrink-0">
      <h2 className="text-[28px] font-semibold text-black mb-4">THÔNG TIN LIÊN HỆ</h2>
      <div className="space-y-3 text-[16px] text-black">
        <p>BQL: Vườn quốc gia Phong Nha</p>
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 20 20" className="size-5 shrink-0" fill="none">
            <path d={svgPaths.p3e623400} fill="black" />
          </svg>
          <span>Trần Mạnh Hùng</span>
        </div>
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 20 19" className="size-5 shrink-0" fill="none">
            <path d={svgPaths.p29f60700} fill="black" />
          </svg>
          <span>Phó trưởng phòng du lịch</span>
        </div>
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 19.9282 19.8703" className="size-5 shrink-0" fill="none">
            <path d={svgPaths.p4ce6500} fill="black" />
          </svg>
          <span>0912 345 676</span>
        </div>
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 20 16" className="size-5 shrink-0" fill="none">
            <path d={svgPaths.p3c342380} fill="black" />
          </svg>
          <span>hungphan@gmail.com</span>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <div>
          <h3 className="text-[20px] font-semibold text-black mb-2">Bản Đồ</h3>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="block w-[160px] h-[140px] rounded-[10px] overflow-hidden border hover:opacity-90 transition-opacity"
          >
            <img src={imgScreenshot202603171837341} alt="Bản đồ" className="w-full h-full object-cover" />
          </a>
        </div>
        <div>
          <h3 className="text-[20px] font-semibold text-black mb-2">Thời tiết</h3>
          <a
            href="https://www.accuweather.com/vi/vn/hanoi/353412/weather-forecast/353412"
            target="_blank"
            rel="noreferrer"
            className="block w-[160px] h-[140px] rounded-[10px] overflow-hidden border hover:opacity-90 transition-opacity"
          >
            <img src={imgImage56} alt="Thời tiết" className="w-full h-full object-cover" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Movie Card ──────────────────────────────────────────────────────────────
interface Movie {
  id: string;
  title: string;
  studio: string;
  role: string;
  image: string;
}

function MovieCard({ movie }: { movie: Movie }) {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  const handleOpenFilm = () => {
    if (!slug) return;
    router.push(`/dia-diem/${slug}/film/${movie.id}`);
  };

  return (
    <div
      className="bg-white rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center overflow-hidden h-[160px] cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleOpenFilm}
    >
      <div className="w-[140px] h-full shrink-0">
        <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 px-6 py-4">
        <p className="text-[22px] text-black font-medium mb-2">{movie.title}</p>
        <div className="flex items-center gap-2 mb-1">
          <svg viewBox="0 0 20 18" className="size-[18px] shrink-0" fill="none">
            <path d={svgPaths.p3a0f400} fill="#202020" />
          </svg>
          <p className="text-[14px] text-black">{movie.studio}</p>
        </div>
        <p className="text-[15px] text-black">{movie.role}</p>
      </div>
      {/* Arrow indicator */}
      <div className="pr-5 text-[#fb7104]">
        <svg viewBox="0 0 8 14" className="w-3 h-5" fill="none">
          <path d="M1 1l6 6-6 6" stroke="#fb7104" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

// ─── Movies Section ──────────────────────────────────────────────────────────
function MoviesSection() {
  const movies: Movie[] = [
    { id: "lam-giau-voi-ma", title: "Làm giàu với ma", studio: "24H PICTURES", role: "Phó trưởng phòng du lịch", image: imgImage59 },
    { id: "phong-tro-ma-bau", title: "Phòng trọ Ma Bầu", studio: "HUỲNH PHƯƠNG", role: "Phó trưởng phòng du lịch", image: imgImage57 },
    { id: "hai-muoi", title: "Hai Muối", studio: "TRUYỀN THÔNG KHANG", role: "Phó trưởng phòng du lịch", image: imgImage58 },
  ];

  return (
    <div className="bg-[#f6f6f6] border border-[#f2f2f2] rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6">
      <h2 className="text-[28px] font-semibold text-black mb-4">Các Bộ phim</h2>
      <div className="flex flex-col gap-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="flex items-center gap-2 border border-[#cdcaca] bg-[#f4f4f4] rounded-[12px] px-5 py-2 text-[15px] text-black hover:bg-gray-200 transition-colors">
          xem thêm
          <svg viewBox="0 0 11.1426 7.26361" className="size-3" fill="none">
            <path d={svgPaths.p1b186640} stroke="black" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Region Map ──────────────────────────────────────────────────────────────
function RegionMap() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-[300px] h-[300px]">
        <img src={imgGroup481} alt="Quảng Trị map" className="w-full h-full object-cover rounded-full" />
        <div className="absolute inset-0 rounded-full bg-black bg-opacity-30" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="145" stroke="#FFAC59" strokeWidth="4" />
          <circle cx="150" cy="150" r="115" stroke="#FFAC59" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-[#ffac59] text-[28px] font-semibold text-center"
            style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
          >
            Quảng Trị
          </span>
        </div>
      </div>
      <a
        href="https://film.ca.gov/locations/la-30-mile-radius-map/"
        target="_blank"
        rel="noreferrer"
        className="bg-[#ffac59] text-white font-semibold text-lg px-8 py-3 rounded-[10px] hover:opacity-90 transition-opacity text-center w-[300px]"
      >
        Xem các vùng lân cận
      </a>
    </div>
  );
}

// ─── Location Page ────────────────────────────────────────────────────────────
export default function LocationPage() {
  const galleryImages = [imgImage50, imgImage51, imgImage52, imgRectangle235];
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  const openViewer = (index: number) => {
    setViewerIndex(index);
    setViewerOpen(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <GallerySection onImageClick={openViewer} />

      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <div className="flex gap-10">
          <LocationInfo />
          <ContactInfo />
        </div>

        <div className="mt-12 flex gap-8 items-start">
          <div className="flex-1">
            <MoviesSection />
          </div>
          <div className="shrink-0 flex flex-col items-center">
            <RegionMap />
          </div>
        </div>
      </div>

      {viewerOpen && (
        <ImageViewer
          images={galleryImages}
          initialIndex={viewerIndex}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </div>
  );
}
