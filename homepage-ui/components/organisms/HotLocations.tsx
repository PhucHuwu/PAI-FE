"use client";

import React, { useRef, useState, useEffect } from "react";
import { LocationRatingCard } from "../molecules/LocationRatingCard";

const HOT_LOCATIONS = [
  {
    id: 1,
    title: "Đảo chè Thanh Chương",
    subtitle: "Nghệ An",
    image:
      "https://images.unsplash.com/photo-1764124524328-9b4ab1a0ae09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwdGVhJTIwcGxhbnRhdGlvbiUyMGhpbGxzfGVufDF8fHx8MTc3NDQyNTg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 9.8,
  },
  {
    id: 2,
    title: "Vịnh Hạ Long",
    subtitle: "Quảng Ninh",
    image:
      "https://images.unsplash.com/photo-1713551584340-7b7817f39a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYSUyMGxvbmclMjBiYXklMjB2aWV0bmFtJTIwYm9hdHN8ZW58MXx8fHwxNzc0NDI1ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 9.5,
  },
  {
    id: 3,
    title: "Ruộng bậc thang Sapa",
    subtitle: "Lào Cai",
    image:
      "https://images.unsplash.com/photo-1743485754198-1c80fccaa473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwcmljZSUyMHRlcnJhY2VzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NDM1ODYxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 9.4,
  },
  {
    id: 4,
    title: "Phố cổ Hội An",
    subtitle: "Quảng Nam",
    image:
      "https://images.unsplash.com/photo-1643030080539-b411caf44c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2klMjBhbiUyMHZpZXRuYW0lMjBhbmNpZW50JTIwdG93bnxlbnwxfHx8fDE3NzQ0MjU4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 9.3,
  },
  {
    id: 5,
    title: "Tràng An",
    subtitle: "Ninh Bình",
    image:
      "https://images.unsplash.com/photo-1764124524328-9b4ab1a0ae09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwdGVhJTIwcGxhbnRhdGlvbiUyMGhpbGxzfGVufDF8fHx8MTc3NDQyNTg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 9.7,
  },
  {
    id: 6,
    title: "Phố cổ Hội An",
    subtitle: "Quảng Nam",
    image:
      "https://images.unsplash.com/photo-1643030080539-b411caf44c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2klMjBhbiUyMHZpZXRuYW0lMjBhbmNpZW50JTIwdG93bnxlbnwxfHx8fDE3NzQ0MjU4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 9.3,
  },
];

export const HotLocations: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Khai báo state để ẩn/hiện nút.
  // Mặc định bên trái là false (ẩn) vì lúc mới load web đang ở sát lề trái.
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // 2. Hàm kiểm tra vị trí cuộn
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollRef.current;

      // Nếu vị trí cuộn (scrollLeft) lớn hơn 0, nghĩa là đã cuộn qua phải -> Hiện nút Trái
      setCanScrollLeft(scrollLeft > 0);

      // Nếu vị trí hiện tại + phần nhìn thấy (clientWidth) nhỏ hơn tổng chiều dài (scrollWidth) -> Hiện nút Phải
      // Thầy dùng Math.ceil để làm tròn lên, tránh lỗi số thập phân của một số trình duyệt
      setCanScrollRight(
        Math.ceil(scrollLeft + clientWidth) < scrollWidth,
      );
    }
  };

  // 3. Lắng nghe sự kiện ngay khi component được render
  useEffect(() => {
    checkScroll(); // Kiểm tra ngay lần đầu tiên

    const currentRef = scrollRef.current;
    if (currentRef) {
      // Bắt sự kiện mỗi khi người dùng cuộn chuột hoặc bấm nút trượt
      currentRef.addEventListener("scroll", checkScroll);
      // Tính toán lại nếu người dùng thay đổi kích thước cửa sổ trình duyệt
      window.addEventListener("resize", checkScroll);
    }

    // Cleanup: dọn dẹp sự kiện khi component bị xóa khỏi màn hình
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 324;
      scrollRef.current.scrollBy({
        left:
          direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white flex flex-col pt-10 overflow-hidden w-full">
      <div className="container mx-auto px-4 mb-6 ml-16">
        <h2 className="text-[32px] md:text-[36px] font-black text-black">
          ĐỊA ĐIỂM <span className="text-[#FFAC59]">"HOT"</span>{" "}
          DO VFDA & PTIT TUYỂN CHỌN
        </h2>
      </div>

      <div className="bg-[#FFD0A2] w-full py-8 relative group">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x pb-4 pl-4 md:px-8 lg:px-16 pr-[10vw] [scroll-padding-left:1rem] md:[scroll-padding-left:2rem] lg:[scroll-padding-left:4rem] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {HOT_LOCATIONS.map((location) => (
            <LocationRatingCard
              key={location.id}
              image={location.image}
              title={location.title}
              subtitle={location.subtitle}
              rating={location.rating}
              onClick={() =>
                console.log(`Xem chi tiết ${location.title}`)
              }
            />
          ))}
        </div>

        {/* 4. CHỈ render Nút Trái nếu canScrollLeft là true */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 text-[#fb923c] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white cursor-pointer"
            aria-label="Cuộn sang trái"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}

        {/* 5. CHỈ render Nút Phải nếu canScrollRight là true */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 text-[#fb923c] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white cursor-pointer"
            aria-label="Cuộn sang phải"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};