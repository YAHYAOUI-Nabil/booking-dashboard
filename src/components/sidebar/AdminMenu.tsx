import { useAppContext } from "../../app/contexts/AppContext";

const AdminMenu = () => {
  const { showSidebarMenu } = useAppContext();

  return (
    <div className="w-full flex flex-row gap-4">
      <div className="flex items-center justify-center w-10 aspect-square rounded-full bg-[#0033FF] text-white text-lg font-bold ">
        <p>N</p>
      </div>
      {showSidebarMenu && (
        <div className="flex flex-row justify-between items-center w-full">
          <p className="whitespace-nowrap">Nabil YAHYAOUI</p>
        </div>
      )}
    </div>
  );
};

export default AdminMenu;
