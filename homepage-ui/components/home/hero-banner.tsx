"use client";

import React from "react";
import { HeroText } from "../molecules/HeroText";
import { LocationCard } from "../molecules/LocationCard";
import { LocationCardData } from "@/types";
import svgPaths from "@/public/import/svg-b0k4vqx414";
import imgAnhRuongBacThang from "@/public/assets/anh-ruong-bac-thang.png";
import imgHaNoi from "@/public/assets/Ha-Noi.png";
import imgHaLong from "@/public/assets/Ha-Long.png";
import imgHaGiang from "@/public/assets/Ha-Giang.png";

// Location data - easy to customize
const TOP_LOCATIONS: LocationCardData[] = [
  {
    rank: 1,
    name: "Hà Nội",
    image: imgHaNoi.src,
    position: "center",
  },
  {
    rank: 2,
    name: "Hạ Long",
    image: imgHaLong.src,
    position: "left",
  },
  {
    rank: 3,
    name: "Hà Giang",
    image: imgHaGiang.src,
    position: "right",
  },
];

// Types
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  backgroundColor: string;
}

// Arrow Icon Component
const ArrowIcon: React.FC = () => (
  <div className="absolute inset-[41.38%_12.74%_35.29%_83.01%]">
    <div className="absolute inset-[-11.09%_-7.24%_-11.09%_-7.99%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12.6756 16.5302"
      >
        <g>
          <path
            d={svgPaths.p28cd2400}
            stroke="white"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d={svgPaths.p2c648200}
            stroke="white"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  </div>
);

// Reusable Button Component
const CTAButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  backgroundColor,
}) => (
  <button
    onClick={onClick}
    className="h-14.5 relative shrink-0 w-64.75 cursor-pointer hover:opacity-90 transition-opacity"
  >
    <div
      className={`absolute inset-0 rounded-[30px]`}
      style={{ backgroundColor }}
    />
    <div className="absolute flex flex-col font-bold inset-[18.97%_13.9%_15.52%_4.63%] justify-center leading-0 not-italic text-[20px] text-center text-white">
      <p className="leading-[normal]">{children}</p>
    </div>
    <ArrowIcon />
  </button>
);

// Hero Buttons Component
const HeroButtons: React.FC = () => {
  const handleExploreMap = () => {
    console.log("Khám phá bản đồ clicked");
    // Add your navigation or action here
    // window.location.href = '#map';
  };

  const handleTopLocations = () => {
    console.log("Top địa điểm hot clicked");
    // Add your navigation or action here
    // window.location.href = '#top-locations';
  };

  return (
    <div className="content-stretch flex gap-7.75 items-start relative shrink-0">
      <CTAButton
        backgroundColor="#fb7104"
        onClick={handleExploreMap}
      >
        Khám phá bản đồ
      </CTAButton>
      <CTAButton
        backgroundColor="#fd930c"
        onClick={handleTopLocations}
      >
        Top địa điểm hot
      </CTAButton>
    </div>
  );
};

// Hero Left Column Component
const HeroLeftColumn: React.FC = () => (
  <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-167.5">
    <HeroText />
    <HeroButtons />
  </div>
);



// Cards Overlap Container Component
export const CardsOverlapContainer: React.FC = () => {
  const handleLearnMore = (locationName: string) => {
    console.log(`Navigating to ${locationName} details page`);
  };

  return (
    // Thay h-[419px] thành h-[480px]
    <div className="h-120 relative shrink-0 w-full">
      {TOP_LOCATIONS.map((location) => (
        <LocationCard
          key={location.rank}
          {...location}
          onLearnMore={handleLearnMore}
        />
      ))}
    </div>
  );
};

// Hero Right Column Component
export const HeroRightColumn: React.FC = () => (
  // Thay w-[631px] thành w-[650px]
  <div className="content-stretch flex flex-col gap-6.25 items-start relative shrink-0 w-162.5">
    <p className="font-black leading-0 not-italic relative shrink-0 text-[#fb7104] text-[50px] text-center w-full">
      <span className="leading-22.5 text-black">TOP</span>
      <span className="leading-22.5"> 3 </span>
      <span className="leading-22.5 text-black">PAI</span>
    </p>
    <CardsOverlapContainer />
  </div>
);

export const HeroBanner: React.FC = () => {
  return (
    // 1. Dùng flex và items-center ở container ngoài cùng để tự động căn giữa theo chiều dọc
    <div className="relative w-full h-189 overflow-hidden flex items-center justify-center">
      
      {/* Background Image - Thầy dùng inset-0 để ảnh tự động phủ kín thay vì hardcode kích thước */}
      <div className="absolute inset-0 z-0 opacity-80">
        <img
          alt="Vietnam Landscape"
          className="w-full h-full object-cover pointer-events-none"
          src={imgAnhRuongBacThang.src}
        />
      </div>

      {/* Background Overlay - Tương tự, dùng inset-0 để phủ kín */}
      <div className="absolute inset-0 bg-[rgba(246,243,238,0.5)] z-0" />

      {/* Content Container 
          2. BỎ absolute, top-[199px] và height cứng. 
          3. Đổi thành relative z-10 để nổi lên trên nền.
          4. Dùng flex, justify-between để đẩy 2 cột ra 2 bên.
      */}
      <div className="relative z-10 w-full max-w-360 flex items-center justify-between mx-auto">
        <HeroLeftColumn />
        <HeroRightColumn />
      </div>
      
    </div>
  );
};