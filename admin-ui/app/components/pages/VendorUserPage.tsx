import { useNavigate } from "react-router";
import { Search, Filter, FileText, Users } from "lucide-react";
import imgVendorAvatar from "figma:asset/6290ad617a3b66ca3c093b0bf85e884033333b4a.png";

const vendors = [
  { id: 1, name: "Vendor 1", province: "Quảng Ninh" },
  { id: 2, name: "Vendor 2", province: "Hà Nội" },
  { id: 3, name: "Vendor 3", province: "Hà Giang" },
  { id: 4, name: "Vendor 4", province: "Đà Nẵng" },
  { id: 5, name: "Vendor 5", province: "TP. HCM" },
];

const users = [
  { id: 1, name: "Nguyễn Văn A" },
  { id: 2, name: "Trần Thị B" },
  { id: 3, name: "Lê Văn C" },
  { id: 4, name: "Phạm Thị D" },
  { id: 5, name: "Hoàng Văn E" },
];

export function VendorUserPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6 min-w-[900px]">
      <h1 className="text-[28px] font-bold mb-6">
        <span className="text-[#ba252e]">QUẢN LÝ </span>
        <span className="text-[#fb7104]">Vendor / User</span>
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-[25px] shadow-md p-6 flex items-center gap-4">
          <FileText size={40} className="text-[#ba252e]" />
          <div>
            <p className="text-[14px] text-gray-600">Tổng số Vendor (Đã duyệt/Chờ duyệt)</p>
            <p className="text-[36px] font-bold">
              <span className="text-[#fb7104]">120</span>
              <span className="text-black">/</span>
              <span className="text-[#fb7104]">30</span>
            </p>
          </div>
        </div>
        <div className="bg-white rounded-[25px] shadow-md p-6 flex items-center gap-4">
          <Users size={40} className="text-[#ba252e]" />
          <div>
            <p className="text-[14px] text-gray-600">Tổng số User (Đã duyệt/Chờ duyệt)</p>
            <p className="text-[36px] font-bold">
              <span className="text-[#fb7104]">450</span>
              <span className="text-black">/</span>
              <span className="text-[#fb7104]">60</span>
            </p>
          </div>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-2 gap-6">
        {/* Vendor Table */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <h3 className="text-[16px] font-semibold text-black mb-4">Danh sách Vendor cần phê duyệt</h3>
          <div className="flex items-center gap-3 mb-4">
            <button className="flex items-center gap-1 px-3 py-1 bg-[#fb7104] text-white rounded-[8px] text-[13px]">
              <Filter size={13} /> Lọc
            </button>
            <div className="flex-1 relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full pl-8 pr-3 py-1.5 border border-gray-200 rounded-[8px] text-[13px] bg-gray-50 outline-none"
                placeholder="Tìm kiếm..."
              />
            </div>
          </div>
          {/* Header */}
          <div className="grid grid-cols-3 text-[12px] font-semibold text-gray-600 border-b border-gray-100 pb-2 mb-1">
            <span>Tên (Avatar và Tên)</span>
            <span className="text-center">Hồ sơ</span>
            <span className="text-right">Hành động</span>
          </div>
          {/* Rows */}
          {vendors.map((v) => (
            <div
              key={v.id}
              className="grid grid-cols-3 items-center py-2.5 border-b border-gray-50 cursor-pointer hover:bg-[#fff8f0] rounded-md px-1 transition-colors"
              onClick={() => navigate(`/vendor-user/vendor/${v.id}`)}
            >
              <div className="flex items-center gap-2">
                <img src={imgVendorAvatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                <span className="text-[13px]">{v.name}</span>
              </div>
              <div className="flex justify-center">
                <Users size={18} className="text-gray-400" />
              </div>
              <div className="flex justify-end gap-1">
                <button
                  className="px-2 py-1 bg-gradient-to-b from-[#ff8423] to-[#e46400] text-white rounded-[7px] text-[11px] font-semibold"
                  onClick={(e) => e.stopPropagation()}
                >
                  Duyệt
                </button>
                <button
                  className="px-2 py-1 bg-[rgba(247,148,45,0.1)] text-[#f17412] border border-[#fb7104] rounded-[7px] text-[11px] font-semibold"
                  onClick={(e) => e.stopPropagation()}
                >
                  Từ chối
                </button>
              </div>
            </div>
          ))}
          {/* Pagination */}
          <div className="flex items-center justify-between mt-3 text-[12px] text-gray-500">
            <span>Tháng 3 tuần 1</span>
            <span className="flex items-center gap-1">
              Tháng tổng 1 ▾
            </span>
            <span className="flex items-center gap-1">
              <button className="px-1">‹</button> 1/4 <button className="px-1">›</button>
            </span>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white rounded-[20px] shadow-md p-5">
          <h3 className="text-[16px] font-semibold text-black mb-4">Danh sách User mới</h3>
          <div className="flex items-center gap-3 mb-4">
            <button className="flex items-center gap-1 px-3 py-1 bg-[#fb7104] text-white rounded-[8px] text-[13px]">
              <Filter size={13} /> Lọc
            </button>
            <div className="flex-1 relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full pl-8 pr-3 py-1.5 border border-gray-200 rounded-[8px] text-[13px] bg-gray-50 outline-none"
                placeholder="Tìm kiếm..."
              />
            </div>
          </div>
          {/* Header */}
          <div className="grid grid-cols-3 text-[12px] font-semibold text-gray-600 border-b border-gray-100 pb-2 mb-1">
            <span>Tên (Avatar và Tên)</span>
            <span className="text-center">Hồ sơ</span>
            <span className="text-right">Hành động</span>
          </div>
          {/* Rows */}
          {users.map((u) => (
            <div
              key={u.id}
              className="grid grid-cols-3 items-center py-2.5 border-b border-gray-50 cursor-pointer hover:bg-[#fff8f0] rounded-md px-1 transition-colors"
              onClick={() => navigate(`/vendor-user/user/${u.id}`)}
            >
              <div className="flex items-center gap-2">
                <img src={imgVendorAvatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                <span className="text-[13px]">{u.name}</span>
              </div>
              <div className="flex justify-center">
                <Users size={18} className="text-gray-400" />
              </div>
              <div className="flex justify-end gap-1">
                <button
                  className="px-2 py-1 bg-gradient-to-b from-[#ff8423] to-[#e46400] text-white rounded-[7px] text-[11px] font-semibold"
                  onClick={(e) => e.stopPropagation()}
                >
                  Duyệt
                </button>
                <button
                  className="px-2 py-1 bg-[rgba(247,148,45,0.1)] text-[#f17412] border border-[#fb7104] rounded-[7px] text-[11px] font-semibold"
                  onClick={(e) => e.stopPropagation()}
                >
                  Từ chối
                </button>
              </div>
            </div>
          ))}
          {/* Pagination */}
          <div className="flex items-center justify-between mt-3 text-[12px] text-gray-500">
            <span>Tháng 3 tuần 1</span>
            <span>Tháng tổng 1 ▾</span>
            <span className="flex items-center gap-1">
              <button className="px-1">‹</button> 1/4 <button className="px-1">›</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
