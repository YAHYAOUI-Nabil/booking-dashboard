import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/header/Header";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-[#EEEEEE] w-full min-h-screen py-4 px-8 overflow-y-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Dashboard;
