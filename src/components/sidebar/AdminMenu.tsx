import { useAppContext } from "../../app/contexts/AppContext";
import { useAuth } from "../../app/hooks/useAuth";

const AdminMenu = () => {
  const { showSidebarMenu } = useAppContext();
  const auth = useAuth();

  return (
    <div className="w-full flex flex-row gap-4">
      <div className="flex items-center justify-center w-10 aspect-square rounded-full bg-gradient-to-r from-bgFrom to-bgTo text-white text-lg font-bold ">
        <p>{auth.user?.fullname[0] || "A"}</p>
      </div>
      {showSidebarMenu && (
        <div className="flex flex-row justify-between items-center w-full">
          <p className="whitespace-nowrap">{auth.user?.fullname || "Admin"}</p>
        </div>
      )}
    </div>
  );
};

export default AdminMenu;
