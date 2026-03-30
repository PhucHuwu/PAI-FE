import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Calendar, User, Phone, Mail, MapPin } from "lucide-react";
import imgUserAvatar from "figma:asset/9fd56a3397f0009a997d2c34915af40d939bbed5.png";
import imgIdCard from "figma:asset/24e5fed58c83996d3052e29c204e87ab19582f34.png";

const userData: Record<string, { name: string; dob: string; gender: string; phone: string; email: string; type: string }> = {
  "1": { name: "Nguyễn Văn A", dob: "03/03/2004", gender: "Nam", phone: "098xxxxxxx", email: "xxx@gmail.com.vn", type: "Người dùng cá nhân" },
  "2": { name: "Trần Thị B", dob: "15/05/2000", gender: "Nữ", phone: "097xxxxxxx", email: "yyy@gmail.com.vn", type: "Người dùng cá nhân" },
  "3": { name: "Lê Văn C", dob: "20/07/1998", gender: "Nam", phone: "096xxxxxxx", email: "zzz@gmail.com.vn", type: "Người dùng doanh nghiệp" },
  "4": { name: "Phạm Thị D", dob: "11/11/2001", gender: "Nữ", phone: "095xxxxxxx", email: "aaa@gmail.com.vn", type: "Người dùng cá nhân" },
  "5": { name: "Hoàng Văn E", dob: "08/08/1995", gender: "Nam", phone: "094xxxxxxx", email: "bbb@gmail.com.vn", type: "Người dùng doanh nghiệp" },
};

export function UserDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = userData[id ?? "1"] ?? userData["1"];

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

      {/* User Profile Card */}
      <div className="bg-white rounded-[20px] shadow-md p-5 mb-5 flex items-start justify-between">
        <div className="flex items-start gap-4">
          <img src={imgUserAvatar} alt="" className="w-[90px] h-[90px] rounded-full object-cover" />
          <div>
            <h2 className="text-[22px] font-bold text-black">{user.name}</h2>
            <p className="text-[14px] text-gray-600">{user.type}</p>
            <p className="text-[14px] text-gray-600">{user.type} (thành viên phổ thông)</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#fff1e4] rounded-[12px] px-4 py-3">
          <Calendar size={20} className="text-[#ba252e]" />
          <span className="text-[14px] text-black">Ngày đăng ký tài khoản: 15 tháng 04, 2024</span>
        </div>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-2 gap-5">
        {/* Basic Info */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#ba252e] font-bold text-[15px]">1. THÔNG TIN CƠ BẢN</span>
          </div>
          <div className="border-t border-[#ba252e] pt-4 space-y-3">
            <div className="flex items-center gap-3">
              <User size={18} className="text-[#ba252e] flex-shrink-0" />
              <p className="text-[14px] text-black">Ngày sinh: {user.dob}</p>
            </div>
            <div className="flex items-center gap-3">
              <User size={18} className="text-[#ba252e] flex-shrink-0" />
              <p className="text-[14px] text-black">Giới tính: {user.gender}</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#ba252e] flex-shrink-0" />
              <p className="text-[14px] text-black">Điện thoại: {user.phone}</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#ba252e] flex-shrink-0" />
              <p className="text-[14px] text-black">Email: {user.email}</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#ba252e] flex-shrink-0 mt-0.5" />
              <p className="text-[14px] text-black">
                Địa chỉ: ..............................................<br />
                ...........................................................
              </p>
            </div>
          </div>
        </div>

        {/* Identity Verification */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#ba252e] font-bold text-[15px]">2. XÁC MINH DANH TÍNH</span>
          </div>
          <div className="border-t border-[#ba252e] pt-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Front ID */}
              <div className="bg-[#fff1e4] rounded-[12px] p-2 relative">
                <img src={imgIdCard} alt="CCCD mặt trước" className="w-full h-[120px] object-cover rounded-[8px]" />
                <div className="flex items-center justify-center gap-1 mt-1">
                  <div className="w-3 h-3 rounded-full bg-[#ba252e]" />
                  <span className="text-[11px] text-gray-600">Xem chi tiết</span>
                </div>
              </div>
              {/* Back ID */}
              <div className="bg-[#fff1e4] border-2 border-dashed border-gray-300 rounded-[12px] flex items-center justify-center h-[140px]">
                <div className="text-center">
                  <p className="text-[#fb7104] text-[18px]">+</p>
                  <p className="text-[13px] text-gray-600">Ảnh cccd</p>
                  <p className="text-[13px] text-gray-600">mặt sau</p>
                </div>
              </div>
            </div>
          </div>
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
