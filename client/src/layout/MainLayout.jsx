import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const MainLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen dark:bg-gray-900 dark:text-white ">
      <Header />
      <main className="flex flex-col md:grid md:grid-cols-[180px_1fr] ">
        <div className="bg-blue-100 p-4 text-2xl md:text-base">
          {" "}
          {/* SideBar */}
          <SideBar />
        </div>
        <div className=" text-4xl md:text-base bg-green-100 p-4">
          {" "}
          {/* Main Content */}
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default MainLayout;
