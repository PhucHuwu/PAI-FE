import React from 'react';
import imgBackground from "@/public/assets/danh-lam-thang-canh-viet-nam.png";
import imgLogo from "@/public/assets/Logo.png";
import svgPaths from "@/public/import/svg-ccxlz9nufo";

const NAV_LINKS = [
  { label: 'Khám phá', href: '#explore' },
  { label: 'Sản xuất', href: '#production' },
  { label: 'Khám phá', href: '#discover' },
  { label: 'Liên hệ', href: '#contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <img
          src={imgBackground.src}
          alt="Danh lam thắng cảnh Việt Nam"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Semi-transparent white content panel — sits at the bottom ~44% */}
        <div className="absolute bottom-0 left-0 right-0 bg-[rgba(255,255,255,0.82)] pt-10 pb-8 px-8 md:px-16">
          <div className="max-w-[1440px] mx-auto flex flex-col gap-6">

            {/* Top Row: Logo + Nav links */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 justify-between">
              {/* Logo */}
              <div className="w-[220px] md:w-[280px] shrink-0">
                <img
                  src={imgLogo.src}
                  alt="Việt Nam PAI - Production Attraction Index"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-wrap gap-8 md:gap-12 items-center">
                {NAV_LINKS.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="font-bold text-[#414853] text-[22px] md:text-[24px] hover:text-[#FFAC59] transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Row: Sponsor text + Social icons */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* Sponsor text */}
              <p className="text-[#414853] text-[16px] leading-relaxed">
                Được bảo trợ bởi Học viện Công nghệ Bưu chính<br />
                Viễn thông và Hiệp hội Xúc tiến Điện ảnh Việt Nam
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[51px] h-[51px] hover:opacity-70 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg fill="none" viewBox="0 0 22.0787 42.5001" className="h-[34px] w-auto">
                    <path d={svgPaths.pa65b6f0} fill="#414853" />
                  </svg>
                </a>

                {/* Mail */}
                <a
                  href="mailto:contact@vietnampai.vn"
                  className="flex items-center justify-center w-[65px] h-[65px] hover:opacity-70 transition-opacity"
                  aria-label="Email"
                >
                  <svg fill="none" viewBox="0 0 54.1667 43.3333" className="h-[36px] w-auto">
                    <path d={svgPaths.p3cd0ea00} fill="#414853" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[51px] h-[51px] hover:opacity-70 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg fill="none" viewBox="0 0 42.5 42.5" className="h-[34px] w-auto">
                    <path d={svgPaths.pd07dcf0} fill="#414853" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[54px] h-[54px] hover:opacity-70 transition-opacity"
                  aria-label="YouTube"
                >
                  <svg fill="none" viewBox="0 0 49.5312 34.8048" className="h-[28px] w-auto">
                    <path d={svgPaths.p160b0100} fill="#414853" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};
