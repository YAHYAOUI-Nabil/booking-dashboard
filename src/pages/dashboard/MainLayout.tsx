import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "./components/Dashboard";

const MainLayout = () => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default MainLayout;
