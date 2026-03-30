import { useNavigate, useParams } from "react-router";
import { ArrowLeft, MapPin, Mountain, Mail, Phone, Globe, FileText, Eye, Download } from "lucide-react";
import imgVendorAvatar from "figma:asset/fd5827b26e20f544e31c7b5d8df818b38382e5e2.png";
import imgLocation from "figma:asset/4f4c27cdacd37399d2acb80f523048b9d5e8fe98.png";

const vendorData: Record<string, { name: string; province: string; role: string; phone: string; email: string }> = {
  "1": { name: "Nguyễn Văn A", province: "TỈNH QUẢNG NINH", role: "Chánh văn phòng", phone: "098xxxxxxx", email: "xxx@gmail.com.vn" },
  "2": { name: "Trần Thị B", province: "TỈNH HÀ NỘI", role: "Giám đốc", phone: "097xxxxxxx", email: "yyy@gmail.com.vn" },
  "3": { name: "Lê Văn C", province: "TỈNH HÀ GIANG", role: "Phó giám đốc", phone: "096xxxxxxx", email: "zzz@gmail.com.vn" },
  "4": { name: "Phạm Thị D", province: "THÀNH PHỐ ĐÀ NẴNG", role: "Trưởng phòng", phone: "095xxxxxxx", email: "aaa@gmail.com.vn" },
  "5": { name: "Hoàng Văn E", province: "TP. HỒ CHÍ MINH", role: "Phó trưởng phòng", phone: "094xxxxxxx", email: "bbb@gmail.com.vn" },
};

export function VendorDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const vendor = vendorData[id ?? "1"] ?? vendorData["1"];

  return (
    <div className="p-6 min-w-[900px]">
      {/* Title */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[28px] font-bold">
          <span className="text-[#ba252e]">QUẢN LÝ </span>
          <span className="text-[#fb7104]">Vendor / User</span>
        </h1>
        <button
          onClick={() => navigate("/vendor-user")}
          className="flex items-center gap-2 bg-white rounded-[12px] px-4 py-2 shadow text-gray-700 hover:bg-gray-50"
        >
          <ArrowLeft size={18} />
        </button>
      </div>

      {/* Province Header */}
      <div className="bg-white rounded-[20px] shadow-md p-5 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MapPin size={28} className="text-[#ba252e]" />
          <h2 className="text-[22px] font-bold text-[#ba252e]">{vendor.province}</h2>
        </div>
        <div className="flex items-center gap-4 text-right">
          <Mountain size={24} className="text-[#ba252e]" />
          <div>
            <p className="text-[13px] text-gray-600">Tổng số bối cảnh: <strong>26</strong></p>
            <p className="text-[13px] text-gray-600">Chỉ số PAI của tỉnh: <strong className="text-[#ba252e]">4.0/5.0</strong></p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Left: Profile + Info */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          {/* Profile */}
          <div className="flex items-start gap-4 mb-5 pb-4 border-b border-gray-100">
            <img src={imgVendorAvatar} alt="" className="w-[100px] h-[100px] rounded-full object-cover" />
            <div>
              <p className="font-bold text-[16px]">{vendor.province}</p>
              <p className="text-[14px] text-gray-700">Tên: {vendor.name}</p>
              <p className="text-[14px] text-gray-700">Chức vụ: {vendor.role}</p>
              <p className="text-[14px] text-gray-700">Số điện thoại: {vendor.phone}</p>
              <p className="text-[14px] text-gray-700">Email: {vendor.email}</p>
            </div>
          </div>

          {/* Basic Info */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-[#ba252e]" />
              <h3 className="font-bold text-[#ba252e] text-[15px]">THÔNG TIN CƠ BẢN</h3>
            </div>
            <div className="border-t border-[#ba252e] pt-3 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#ba252e] mt-0.5 flex-shrink-0" />
                <p className="text-[13px] text-gray-700">Địa chỉ: .....................................................<br />...............................................................</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#ba252e]" />
                <p className="text-[13px] text-gray-700">Email: {vendor.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#ba252e]" />
                <p className="text-[13px] text-gray-700">Số điện thoại: {vendor.phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-[#ba252e]" />
                <p className="text-[13px] text-gray-700">Website: www.xxx.vn</p>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="space-y-2">
            {["Văn bản.pdf", "Cam kếtPAI.pdf"].map((doc, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-[10px] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#ba252e] rounded flex items-center justify-center">
                    <FileText size={14} className="text-white" />
                  </div>
                  <span className="text-[13px] text-gray-700">{doc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={16} className="text-[#ba252e] cursor-pointer" />
                  <Download size={16} className="text-[#ba252e] cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Location Images */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <h3 className="font-bold text-[#ba252e] text-[15px] mb-4">HỒ SƠ BỐI CẢNH</h3>
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-[12px] overflow-hidden">
                <img src={imgLocation} alt={`Vịnh Hạ Long ${i + 1}`} className="w-full h-[120px] object-cover" />
                <p className="text-[12px] text-gray-600 mt-1 text-center">Vịnh Hạ Long</p>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-gray-400 text-right mt-2">‹ 1/4 ›</p>
        </div>
      </div>

      {/* Notes & Actions */}
      <div className="bg-white rounded-[25px] shadow-md p-4 mt-5 flex items-center justify-between">
        <p className="text-[16px] font-medium text-black">Ghi chú công vụ (Notes):</p>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 bg-[rgba(247,148,45,0.1)] text-[#f17412] border border-[#fb7104] rounded-[10px] text-[14px] font-semibold">
            Từ chối
          </button>
          <button className="px-5 py-2 bg-gradient-to-b from-[#ff8423] to-[#e46400] text-white rounded-[10px] text-[14px] font-semibold shadow">
            Duyệt
          </button>
        </div>
      </div>
    </div>
  );
}
