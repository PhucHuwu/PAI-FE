'use client';

import React, { useState, useEffect } from 'react';
import infrastructureImg from '@/public/images/locations/hoang-thanh-hue.jpg'
import trendingImg from '@/public/images/locations/hoi-an.jpg'
import financialImg from '@/public/images/locations/son-doong.jpg'
import backgroundImg from '@/public/assets/anh-ruong-bac-thang.png'

// --- MOCK DATA ---
const INFRASTRUCTURE_RANKINGS = Array(12).fill({ rank: 1, name: 'QUAN TUAN ANH', score: 91, avatar: infrastructureImg }).map((item, i) => ({ ...item, rank: i + 1, score: 100 - i }));
const TRENDING_LOCATIONS = Array(12).fill({ rank: 1, name: 'Bảo tàng chứng tích Chiến tranh', city: 'TP Hồ Chí Minh', score: 4.980, avatar: trendingImg }).map((item, i) => ({ ...item, rank: i + 1, score: (4.980 - i * 0.1).toFixed(3) }));
const FINANCIAL_SUPPORT_RANKINGS = Array(12).fill({ rank: 1, name: 'TP Hồ Chí Minh', score: 9.893, avatar: financialImg }).map((item, i) => ({ ...item, rank: i + 1, score: (9.893 - i * 0.1).toFixed(3) }));

// --- TYPES ---
type BoardType = 'infrastructure' | 'trending' | 'financial' | null;

interface BoardConfig {
  title: string;
  col1: string;
  col2: string;
  data: any[];
  type: BoardType;
  isCenter?: boolean;
}

const boards: BoardConfig[] = [
    { title: 'CƠ SỞ HẠ TẦNG TỐT NHẤT', col1: 'Người tham gia', col2: 'Lượt check-in', data: INFRASTRUCTURE_RANKINGS, type: 'infrastructure' },
    { title: 'ĐỊA ĐIỂM TOP TRENDING', col1: 'Tên địa điểm', col2: 'Lượt check-in', data: TRENDING_LOCATIONS, type: 'trending', isCenter: true },
    { title: 'MỨC HỖ TRỢ TÀI CHÍNH TỐT NHẤT', col1: 'Tên địa điểm', col2: 'Chỉ số', data: FINANCIAL_SUPPORT_RANKINGS, type: 'financial' },
  ];

