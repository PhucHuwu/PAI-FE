import { Outlet } from "react-router";
import { Sidebar } from "../organisms/Sidebar";
import { Header } from "../organisms/Header";

export function AdminLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-[#fff1e4]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
