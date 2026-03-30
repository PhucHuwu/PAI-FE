import svgPaths from "../../../imports/svg-7mvrgoa9hv";
import imgDanhLamThangCanhVietNam13 from "figma:asset/0623436a7d9e121b39f23d0bb07aa1f47ffc7250.png";
import imgDanhLamThangCanhVietNam51 from "figma:asset/a177983ad875431bd71c730acc0b961da1ced173.png";
import imgDanhLamThangCanhAnGiang21 from "figma:asset/9d6ef97cbba79396eb8868eb36036e28afde8a39.png";
import imgImage32 from "figma:asset/0c926cc3a08d786cfda94a1468b78824a2443f3b.png";

// PDF Document icon component
function PdfIcon() {
  return (
    <div className="relative w-[37px] h-[50px] flex-shrink-0">
      <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 37.0706 49.4988">
        <path d={svgPaths.p32f82fc0} fill="white" stroke="#BA252E" strokeWidth="4" />
      </svg>
      {/* Corner fold */}
      <svg className="absolute top-0 right-0 w-[13px] h-[12px]" fill="none" viewBox="0 0 12.5992 12.3543">
        <path d={svgPaths.p33c01c80} fill="white" />
      </svg>
      {/* Lines on the document */}
      <div className="absolute top-[13px] left-[9px] right-[4px] space-y-[4px]">
        <div className="h-px bg-[#BA252E] w-[14px]" />
        <div className="h-px bg-[#BA252E] w-[14px]" />
        <div className="h-px bg-[#BA252E] w-[14px]" />
        <div className="h-px bg-[#BA252E] w-[26px]" />
        <div className="h-px bg-[#BA252E] w-[26px]" />
      </div>
      {/* PDF label */}
      <div className="absolute bottom-[2px] left-0 bg-[#ff2116] rounded-[6px] px-[4px] py-[1px]">
        <span className="text-white text-[11px] font-medium" style={{ fontFamily: "Roboto, sans-serif" }}>PDF</span>
      </div>
    </div>
  );
}

// Criteria rows data
const criteriaRows = [
  { label: "Hạ tầng", score: 5 },
  { label: "Thủ tục", score: 4 },
  { label: "Hỗ trợ", score: 5 },
  { label: "Bối cảnh", score: 4 },
  { label: "Nhân lực", score: 5 },
];

// PDF documents
const pdfDocuments = [
  { name: "Báo cáo khảo sát thực tế.pdf" },
  { name: "Biên bản làm việc với số VH-TT-DL.pdf" },
];

// Expert comments
const expertComment = `Giá trị sản xuất điện ảnh tại Quảng Ninh vô cùng tiềm năng với hạ tầng hiện đại và đa dạng bối cảnh đẹp tại Hạ Long
Cần cải thiện quy trình thủ tục để thuận lợi hơn trong khâu cấp phép cho đoàn làm phim`;

export function PaiPage() {
  return (
    <div className="p-6 min-w-[800px]">
      {/* Main card */}
      <div className="bg-white rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-0 overflow-hidden">
        {/* Province title */}
        <div className="px-8 pt-7 pb-5">
          <h2 className="text-[24px] font-medium text-black">Tỉnh Quảng Ninh</h2>
        </div>

        {/* Table */}
        <div className="border border-[#cdcaca] mx-6 rounded-[10px] overflow-hidden mb-8">
          {/* Header */}
          <div className="bg-[#fff1e4] border-b border-[#cdcaca] grid grid-cols-[1fr_1.5fr_1.4fr_1.5fr]">
            <div className="px-6 py-4 text-[20px] font-medium text-black border-r border-[#cdcaca]">
              Tiêu chí
            </div>
            <div className="px-6 py-4 text-[20px] font-medium text-black text-center border-r border-[#cdcaca]">
              Tài liệu thẩm định
            </div>
            <div className="px-6 py-4 text-[20px] font-medium text-black text-center border-r border-[#cdcaca]">
              Ảnh thực địa
            </div>
            <div className="px-6 py-4 text-[20px] font-medium text-black text-center">
              Nhận xét chuyên môn
            </div>
          </div>

          {/* Body */}
          <div className="bg-white grid grid-cols-[1fr_1.5fr_1.4fr_1.5fr]">
            {/* Column 1: Criteria rows */}
            <div className="border-r border-[#cdcaca]">
              {criteriaRows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-6 py-[11px] border-b border-[#cdcaca] last:border-b-0"
                >
                  <span className="text-[20px] font-medium text-black flex-1">{row.label}</span>
                  <span className="text-[20px] font-medium text-black w-6 text-center">{row.score}</span>
                </div>
              ))}
            </div>

            {/* Column 2: PDF documents – spans all rows */}
            <div className="border-r border-[#cdcaca] flex flex-col justify-center gap-4 px-5 py-4">
              {pdfDocuments.map((doc, i) => (
                <button
                  key={i}
                  className="flex items-center gap-3 hover:bg-orange-50 rounded-[6px] p-1 transition-colors text-left w-full"
                >
                  <PdfIcon />
                  <span className="text-[12px] font-semibold text-[#191919] leading-snug">{doc.name}</span>
                </button>
              ))}
            </div>

            {/* Column 3: Field photos – spans all rows */}
            <div className="border-r border-[#cdcaca] flex flex-col justify-center gap-2 px-5 py-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-[5px] overflow-hidden aspect-[16/9]">
                  <img
                    src={imgDanhLamThangCanhVietNam13}
                    alt="Ảnh thực địa 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[5px] overflow-hidden aspect-[16/9]">
                  <img
                    src={imgDanhLamThangCanhVietNam51}
                    alt="Ảnh thực địa 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[5px] overflow-hidden aspect-[16/9]">
                  <img
                    src={imgDanhLamThangCanhAnGiang21}
                    alt="Ảnh thực địa 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[5px] overflow-hidden aspect-[16/9]">
                  <img
                    src={imgImage32}
                    alt="Ảnh thực địa 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Column 4: Expert comments – spans all rows */}
            <div className="flex flex-col justify-center px-5 py-4">
              <p className="text-[16px] font-normal text-[#191919] leading-relaxed whitespace-pre-line">
                {expertComment}
              </p>
            </div>
          </div>
        </div>

        {/* Score gauge */}
        <div className="flex justify-start px-8 pb-6">
          <div className="relative w-[159px] h-[159px] flex items-center justify-center">
            {/* Orange arc SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              fill="none"
              viewBox="0 0 158.651 158.651"
            >
              <path d={svgPaths.p1000500} fill="#FFAC59" />
            </svg>
            {/* Score text */}
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-[64px] font-medium text-black leading-none">4.8</span>
              <span className="text-[24px] font-medium text-black leading-none">/5.0</span>
            </div>
          </div>
        </div>

        {/* Publish button */}
        <div className="px-6 pb-7">
          <button className="w-full py-4 rounded-[10px] text-white text-[20px] font-medium transition-opacity hover:opacity-90 active:opacity-80"
            style={{
              background: "linear-gradient(90deg, #FB7104 0%, #F5A623 100%)",
            }}
          >
            Cập nhật &amp; công bố PAI
          </button>
        </div>
      </div>
    </div>
  );
}
