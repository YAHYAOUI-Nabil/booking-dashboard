import { FaEllipsisVertical } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { useAppContext } from "../../app/contexts/AppContext";

const SidebarButton = () => {
  const { showSidebarMenu, setShowSidebarMenu } = useAppContext();
  return (
    <button
      className="flex justify-center items-center w-10 h-10 rounded-full bg-[#EEEEEE] active:bg-[#EEEEEE]"
      onClick={() => setShowSidebarMenu(!showSidebarMenu)}
    >
      {showSidebarMenu ? <FaEllipsisVertical className="" /> : <TfiMenuAlt />}
    </button>
  );
};

export default SidebarButton;
