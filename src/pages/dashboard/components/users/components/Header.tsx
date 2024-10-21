import CommonPopup from "../../../../../components/CommonPopup";
import { useState } from "react";
import AddUser from "./AddUser";

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };
  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className="flex flex-col gap-4 min-w-[600px]">
      <p className="text-xl font-bold">All Users</p>
      <div className="flex flex-row justify-end items-center">
        <div className="">
          <button
            onClick={handleOpenPopup}
            className="px-4 py-2 bg-gradient-to-r from-bgFrom to-bgTo text-white font-medium text-lg rounded-md"
          >
            Add user
          </button>
        </div>
      </div>

      <CommonPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title="Add new user"
        disableCloseIcon={false}
        heightwidth="max-w-[900%] max-h-[80%]"
      >
        <AddUser handleClosePopup={handleClosePopup} />
      </CommonPopup>
    </div>
  );
};

export default Header;
