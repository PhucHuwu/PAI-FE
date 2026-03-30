import { useNavigate, useParams } from "react-router";
import imgNewsMain from "figma:asset/0623436a7d9e121b39f23d0bb07aa1f47ffc7250.png";
import imgNewsSub1 from "figma:asset/a177983ad875431bd71c730acc0b961da1ced173.png";
import imgNewsSub2 from "figma:asset/9d6ef97cbba79396eb8868eb36036e28afde8a39.png";
import imgNewsSub3 from "figma:asset/0c926cc3a08d786cfda94a1468b78824a2443f3b.png";
import imgAuthor from "figma:asset/ca36ab445b3c4c1028419324d2de4be8b339d600.png";
import { MapPin } from "lucide-react";

const newsData: Record<string, { title: string; org: string; date: string }> = {
  "1": { title: "Hà Giang: khai thác bối cảnh mùa hoa tam giác mạch", org: "Sở VHTTDL Hà Giang", date: "28/04/2026 lúc 08:00 AM" },
  "2": { title: "Quảng Ninh: Vịnh Hạ Long mùa hè rực rỡ", org: "Sở VHTTDL Quảng Ninh", date: "25/04/2026 lúc 09:00 AM" },
  "3": { title: "Đà Nẵng: Cầu Rồng - biểu tượng điện ảnh miền Trung", org: "Sở VHTTDL Đà Nẵng", date: "20/04/2026 lúc 07:30 AM" },
  "4": { title: "Ninh Bình: Tràng An - kỳ quan thiên nhiên thế giới", org: "Sở VHTTDL Ninh Bình", date: "18/04/2026 lúc 10:00 AM" },
  "5": { title: "Hội An: Phố cổ - bối cảnh điện ảnh độc đáo", org: "Sở VHTTDL Hội An", date: "15/04/2026 lúc 08:30 AM" },
  "6": { title: "Đà Lạt: Thành phố sương mù - thiên đường điện ảnh", org: "Sở VHTTDL Lâm Đồng", date: "12/04/2026 lúc 11:00 AM" },
};

export function NewsDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const news = newsData[id ?? "1"] ?? newsData["1"];

  return (
    <div className="p-6 min-w-[900px]">
      {/* Main Card */}
      <div className="bg-white rounded-[20px] shadow-md overflow-hidden">
        {/* Header Info */}
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <img src={imgAuthor} alt="Author" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-[13px] font-medium text-black">{news.org}</p>
                <p className="text-[12px] text-gray-500">Ngày đăng: {news.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-4 py-1.5 bg-[#ffac59] text-white rounded-full text-[13px] font-medium hover:bg-[#fb8c00]"
                onClick={() => navigate("/tin-tuc")}
              >
                Duyệt
              </button>
              <button className="px-4 py-1.5 bg-white border border-[#ffac59] text-[#db7107] rounded-full text-[13px] font-medium">
                từ chối
              </button>
              <button className="px-4 py-1.5 bg-white border border-[#ffac59] text-[#db7107] rounded-full text-[13px] font-medium">
                Yêu cầu chỉnh sửa
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6">
          <h1 className="text-[26px] font-bold text-black mb-5">
            <span className="font-bold">{news.title.split(":")[0]}:</span>
            {news.title.includes(":") ? news.title.substring(news.title.indexOf(":") + 1) : ""}
          </h1>

          {/* Main Image */}
          <div className="rounded-[12px] overflow-hidden mb-5">
            <img src={imgNewsMain} alt="" className="w-full h-[320px] object-cover" />
          </div>

          {/* Article Text */}
          <p className="text-[14px] text-black leading-relaxed mb-6">
            Hà Giang vào mùa hoa tam giác mạch giống như một bức tranh được nhuộm hồng bởi thiên nhiên. Khi những cơn gió đầu đông khẽ lướt qua các sườn núi đá tai mèo, những cánh hoa nhỏ li ti bắt đầu phủ kín các thung lũng, triền đồi và con đường quanh co của vùng cao. Màu hồng phớt, tím nhạt của hoa hòa cùng bầu trời trong vắt và không khí se lạnh tạo nên một khung cảnh vừa dịu dàng vừa hùng vĩ.
          </p>
          <p className="text-[14px] text-black leading-relaxed mb-6">
            Đứng giữa cánh đồng hoa bạt ngàn, bạn không chỉ cảm nhận được vẻ đẹp nguyên sơ của núi rừng mà còn thấy lòng mình chậm lại, nhẹ nhàng và bình yên hơn. Mùa hoa tam giác mạch không chỉ là thời điểm đẹp nhất trong năm của Hà Giang, mà còn là lời mời gọi đầy mê hoặc dành cho những ai muốn một lần chạm vào vẻ đẹp hoang sơ và thơ mộng của vùng địa đầu Tổ quốc.
          </p>

          {/* Sub Images */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[imgNewsSub1, imgNewsSub2, imgNewsSub3].map((img, i) => (
              <div key={i} className="rounded-[10px] overflow-hidden">
                <img src={img} alt="" className="w-full h-[130px] object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Location */}
        <div className="border-t border-gray-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-[#ba252e]" />
            <span className="text-[13px] text-black">Xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang</span>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-[#ffac59] text-white rounded-[12px] text-[13px] font-medium shadow">
              Liên hệ nhà quản lý bối cảnh
            </button>
            <button className="px-4 py-2 bg-white border border-[#ffac59] text-[#db7107] rounded-[12px] text-[13px] font-medium shadow">
              Tải bộ hồ sơ hình ảnh
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="px-4 pb-4">
          <button
            onClick={() => navigate("/tin-tuc")}
            className="text-[13px] text-[#ba252e] hover:underline flex items-center gap-1"
          >
            ← Quay lại danh sách tin tức
          </button>
        </div>
      </div>
    </div>
  );
}
