import { createBrowserRouter } from "react-router";
import DiaDiem from "./DiaDiem";
import ThuTucGiayPhep from "./pages/ThuTucGiayPhep";
import QuyTrinhCapPhep from "./pages/QuyTrinhCapPhep";
import HoSoGiayPhep from "./pages/HoSoGiayPhep";
import DieuPhoiCoQuanChucNang from "./pages/DieuPhoiCoQuanChucNang";
import KetNoiCongDong from "./pages/KetNoiCongDong";

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
]);