import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const MainLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen dark:bg-gray-900 dark:text-white">
      <Header />

      {/* Main Content Area with Sidebar + Content */}
      <main className="grid md:grid-cols-[260px_1fr] gap-4 p-4 bg-gray-100 dark:bg-gray-800">
        {/* Sidebar */}
        <SideBar />

        {/* Main Page Content */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow text-gray-800 dark:text-white overflow-auto">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
