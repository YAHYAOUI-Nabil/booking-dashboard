import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
const Profile = () => {
  return (
    <div className="flex flex-row gap-4">
      <NavLink to="/">
        <MdDashboard className="w-5 h-5" />
      </NavLink>
      <ProfileDropdown />
    </div>
  );
};

export default Profile;
