'use client';

import React, { useState, useEffect } from 'react';
import infrastructureImg from '@/public/images/locations/hoang-thanh-hue.jpg'
import trendingImg from '@/public/images/locations/hoi-an.jpg'
import financialImg from '@/public/images/locations/son-doong.jpg'
import backgroundImg from '@/public/assets/anh-ruong-bac-thang.png'

// ─── Shared data types ──────────────────────────────────────────────────────
interface RankingItem {
  rank: number;
  name: string;
  city: string;
  score: number | string;
}

// ─── Mock data for 5 leaderboards ───────────────────────────────────────────

const TRENDING_LOCATIONS: RankingItem[] = [
  { rank: 1,  name: 'Bảo tàng Chứng tích Chiến tranh', city: 'TP. Hồ Chí Minh', score: '9.823' },
  { rank: 2,  name: 'Phố cổ Hội An',                   city: 'Quảng Nam',        score: '9.810' },
  { rank: 3,  name: 'Vịnh Hạ Long',                    city: 'Quảng Ninh',       score: '9.795' },
  { rank: 4,  name: 'Lăng Chủ tịch Hồ Chí Minh',      city: 'Hà Nội',           score: '9.781' },
  { rank: 5,  name: 'Phố đi bộ Nguyễn Huệ',            city: 'TP. Hồ Chí Minh', score: '9.762' },
  { rank: 6,  name: 'Cầu Rồng',                        city: 'Đà Nẵng',          score: '9.744' },
  { rank: 7,  name: 'Bà Nà Hills',                     city: 'Đà Nẵng',          score: '9.731' },
  { rank: 8,  name: 'Hoàng thành Thăng Long',           city: 'Hà Nội',           score: '9.715' },
  { rank: 9,  name: 'Thung lũng tình yêu',             city: 'Lâm Đồng',         score: '9.700' },
  { rank: 10, name: 'Mỹ Sơn Thánh địa',                city: 'Quảng Nam',        score: '9.688' },
  { rank: 11, name: 'Vườn quốc gia Phong Nha',         city: 'Quảng Bình',       score: '9.672' },
  { rank: 12, name: 'Hồ Gươm',                         city: 'Hà Nội',           score: '9.655' },
  { rank: 13, name: 'Bãi biển Mỹ Khê',                 city: 'Đà Nẵng',          score: '9.641' },
  { rank: 14, name: 'Cung đường đèo Hải Vân',          city: 'Thừa Thiên Huế',   score: '9.623' },
  { rank: 15, name: 'Đảo Phú Quốc',                    city: 'Kiên Giang',       score: '9.607' },
];

const INFRASTRUCTURE_RANKINGS: RankingItem[] = [
  { rank: 1,  name: 'Hà Nội',            city: 'Miền Bắc',  score: '9.850' },
  { rank: 2,  name: 'TP. Hồ Chí Minh',  city: 'Miền Nam',  score: '9.823' },
  { rank: 3,  name: 'Đà Nẵng',           city: 'Miền Trung',score: '9.790' },
  { rank: 4,  name: 'Hải Phòng',         city: 'Miền Bắc',  score: '9.764' },
  { rank: 5,  name: 'Cần Thơ',           city: 'Miền Nam',  score: '9.741' },
  { rank: 6,  name: 'Quảng Ninh',        city: 'Miền Bắc',  score: '9.720' },
  { rank: 7,  name: 'Bình Dương',        city: 'Miền Nam',  score: '9.698' },
  { rank: 8,  name: 'Đồng Nai',          city: 'Miền Nam',  score: '9.672' },
  { rank: 9,  name: 'Lâm Đồng',          city: 'Tây Nguyên',score: '9.651' },
  { rank: 10, name: 'Khánh Hòa',         city: 'Miền Trung',score: '9.630' },
  { rank: 11, name: 'Thừa Thiên Huế',    city: 'Miền Trung',score: '9.608' },
  { rank: 12, name: 'Bắc Ninh',          city: 'Miền Bắc',  score: '9.584' },
  { rank: 13, name: 'Nghệ An',           city: 'Miền Trung',score: '9.561' },
  { rank: 14, name: 'Thanh Hóa',         city: 'Miền Trung',score: '9.542' },
  { rank: 15, name: 'Gia Lai',           city: 'Tây Nguyên',score: '9.518' },
];

