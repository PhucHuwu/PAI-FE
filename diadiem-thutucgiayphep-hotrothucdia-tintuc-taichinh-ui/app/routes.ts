import { createBrowserRouter } from "react-router";
import DiaDiem from "./DiaDiem";
import ThuTucGiayPhep from "./pages/ThuTucGiayPhep";
import QuyTrinhCapPhep from "./pages/QuyTrinhCapPhep";
import HoSoGiayPhep from "./pages/HoSoGiayPhep";
import DieuPhoiCoQuanChucNang from "./pages/DieuPhoiCoQuanChucNang";
import KetNoiCongDong from "./pages/KetNoiCongDong";
import ChinhSach from "./pages/ChinhSach";
import SuKien from "./pages/SuKien";
import ChiTietSuKien from "./pages/ChiTietSuKien";
import TinTuc from "./pages/TinTuc";
import ChinhSachUuDai from "./pages/ChinhSachUuDai";
import TraCuuChinhSach from "./pages/TraCuuChinhSach";
import ChiPhiDichVuPhoBien from "./pages/ChiPhiDichVuPhoBien";
import QuyNguonLucHoTro from "./pages/QuyNguonLucHoTro";

export const router = createBrowserRouter([
  { path: "/", Component: DiaDiem },
  { path: "/dia-diem", Component: DiaDiem },
  { path: "/thu-tuc-giay-phep", Component: ThuTucGiayPhep },
  { path: "/thu-tuc-giay-phep/van-ban-phap-luat", Component: ThuTucGiayPhep },
  { path: "/thu-tuc-giay-phep/quy-trinh-cap-phep", Component: QuyTrinhCapPhep },
  { path: "/thu-tuc-giay-phep/ho-so-giay-phep", Component: HoSoGiayPhep },
  { path: "/ho-tro-thuc-dia", Component: DieuPhoiCoQuanChucNang },
  { path: "/ho-tro-thuc-dia/dieu-phoi-co-quan-chuc-nang", Component: DieuPhoiCoQuanChucNang },
  { path: "/ho-tro-thuc-dia/ket-noi-cong-dong", Component: KetNoiCongDong },
  { path: "/tin-tuc", Component: TinTuc },
  { path: "/tin-tuc/tin-tuc", Component: TinTuc },
  { path: "/tin-tuc/chinh-sach", Component: ChinhSach },
  { path: "/tin-tuc/su-kien", Component: SuKien },
  { path: "/tin-tuc/su-kien/:id", Component: ChiTietSuKien },
  { path: "/tai-chinh", Component: ChinhSachUuDai },
  { path: "/tai-chinh/chinh-sach-uu-dai", Component: ChinhSachUuDai },
  { path: "/tai-chinh/tra-cuu-chinh-sach", Component: TraCuuChinhSach },
  { path: "/tai-chinh/chi-phi-dich-vu", Component: ChiPhiDichVuPhoBien },
  { path: "/tai-chinh/quy-nguon-luc", Component: QuyNguonLucHoTro },
]);