import React from 'react';
import svgPaths from "@/public/import/svg-ialo5pulhc";
import imgLogo from "@/public/assets/Logo1.svg";

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="w-full bg-[#fff1e4]">
      {/* Main content area */}
      <div className="max-w-[1440px] mx-auto px-[134px] py-10">
        <div className="flex flex-col gap-6">

          {/* Logo */}
          <div style={{ width: 342, height: 118 }} className="shrink-0">
            <img
              src={imgLogo.src}
              alt="Vietnam Film Production"
              className="w-full h-full object-contain object-left"
            />
          </div>

          {/* Info row */}
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Left: VFDA info */}
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[#414853] text-[16px]">
                VIETNAM FILM DEVELOPMENT ASSOCIATION (VFDA)
              </p>
              <p className="font-normal text-[#385571] text-[16px]">
                Address: No.32 Hao Nam Street, Dong Da District, Ha Noi, Vietnam
              </p>
              <p className="text-[#414853] text-[16px]">
                <span className="font-semibold text-[#fb7104]">Email:</span>
                <span className="font-semibold text-[#385571]"> officevfda@gmail.com</span>
              </p>
              <p className="text-[#414853] text-[16px]">
                <span className="font-semibold text-[#fb7104]">Website:</span>
                <span className="font-semibold text-[#385571]"> https://vfda.vn/en/</span>
              </p>
            </div>

            {/* Right: Bảo trợ */}
            <div className="flex items-end">
              <p className="font-normal text-[#414853] text-[16px] leading-relaxed text-right">
                Được bảo trợ bởi Học viện Công nghệ Bưu chính<br />
                Viễn thông và Hiệp hội Xúc tiến Điện ảnh Việt Nam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Orange bar */}
      <div className="w-full bg-[#fb7104] h-[42px]">
        <div className="max-w-[1440px] mx-auto px-[134px] h-full flex items-center justify-between">
          {/* Left nav links */}
          <div className="flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="font-semibold text-[#414853] text-[16px] hover:text-white transition-colors whitespace-nowrap"
            >
              Quay lại đầu trang
            </button>
            <a
              href="#privacy"
              className="font-semibold text-[#414853] text-[16px] hover:text-white transition-colors whitespace-nowrap"
            >
              Quyền riêng tư
            </a>
            <a
              href="#terms"
              className="font-semibold text-[#414853] text-[16px] hover:text-white transition-colors whitespace-nowrap"
            >
              Điều khoản sử dụng
            </a>
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-70 transition-opacity"
            >
              <svg fill="none" viewBox="0 0 11.2558 21.6667" className="h-[22px] w-auto">
                <path d={svgPaths.p39515580} fill="#414853" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:officevfda@gmail.com"
              aria-label="Email"
              className="hover:opacity-70 transition-opacity"
            >
              <svg fill="none" viewBox="0 0 27.5 21.3333" className="h-[22px] w-auto">
                <path d={svgPaths.p1f408e80} fill="#414853" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-70 transition-opacity"
            >
              <svg fill="none" viewBox="0 0 20.8333 21.6667" className="h-[22px] w-auto">
                <path d={svgPaths.p31d1a480} fill="#414853" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:opacity-70 transition-opacity"
            >
              <svg fill="none" viewBox="0 0 24.7656 18.0469" className="h-[20px] w-auto">
                <path d={svgPaths.p125c3a00} fill="#414853" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-[#fff1e4]">
        <div className="max-w-[1440px] mx-auto px-[134px] py-3">
          <p className="font-normal text-[15px] text-black">
            Copyright © 2026 Ha Noi, Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
};
