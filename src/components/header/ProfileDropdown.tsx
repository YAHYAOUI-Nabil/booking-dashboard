import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { MdPerson } from "react-icons/md";
import { useLogoutMutation } from "../../app/api/public/auth";
import { useDispatch } from "react-redux";
import { unsetCurrentUser } from "../../app/store/authSlice";
import toast, { Toaster } from "react-hot-toast";
import CommonPopup from "../CommonPopup";
import ChangePassword from "../../pages/dashboard/components/users/components/ChangePassword";
import { useState } from "react";

const ProfileDropdown = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(unsetCurrentUser());
    } catch (error) {
      toast.error("Logout failed", {
        position: "top-center",
        duration: 2000,
        style: { border: "4px solid #F92F60", borderRadius: "0px" },
      });
    }
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <Toaster />
      <Menu>
        <MenuButton className="inline-flex items-center gap-2">
          <MdPerson className="w-5 h-5 cursor-pointer" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom start"
          className="w-44 mt-4 origin-top-right z-20 rounded-md border border-white/5 bg-white p-1 text-sm/6 font-medium text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)]"
        >
          <MenuItem>
            <button
              onClick={handleOpenPopup}
              className="group flex w-full rounded-md items-center gap-2 py-1.5 px-3 hover:bg-gradient-to-r from-bgFrom to-bgTo hover:text-white"
            >
              change Password
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={handleLogout}
              className="group flex w-full rounded-md items-center gap-2 py-1.5 px-3 hover:bg-gradient-to-r from-bgFrom to-bgTo hover:text-white"
            >
              Logout
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
      <CommonPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title="Change password"
        disableCloseIcon={false}
        heightwidth="max-w-[900%] max-h-[80%]"
      >
        <ChangePassword handleClosePopup={handleClosePopup} />
      </CommonPopup>
    </div>
  );
};

export default ProfileDropdown;
