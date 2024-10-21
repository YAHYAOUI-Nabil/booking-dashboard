import { MdDelete } from "react-icons/md";
import CommonPopup from "../../../../../components/CommonPopup";
import { useState } from "react";
import AddProduct from "./AddProduct";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery, searchQuery }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };
  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className="flex flex-col gap-4 min-w-[600px]">
      <p className="text-xl font-bold">All Products</p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <div className="">
            <input
              type="text"
              className="border-2 border-gray-300 focus:border-bgTo outline-none py-2 px-4 rounded-md "
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="">
            <button>
              <MdDelete className="text-gray-800 h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="">
          <button
            onClick={handleOpenPopup}
            className="px-4 py-2 bg-gradient-to-r from-bgFrom to-bgTo text-white font-medium text-lg rounded-md"
          >
            Add product
          </button>
        </div>
      </div>

      <CommonPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title="Add new Product"
        disableCloseIcon={false}
        heightwidth="max-w-[900%] max-h-[80%]"
      >
        <AddProduct />
      </CommonPopup>
    </div>
  );
};

export default Header;