const FINANCIAL_SUPPORT_RANKINGS: RankingItem[] = [
  { rank: 1,  name: 'TP. Hồ Chí Minh',  city: 'Miền Nam',  score: '9.910' },
  { rank: 2,  name: 'Hà Nội',            city: 'Miền Bắc',  score: '9.890' },
  { rank: 3,  name: 'Đà Nẵng',           city: 'Miền Trung',score: '9.860' },
  { rank: 4,  name: 'Cần Thơ',           city: 'Miền Nam',  score: '9.831' },
  { rank: 5,  name: 'Hải Phòng',         city: 'Miền Bắc',  score: '9.810' },
  { rank: 6,  name: 'Khánh Hòa',         city: 'Miền Trung',score: '9.785' },
  { rank: 7,  name: 'Quảng Ninh',        city: 'Miền Bắc',  score: '9.762' },
  { rank: 8,  name: 'Bình Thuận',        city: 'Miền Nam',  score: '9.740' },
  { rank: 9,  name: 'Lâm Đồng',          city: 'Tây Nguyên',score: '9.718' },
  { rank: 10, name: 'Kiên Giang',        city: 'Miền Nam',  score: '9.694' },
  { rank: 11, name: 'Bình Định',         city: 'Miền Trung',score: '9.671' },
  { rank: 12, name: 'Thừa Thiên Huế',    city: 'Miền Trung',score: '9.648' },
  { rank: 13, name: 'Nghệ An',           city: 'Miền Trung',score: '9.623' },
  { rank: 14, name: 'Đồng Nai',          city: 'Miền Nam',  score: '9.601' },
  { rank: 15, name: 'Vĩnh Phúc',         city: 'Miền Bắc',  score: '9.578' },
];

const INFORMATION_SUPPORT_RANKINGS: RankingItem[] = [
  { rank: 1,  name: 'Hà Nội',            city: 'Miền Bắc',  score: '9.880' },
  { rank: 2,  name: 'TP. Hồ Chí Minh',  city: 'Miền Nam',  score: '9.862' },
  { rank: 3,  name: 'Đà Nẵng',           city: 'Miền Trung',score: '9.843' },
  { rank: 4,  name: 'Quảng Ninh',        city: 'Miền Bắc',  score: '9.820' },
  { rank: 5,  name: 'Khánh Hòa',         city: 'Miền Trung',score: '9.798' },
  { rank: 6,  name: 'Hải Phòng',         city: 'Miền Bắc',  score: '9.775' },
  { rank: 7,  name: 'Lào Cai',           city: 'Miền Bắc',  score: '9.750' },
  { rank: 8,  name: 'Cần Thơ',           city: 'Miền Nam',  score: '9.727' },
  { rank: 9,  name: 'Lâm Đồng',          city: 'Tây Nguyên',score: '9.702' },
  { rank: 10, name: 'Bình Dương',        city: 'Miền Nam',  score: '9.679' },
  { rank: 11, name: 'Thừa Thiên Huế',    city: 'Miền Trung',score: '9.654' },
  { rank: 12, name: 'Đắk Lắk',           city: 'Tây Nguyên',score: '9.630' },
  { rank: 13, name: 'Bình Thuận',        city: 'Miền Nam',  score: '9.607' },
  { rank: 14, name: 'Ninh Bình',         city: 'Miền Bắc',  score: '9.581' },
  { rank: 15, name: 'Gia Lai',           city: 'Tây Nguyên',score: '9.558' },
];

const FIELD_SUPPORT_RANKINGS: RankingItem[] = [
  { rank: 1,  name: 'Đà Nẵng',           city: 'Miền Trung',score: '9.901' },
  { rank: 2,  name: 'Hà Nội',            city: 'Miền Bắc',  score: '9.882' },
  { rank: 3,  name: 'TP. Hồ Chí Minh',  city: 'Miền Nam',  score: '9.868' },
  { rank: 4,  name: 'Quảng Nam',         city: 'Miền Trung',score: '9.845' },
  { rank: 5,  name: 'Khánh Hòa',         city: 'Miền Trung',score: '9.821' },
  { rank: 6,  name: 'Hải Phòng',         city: 'Miền Bắc',  score: '9.798' },
  { rank: 7,  name: 'Quảng Ninh',        city: 'Miền Bắc',  score: '9.774' },
  { rank: 8,  name: 'Lâm Đồng',          city: 'Tây Nguyên',score: '9.750' },
  { rank: 9,  name: 'Cần Thơ',           city: 'Miền Nam',  score: '9.724' },
  { rank: 10, name: 'Bình Định',         city: 'Miền Trung',score: '9.700' },
  { rank: 11, name: 'Thừa Thiên Huế',    city: 'Miền Trung',score: '9.675' },
  { rank: 12, name: 'Đồng Nai',          city: 'Miền Nam',  score: '9.651' },
  { rank: 13, name: 'Gia Lai',           city: 'Tây Nguyên',score: '9.626' },
  { rank: 14, name: 'Nghệ An',           city: 'Miền Trung',score: '9.600' },
  { rank: 15, name: 'Kiên Giang',        city: 'Miền Nam',  score: '9.576' },
];

