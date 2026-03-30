import { FileText, CheckSquare } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "gói hỗ trợ lưu trú",
    content: "Giảm giá 30% tiền phong tại khách sạn 5 sao cho ekip >50 người\nHỗ trợ chi phí ăn uống (catering) tại địa phương, giảm 20-40%",
    active: true,
  },
  { id: 2, name: "Gói hoàng thuế 5%", content: "Miễn giảm thuế 5% cho đoàn phim địa phương", active: false },
  { id: 3, name: "Gói miễn phí bối cảnh di tích", content: "Miễn phí sử dụng bối cảnh di tích lịch sử", active: false },
];

export function FinancePage() {
  return (
    <div className="p-6 min-w-[900px]">
      <h1 className="text-[22px] font-semibold text-black mb-6">Giám sát gói ưu đãi</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Package List */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <h3 className="text-[15px] font-semibold text-black mb-4">Danh sách gói ưu đãi</h3>
          <div className="space-y-3">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`flex items-center gap-3 p-3 rounded-[12px] cursor-pointer transition-colors ${
                  pkg.active ? "bg-[#fff1e4]" : "hover:bg-[#fff8f0]"
                }`}
              >
                <div className="w-10 h-10 bg-[#fb7104] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-white" />
                </div>
                <span className="text-[14px] text-black">{pkg.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Package Detail */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <h3 className="text-[15px] font-semibold text-black mb-4">Gói hỗ trợ lưu trú</h3>
          <div className="border border-gray-200 rounded-[12px] p-4 mb-5">
            <p className="text-[14px] text-black leading-relaxed whitespace-pre-line">
              {packages[0].content}
            </p>
          </div>

          <h3 className="text-[15px] font-semibold text-black mb-3">Văn bản pháp lý</h3>
          <div className="space-y-3 mb-5">
            {["Cam kết ngân sách.pdf", "Quyết định UBND.pdf"].map((doc, i) => (
              <div key={i} className="flex items-center gap-3 border border-gray-200 rounded-[12px] px-4 py-3">
                <div className="w-8 h-8 bg-[#ba252e] rounded flex items-center justify-center flex-shrink-0">
                  <FileText size={14} className="text-white" />
                </div>
                <span className="text-[14px] text-black">{doc}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-4">
            <CheckSquare size={18} className="text-[#fb7104]" />
            <p className="text-[13px] text-black">Các văn bản trên đã được UBND Tỉnh phê duyệt</p>
          </div>

          <div className="border border-gray-200 rounded-[12px] px-4 py-3 mb-4">
            <p className="text-[13px] text-gray-400">Ghi chú, lí do...</p>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button className="px-5 py-2 bg-gradient-to-b from-[#ff8423] to-[#e46400] text-white rounded-[10px] text-[14px] font-semibold shadow">
              Duyệt
            </button>
            <button className="px-5 py-2 bg-[rgba(247,148,45,0.1)] text-[#f17412] border border-[#fb7104] rounded-[10px] text-[14px] font-semibold">
              từ chối
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
