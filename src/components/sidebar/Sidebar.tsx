import { useAppContext } from "../../app/contexts/AppContext";
import logo from "../../assets/booking-logo.png";
import AdminMenu from "./AdminMenu";
import MenuItems from "./MenuItems";

const Sidebar = () => {
  const { showSidebarMenu } = useAppContext();
  return (
    <div
      className={`p-4 h-screen bg-[#121F25] text-white transition-all ease-in-out duration-500 overflow-y-auto ${
        showSidebarMenu ? "w-72 min-w-72" : "w-20 min-w-20"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center pb-4 border-b border-gray-200">
          <img src={logo} alt="Logo" className="w-8" />
          {showSidebarMenu && (
            <p className="whitespace-nowrap text-lg font-medium">Booking.com</p>
          )}
        </div>
        <div className="flex flex-row gap-4 items-center pb-4 border-b border-gray-200">
          <AdminMenu />
        </div>
        <MenuItems />
      </div>
    </div>
  );
};

export default Sidebar;
