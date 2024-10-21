import { Outlet } from "react-router-dom";
import Header from "../../../components/header/Header";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col bg-[#EEEEEE] w-full min-w-[800px] min-h-screen overflow-y-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Dashboard;
