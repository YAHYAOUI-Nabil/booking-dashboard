import { MdDashboard, MdNotifications, MdPerson } from "react-icons/md";
const Profile = () => {
  return (
    <div className="flex flex-row gap-4">
      <MdDashboard className="w-5 h-5 cursor-pointer" />
      <MdNotifications className="w-5 h-5 cursor-pointer" />
      <MdPerson className="w-5 h-5 cursor-pointer" />
    </div>
  );
};

export default Profile;
