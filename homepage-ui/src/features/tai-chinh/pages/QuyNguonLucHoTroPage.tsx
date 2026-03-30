"use client";

import Link from "next/link";
import { imgFooterLogo } from "@/assets";
import svgPaths from "@/imports/svg-ygkhtzbem5";
const imgHeroBg = "/assets/hand-icon.png";
// ─── Vietnam Map (small, dark red) ────────────────────────────────────────────
function VietnamMapSmall() {
  return (
    <div className="relative w-[140px] h-[180px] shrink-0">
      <svg viewBox="0 0 178 230" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <path d={svgPaths.p1a5b17c0} fill="#9D1111" transform="translate(80,45)" />
        <path d={svgPaths.p10b12880} fill="#9D1111" transform="translate(90,70)" />
        <path d={svgPaths.p15218980} fill="#9D1111" transform="translate(70,130)" />
        <path d={svgPaths.p1655aa00} fill="#9D1111" transform="translate(85,155)" />
        <path d={svgPaths.p1697d380} fill="#9D1111" transform="translate(95,100)" />
        <path d={svgPaths.p11861300} fill="#9D1111" transform="translate(100,80)" />
        <path d={svgPaths.p117c4900} fill="#9D1111" transform="translate(110,120)" />
        <path d={svgPaths.p130c3f00} fill="#9D1111" transform="translate(60,20)" />
        <path d={svgPaths.p1645a00} fill="#9D1111" transform="translate(65,160)" />
        <path d={svgPaths.p16927600} fill="#9D1111" transform="translate(75,90)" />
        <path d={svgPaths.p13b35d00} fill="#9D1111" transform="translate(100,145)" />
      </svg>
    </div>
  );
}

// ─── Fund Card ────────────────────────────────────────────────────────────────
interface FundCardProps {
  title: string;
  description: string;
  showMap?: boolean;
  showCTA?: boolean;
  ctaLabel?: string;
}

