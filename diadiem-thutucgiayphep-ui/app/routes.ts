import { createBrowserRouter } from "react-router";
import DiaDiem from "./DiaDiem";
import ThuTucGiayPhep from "./pages/ThuTucGiayPhep";
import QuyTrinhCapPhep from "./pages/QuyTrinhCapPhep";
import HoSoGiayPhep from "./pages/HoSoGiayPhep";

export const router = createBrowserRouter([
  { path: "/", Component: DiaDiem },
  { path: "/dia-diem", Component: DiaDiem },
  { path: "/thu-tuc-giay-phep", Component: ThuTucGiayPhep },
  { path: "/thu-tuc-giay-phep/van-ban-phap-luat", Component: ThuTucGiayPhep },
  { path: "/thu-tuc-giay-phep/quy-trinh-cap-phep", Component: QuyTrinhCapPhep },
  { path: "/thu-tuc-giay-phep/ho-so-giay-phep", Component: HoSoGiayPhep },
]);