import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { MdPerson } from "react-icons/md";

const ProfileDropdown = () => {
  return (
    <div>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2">
          <MdPerson className="w-5 h-5 cursor-pointer" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom start"
          className="w-44 mt-4 origin-top-right rounded-sm border border-white/5 bg-white p-1 text-sm/6 font-medium text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)]"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 py-1.5 px-3 hover:bg-[#0033FF] hover:text-white">
              Logout
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default ProfileDropdown;
