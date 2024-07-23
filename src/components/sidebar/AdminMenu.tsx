import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { CiUser, CiEdit, CiSettings } from "react-icons/ci";
import { useState } from "react";
import avatar from "../../assets/avatar.jpg";
import { useAppContext } from "../../app/contexts/AppContext";

const AdminMenu = () => {
  const [open, setOpen] = useState(false);
  const { showSidebarMenu } = useAppContext();

  return (
    <div className="w-full flex flex-col gap-4">
      <button
        className="flex flex-row gap-4 w-full items-center"
        onClick={() => setOpen(!open)}
      >
        <img src={avatar} alt="avatar" className="w-8 rounded-full" />
        {showSidebarMenu && (
          <div className="flex flex-row justify-between items-center w-full">
            <p className="whitespace-nowrap">Nabil YAHYAOUI</p>
            {open ? (
              <BiChevronUp className="h-5 w-5" />
            ) : (
              <BiChevronDown className="h-5 w-5" />
            )}
          </div>
        )}
      </button>

      {open && (
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-4 py-3 cursor-pointer rounded-md hover:bg-black/15">
            <div className="flex justify-center items-center w-8 min-w-8">
              <CiUser className="h-6 w-6" />
            </div>
            {showSidebarMenu && <p className="whitespace-nowrap">My Profile</p>}
          </div>
          <div className="flex flex-row gap-4 py-3 cursor-pointer rounded-md hover:bg-black/15">
            <div className="flex justify-center items-center w-8 min-w-8">
              <CiEdit className="h-6 w-6" />
            </div>
            {showSidebarMenu && (
              <p className="whitespace-nowrap">Edit Profile</p>
            )}
          </div>
          <div className="flex flex-row gap-4 py-3 cursor-pointer rounded-md hover:bg-black/15">
            <div className="flex justify-center items-center w-8 min-w-8">
              <CiSettings className="h-6 w-6" />
            </div>
            {showSidebarMenu && <p className="whitespace-nowrap">Settings</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMenu;
