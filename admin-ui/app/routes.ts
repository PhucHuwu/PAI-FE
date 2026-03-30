import { createBrowserRouter } from "react-router";
import { AdminLayout } from "./components/templates/AdminLayout";
import { DashboardPage } from "./components/pages/DashboardPage";
import { VendorUserPage } from "./components/pages/VendorUserPage";
import { VendorDetailPage } from "./components/pages/VendorDetailPage";
import { UserDetailPage } from "./components/pages/UserDetailPage";
import { LocationPage } from "./components/pages/LocationPage";
import { LocationDetailPage } from "./components/pages/LocationDetailPage";
import { FilmLawPage } from "./components/pages/FilmLawPage";
import { NewsPage } from "./components/pages/NewsPage";
import { NewsDetailPage } from "./components/pages/NewsDetailPage";
import { FinancePage } from "./components/pages/FinancePage";
import { PaiPage } from "./components/pages/PaiPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AdminLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "vendor-user", Component: VendorUserPage },
      { path: "vendor-user/vendor/:id", Component: VendorDetailPage },
      { path: "vendor-user/user/:id", Component: UserDetailPage },
      { path: "dia-diem", Component: LocationPage },
      { path: "dia-diem/:id", Component: LocationDetailPage },
      { path: "luat-dien-anh", Component: FilmLawPage },
      { path: "tin-tuc", Component: NewsPage },
      { path: "tin-tuc/:id", Component: NewsDetailPage },
      { path: "tai-chinh", Component: FinancePage },
      { path: "chi-so-pai", Component: PaiPage },
    ],
  },
]);