function FundCard({ title, description, showMap = false, showCTA = false, ctaLabel = "Chi tiết" }: FundCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200">
        <p className="text-base font-semibold text-black">{title}</p>
      </div>
      {/* Body */}
      <div className="px-5 py-5 flex gap-4 flex-1">
        <p className="text-base text-black/80 leading-relaxed flex-1">{description}</p>
        {showMap && <VietnamMapSmall />}
      </div>
      {/* CTA */}
      {showCTA && (
        <div className="px-5 pb-5">
          <button className="flex items-center gap-2 bg-[#ffac59] hover:bg-[#fb7104] transition-colors text-white text-base font-semibold px-5 py-2 rounded-xl shadow cursor-pointer">
            {ctaLabel}
            <svg className="w-2.5 h-3" fill="none" viewBox="0 0 11.135 13.2353">
              <path d={svgPaths.p3a42e270} stroke="white" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 py-10">
        <div className="flex gap-12 items-start">
          <div className="w-[320px] shrink-0">
            <div className="h-[90px] w-[280px] relative mb-3">
              <img src={imgFooterLogo} alt="Việt Nam PAI" className="absolute inset-0 w-full h-full object-contain object-left" />
            </div>
            <p className="text-[#414853] text-sm leading-relaxed">
              Được bảo trợ bởi Học viện Công nghệ Bưu chính Viễn thông<br />
              và Hiệp hội Xúc tiến Điện ảnh Việt Nam
            </p>
          </div>
          <div className="flex flex-1 gap-20 pt-4">
            {["Khám phá", "Sản xuất", "Chính sách", "Liên hệ"].map((item, i) => (
              <span key={i} className="font-bold text-[#414853] text-xl cursor-pointer hover:text-[#fb7104] transition-colors">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function QuyNguonLucHoTro() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0ede8]">
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: 340 }}>
        <img src={imgHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />

        {/* Back button */}
        <Link href="/tai-chinh" className="absolute top-5 left-8 flex items-center gap-2 text-black text-base hover:text-[#fb7104] transition-colors z-10">
          <svg className="w-5 h-4" fill="none" viewBox="0 0 32.2544 17.3856">
            <path d={svgPaths.pe453880} stroke="black" strokeLinecap="round" strokeWidth="2" />
            <path d="M1.88803 9.07752H31.2544" stroke="black" strokeLinecap="round" strokeWidth="2" />
          </svg>
          <span>Quay lại trang chủ</span>
        </Link>

        {/* Content card */}
        <div className="relative z-10 max-w-[520px] bg-white/80 backdrop-blur-sm rounded-2xl p-8 m-8 mt-16">
          <h1 className="text-4xl font-semibold text-black mb-1 leading-tight">
            Quỹ &amp; Nguồn lực hỗ trợ
          </h1>
          <p className="text-2xl font-medium text-black mb-4">sản xuất phim</p>
          <p className="text-base text-black/80 leading-relaxed mb-6">
            Danh sách tổng hợp các quỹ điện ảnh nhà nước, chương trình tài trợ quốc tế và
            các nguồn tài trợ khác hỗ trợ đoàn làm phim
          </p>
          <button className="flex items-center gap-2 bg-[#ffac59] hover:bg-[#fb7104] transition-colors text-white text-base font-semibold px-6 py-2.5 rounded-xl shadow cursor-pointer">
            Tìm quỹ tài trợ
            <svg className="w-2.5 h-3" fill="none" viewBox="0 0 11.135 13.2353">
              <path d={svgPaths.p20bac340} stroke="white" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-10">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Quỹ điện ảnh nhà nước - Chương trình tài trợ quốc tế
          </h2>

          {/* 2×2 grid of fund cards */}
          <div className="grid grid-cols-2 gap-5">
            <FundCard
              title="Quỹ điện ảnh nhà nước"
              description="Quỹ điện ảnh nhà nước là tổ chức hỗ trợ tài chính cho các dự án phim nhằm phát triển ngành điện ảnh, khuyến khích sáng tạo và quảng bá giá trị văn hóa."
              showCTA
              ctaLabel="Chi tiết"
            />
            <FundCard
              title="Chương trình tài trợ quốc tế"
              description="Chương trình tài trợ quốc tế điện ảnh hỗ trợ kinh phí và kết nối hợp tác, giúp nhà làm phim tiếp cận nguồn lực và đưa tác phẩm ra thị trường toàn cầu."
              showMap
            />
            <FundCard
              title="Hỗ trợ doanh nghiệp nước ngoài"
              description="Chương trình hỗ trợ doanh nghiệp nước ngoài trong lĩnh vực điện ảnh nhằm thu hút các hãng phim quốc tế thông qua ưu đãi tài chính, thủ tục thuận lợi và hỗ trợ sản xuất. Qua đó, góp phần thúc đẩy hợp tác, chuyển giao công nghệ và phát triển ngành điện ảnh trong nước."
            />
            <FundCard
              title="Hỗ trợ doanh nghiệp địa phương"
              description="Chương trình hỗ trợ doanh nghiệp địa phương trong lĩnh vực điện ảnh nhằm cung cấp vốn, đào tạo và điều kiện sản xuất cho các hãng phim trong nước, qua đó thúc đẩy sáng tạo, nâng cao chất lượng tác phẩm và phát triển ngành điện ảnh bền vững."
            />
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL RESOURCES ── */}
      <section className="py-4 pb-12">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-2xl font-semibold text-black mb-6">Nguồn lực hỗ trợ khác</h2>
          <div className="grid grid-cols-3 gap-5">
            {[
              {
                title: "Hợp tác đồng sản xuất",
                desc: "Kết nối các nhà làm phim trong nước với đối tác quốc tế thông qua các hiệp định đồng sản xuất song phương, giúp tiếp cận nguồn vốn và thị trường phân phối toàn cầu.",
              },
              {
                title: "Đào tạo & Phát triển nhân lực",
                desc: "Các chương trình học bổng, khóa đào tạo ngắn hạn và workshops chuyên sâu về kỹ thuật điện ảnh, quản lý sản xuất và phân phối phim từ các tổ chức quốc tế uy tín.",
              },
              {
                title: "Trang thiết bị & Hạ tầng",
                desc: "Hỗ trợ tiếp cận trang thiết bị quay phim hiện đại, studio, hậu kỳ và cơ sở vật chất kỹ thuật với chi phí ưu đãi thông qua các trung tâm hỗ trợ sản xuất phim quốc gia.",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <p className="text-base font-semibold text-black mb-3">{card.title}</p>
                <p className="text-base text-black/70 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
