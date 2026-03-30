import React from 'react';
import { AttractionCard } from '../molecules/AttractionCard';
import { StarChartDataPoint } from '../molecules/StarChart';
import { LegendCard } from '../molecules/LegendCard';

// BƯỚC 2: Import ảnh nền mới từ thư mục assets của bạn
// Giả sử em đã tạo thư mục `src/assets/images/` và đặt tên ảnh là `turtle_tower.png`
import turtleTowerImage from '@/public/assets/ho-guom.png'; 

// Mock data for 34 Vietnamese provinces (Mã này không thay đổi)
const provinces = [
  'Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ',
  'Hà Giang', 'Cao Bằng', 'Lai Châu', 'Lào Cai', 'Tuyên Quang',
  'Lạng Sơn', 'Bắc Kạn', 'Thái Nguyên', 'Yên Bái', 'Sơn La',
  'Phú Thọ', 'Vĩnh Phúc', 'Bắc Ninh', 'Hải Dương', 'Hưng Yên',
  'Hòa Bình', 'Hà Nam', 'Nam Định', 'Thái Bình', 'Ninh Bình',
  'Thanh Hóa', 'Nghệ An', 'Hà Tĩnh', 'Quảng Bình', 'Quảng Trị',
  'Thừa Thiên Huế', 'Quảng Nam', 'Quảng Ngãi', 'Bình Định'
];

const generateProvinceData = (index: number): StarChartDataPoint[] => {
  // Use index to create deterministic but varied data
  const seed = index * 7 + 13;
  return [
    { criterion: 'Hạ tầng sẵn có', value: ((seed * 3) % 4) + 2, fullMark: 5 },
    { criterion: 'Hỗ trợ tài chính', value: ((seed * 5) % 4) + 2, fullMark: 5 },
    { criterion: 'Hỗ trợ thông tin', value: ((seed * 7) % 4) + 2, fullMark: 5 },
    { criterion: 'Hỗ trợ tại thực địa', value: ((seed * 11) % 4) + 2, fullMark: 5 },
    { criterion: 'Hỗ trợ thủ tục pháp lý', value: ((seed * 13) % 4) + 2, fullMark: 5 },
  ];
};

export function FilmCrewAttractionIndex() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Image with Blur - SỬA ĐỔI TẠI ĐÂY */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // backgroundImage: `url('https://images.unsplash.com/...')`, // Dòng cũ
          backgroundImage: `url(${turtleTowerImage.src})`,
          filter: 'blur(2px)',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Overlay (Lớp phủ màu đen phía trên ảnh nền) */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content (Nội dung chính) */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title and Legend */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 md:mb-16">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-3xl -ml-80 md:text-4xl lg:text-5xl font-bold text-white">
              <span className="bg-linear-to-r text-[#FF8B1A] bg-clip-text">
                CHỈ SỐ THU HÚT
              </span>
              {' '}
              <span className="text-white">
                ĐOÀN LÀM PHIM
              </span>
            </h2>
          </div>
          
          {/* Legend Card */}
          <div className="shrink-0">
            <LegendCard />
          </div>
        </div>
        
        {/* Province Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 md:gap-6">
          {provinces.map((province, index) => (
            <div key={`province-${index}`} className="w-full">
              <AttractionCard 
                provinceName={province}
                chartData={generateProvinceData(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}