export const LeaderboardSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<BoardType>(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [activeModal]);

  // Component render từng dòng dữ liệu (Dùng chung cho cả Card và Modal)
  const renderRow = (item: any, isModal = false) => {
    const textColor = isModal ? 'text-black' : 'text-white';
    const subTextColor = isModal ? 'text-gray-500' : 'text-[#e7c5c5]';
    
    return (
      <div key={item.rank} className={`flex items-start gap-2 sm:gap-3 ${isModal ? 'py-2 sm:py-3 border-b border-gray-100 last:border-0' : 'py-1'}`}>
        {/* RESPONSIVE: Cỡ chữ rank tự thu nhỏ trên mobile (text-[13px] -> sm:text-[14px]) */}
        <span className={`font-['Inter',sans-serif] font-black text-[13px] sm:text-[14px] ${textColor} w-[15px] pt-1.5 sm:pt-2`}>
          {item.rank}
        </span>
        {/* RESPONSIVE: Ảnh avatar nhỏ lại chút xíu trên mobile */}
        <img src={item.avatar.src} alt="" className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] rounded-full mt-1 object-cover shrink-0" />
        <div className="flex-1 overflow-hidden">
          <p className={`font-['Inter',sans-serif] font-black text-[13px] sm:text-[14px] ${textColor} overflow-hidden text-ellipsis whitespace-nowrap pt-1`}>
            {item.name}
          </p>
          {item.city && (
            <p className={`font-['Inter',sans-serif] font-semibold text-[10px] sm:text-[11px] ${subTextColor} overflow-hidden text-ellipsis whitespace-nowrap`}>
              {item.city}
            </p>
          )}
        </div>
        <span className={`font-['Inter',sans-serif] font-black text-[13px] sm:text-[14px] ${textColor} pt-1.5 sm:pt-2 shrink-0`}>
          {item.score}
        </span>
      </div>
    );
  };

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImg.src} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          {/* RESPONSIVE: Chữ tiêu đề chạy từ 4xl (Mobile) lên 6xl (Laptop) */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#BA252E] mb-2 tracking-wide">
            BẢNG XẾP HẠNG
          </h2>
        </div>

        {/* RESPONSIVE: Grid chạy 1 cột trên mobile/tablet, 3 cột trên Laptop (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-md md:max-w-xl lg:max-w-[1200px] mx-auto items-center">
          {boards.map((board) => (
            <div 
              key={board.type} 
              // FIX 2: Loại bỏ h-[...] cố định. Dùng h-full để thẻ tự giãn theo nội dung.
              // Giữ lại pb-8 để tạo khoảng thở ở đáy.
              className={`relative bg-[#FB7104] rounded-[3px] shadow-xl overflow-hidden group transition-all duration-300 flex flex-col 
                ${board.isCenter 
                  ? 'p-5 lg:p-6 lg:py-8 lg:scale-105 z-10' // Card giữa: Padding to hơn, thụt thò (scale) ra ngoài
                  : 'p-4 lg:p-5 lg:py-6 opacity-90 hover:opacity-100' // Card 2 bên: Padding nhỏ hơn, hơi mờ
                }`}
            >
              <h3 className="font-['Inter',sans-serif] font-black text-[13px] lg:text-[14px] text-white tracking-[1.68px] mb-4 lg:mb-6 uppercase text-center shrink-0">
                {board.title}
              </h3>
              
              <div className="flex justify-between mb-2 shrink-0">
                <span className="font-['Inter',sans-serif] font-black text-[11px] lg:text-[12px] text-[#ffd0a2] tracking-[0.96px]">{board.col1}</span>
                <span className="font-['Inter',sans-serif] font-black text-[11px] lg:text-[12px] text-[#ffd0a2] tracking-[0.96px]">{board.col2}</span>
              </div>
              
              <div className="h-[1px] bg-white mb-3 shrink-0" />
              
              <div className={`flex-1 flex flex-col justify-between ${board.isCenter ? 'space-y-4' : 'space-y-3'}`}>
                {board.data.slice(0, 8).map(item => renderRow(item, false))}
              </div>

              <div 
                className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fb7104] via-[#fb7104]/90 to-transparent flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveModal(board.type)}
              >
                <span className="font-black text-white text-[14px] lg:text-[16px] tracking-widest uppercase hover:scale-110 transition-transform">
                  XEM THÊM
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {activeModal && (() => {
        const activeData = boards.find(b => b.type === activeModal);
        if (!activeData) return null;

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 animate-in fade-in duration-200">
            {/* RESPONSIVE: Modal rộng 95% trên mobile (w-[95%]), max-width 2xl trên desktop */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-[95%] sm:w-full max-w-2xl flex flex-col max-h-[85vh] overflow-hidden relative">
              
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors z-10"
              >
                ✕
              </button>

              <div className="p-4 sm:p-6 pb-2 text-center border-b border-gray-100">
                <h2 className="text-xl sm:text-2xl font-black text-[#8b3a3a] uppercase mb-4 sm:mb-6 tracking-wide pr-8 sm:pr-0">
                  {activeData.title}
                </h2>
                <div className="flex justify-between px-1 sm:px-2">
                  <span className="font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[13px] text-gray-500">{activeData.col1}</span>
                  <span className="font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[13px] text-gray-500">{activeData.col2}</span>
                </div>
              </div>

              <div className="p-3 sm:p-4 px-4 sm:px-6 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 sm:[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="space-y-1">
                  {activeData.data.map(item => renderRow(item, true))}
                </div>
              </div>
              
            </div>
          </div>
        );
      })()}
    </section>
  );
};