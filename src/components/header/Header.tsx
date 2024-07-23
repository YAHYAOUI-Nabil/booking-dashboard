import Profile from "./Profile";
import Search from "./Search";
import SidebarButton from "./SidebarButton";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <SidebarButton />
      </div>
      <div className="flex items-center gap-10">
        <div>
          <Search />
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
