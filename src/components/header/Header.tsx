import Profile from "./Profile";
import SidebarButton from "./SidebarButton";

const Header = () => {
  return (
    <div className="flex items-center justify-between sticky top-0 z-10 bg-white h-16 min-h-16 px-8">
      <div>
        <SidebarButton />
      </div>
      <div className="flex items-center gap-10">
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
