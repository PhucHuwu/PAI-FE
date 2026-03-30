import { createBrowserRouter } from 'react-router'
import DiaDiem from '@/features/dia-diem/pages/DiaDiemPage'
import ThuTucGiayPhep from '@/features/thu-tuc-giay-phep/pages/ThuTucGiayPhepPage'
import QuyTrinhCapPhep from '@/features/thu-tuc-giay-phep/pages/QuyTrinhCapPhepPage'
import HoSoGiayPhep from '@/features/thu-tuc-giay-phep/pages/HoSoGiayPhepPage'
import DieuPhoiCoQuanChucNang from '@/features/ho-tro-thuc-dia/pages/DieuPhoiCoQuanChucNangPage'
import KetNoiCongDong from '@/features/ho-tro-thuc-dia/pages/KetNoiCongDongPage'
import ChinhSach from '@/features/tin-tuc/pages/ChinhSachPage'
import SuKien from '@/features/tin-tuc/pages/SuKienPage'
import ChiTietSuKien from '@/features/tin-tuc/pages/ChiTietSuKienPage'
import TinTuc from '@/features/tin-tuc/pages/TinTucPage'
import ChinhSachUuDai from '@/features/tai-chinh/pages/ChinhSachUuDaiPage'
import TraCuuChinhSach from '@/features/tai-chinh/pages/TraCuuChinhSachPage'
import ChiPhiDichVuPhoBien from '@/features/tai-chinh/pages/ChiPhiDichVuPhoBienPage'
import QuyNguonLucHoTro from '@/features/tai-chinh/pages/QuyNguonLucHoTroPage'

export const legacyRouter = createBrowserRouter([
  { path: '/dia-diem', Component: DiaDiem },
  { path: '/thu-tuc-giay-phep', Component: ThuTucGiayPhep },
  { path: '/thu-tuc-giay-phep/van-ban-phap-luat', Component: ThuTucGiayPhep },
  { path: '/thu-tuc-giay-phep/quy-trinh-cap-phep', Component: QuyTrinhCapPhep },
  { path: '/thu-tuc-giay-phep/ho-so-giay-phep', Component: HoSoGiayPhep },
  { path: '/ho-tro-thuc-dia', Component: DieuPhoiCoQuanChucNang },
  { path: '/ho-tro-thuc-dia/dieu-phoi-co-quan-chuc-nang', Component: DieuPhoiCoQuanChucNang },
  { path: '/ho-tro-thuc-dia/ket-noi-cong-dong', Component: KetNoiCongDong },
  { path: '/tin-tuc', Component: TinTuc },
  { path: '/tin-tuc/tin-tuc', Component: TinTuc },
  { path: '/tin-tuc/chinh-sach', Component: ChinhSach },
  { path: '/tin-tuc/su-kien', Component: SuKien },
  { path: '/tin-tuc/su-kien/:id', Component: ChiTietSuKien },
  { path: '/tai-chinh', Component: ChinhSachUuDai },
  { path: '/tai-chinh/chinh-sach-uu-dai', Component: ChinhSachUuDai },
  { path: '/tai-chinh/tra-cuu-chinh-sach', Component: TraCuuChinhSach },
  { path: '/tai-chinh/chi-phi-dich-vu', Component: ChiPhiDichVuPhoBien },
  { path: '/tai-chinh/quy-nguon-luc', Component: QuyNguonLucHoTro },
])