// ─── Leaderboard Card ───────────────────────────────────────────────────────
interface LeaderboardCardProps {
  title: string;
  col1Label: string;
  col2Label: string;
  items: RankingItem[];
}

function LeaderboardCard({ title, col1Label, col2Label, items }: LeaderboardCardProps) {
  return (
    <div className="flex flex-col rounded-[3px] overflow-hidden shadow-xl min-w-0">
      {/* Header */}
      <div className="bg-[#fb7104] px-3 pt-3 pb-2 shrink-0">
        <h3 className="font-black text-[12px] text-white tracking-[1.4px] uppercase mb-3 leading-tight">
          {title}
        </h3>
        {/* Column labels */}
        <div className="flex items-center gap-1 mb-1">
          <span className="w-5 shrink-0 font-black text-[10px] text-[#ffd0a2] tracking-[0.8px]">STT</span>
          <span className="flex-1 min-w-0 font-black text-[10px] text-[#ffd0a2] tracking-[0.8px]">{col1Label}</span>
          <span className="w-12 shrink-0 font-black text-[10px] text-[#ffd0a2] tracking-[0.8px] text-right">{col2Label}</span>
        </div>
        {/* Divider */}
        <div className="h-px bg-white/60" />
      </div>

      {/* Scrollable rows */}
      <div className="bg-[#fb7104] overflow-y-auto" style={{ maxHeight: 340, scrollbarWidth: 'thin', scrollbarColor: '#f97316 transparent' }}>
        <div className="px-3 pb-3 space-y-[6px] pt-2">
          {items.map((item) => (
            <div key={item.rank} className="flex items-center gap-1">
              <span className="w-5 shrink-0 font-black text-[12px] text-white">{item.rank}</span>
              <div className="flex-1 min-w-0">
                <p className="font-black text-[11px] text-white truncate leading-tight">{item.name}</p>
                <p className="font-semibold text-[9px] text-[#ffd0a2] truncate leading-tight">{item.city}</p>
              </div>
              <span className="w-12 shrink-0 font-black text-[11px] text-white text-right">{item.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main LeaderboardSection ─────────────────────────────────────────────────
export const LeaderboardSection: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with blur and overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgRectangle30}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-black text-[#8b3a3a] mb-2 tracking-wide">
            BẢNG XẾP HẠNG
          </h2>
        </div>

        {/* Five ranking cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-[1280px] mx-auto">
          <LeaderboardCard
            title="Địa điểm Top Trending"
            col1Label="Tên địa điểm"
            col2Label="Chỉ số"
            items={TRENDING_LOCATIONS}
          />
          <LeaderboardCard
            title="Hạ tầng"
            col1Label="Tên địa điểm"
            col2Label="Chỉ số"
            items={INFRASTRUCTURE_RANKINGS}
          />
          <LeaderboardCard
            title="Hỗ trợ tài chính"
            col1Label="Tên địa điểm"
            col2Label="Chỉ số"
            items={FINANCIAL_SUPPORT_RANKINGS}
          />
          <LeaderboardCard
            title="Hỗ trợ thông tin"
            col1Label="Tên địa điểm"
            col2Label="Chỉ số"
            items={INFORMATION_SUPPORT_RANKINGS}
          />
          <LeaderboardCard
            title="Hỗ trợ thực địa"
            col1Label="Tên địa điểm"
            col2Label="Chỉ số"
            items={FIELD_SUPPORT_RANKINGS}
          />
        </div>
      </div>
    </section>
  );
};
