import {
  MdDashboard,
  MdBedroomParent,
  MdOutlineDiscount,
  MdReviews,
  MdOutlinePayments,
} from "react-icons/md";
import { FaRestroom, FaHotel, FaIdeal } from "react-icons/fa";
import { FaMapLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { GrUserAdmin } from "react-icons/gr";
import { useAppContext } from "../../app/contexts/AppContext";
import { NavLink } from "react-router-dom";

const MenuItems = () => {
  const { showSidebarMenu } = useAppContext();
  return (
    <div className="flex flex-col gap-1">
      {[
        {
          key: "dashboard",
          path: "/",
          name: "Dashboard",
          icon: <MdDashboard className="h-6 w-6" />,
        },
        {
          key: "rooms",
          path: "/rooms",
          name: "Rooms",
          icon: <MdBedroomParent className="h-6 w-6" />,
        },
        {
          key: "bookings",
          path: "/bookings",
          name: "Bookings",
          icon: <FaRestroom className="h-6 w-6" />,
        },
        {
          key: "guests",
          path: "/guests",
          name: "Guests",
          icon: <FaPeopleGroup className="h-6 w-6" />,
        },
        {
          key: "users",
          path: "/users",
          name: "Administrators",
          icon: <GrUserAdmin className="h-6 w-6" />,
        },
        {
          key: "hotels",
          path: "/hotels",
          name: "Hotels",
          icon: <FaHotel className="h-6 w-6" />,
        },
        {
          key: "discounts",
          path: "/discounts",
          name: "Discounts",
          icon: <MdOutlineDiscount className="h-6 w-6" />,
        },
        {
          key: "locations",
          path: "/locations",
          name: "Locations",
          icon: <FaMapLocationDot className="h-6 w-6" />,
        },
        {
          key: "deals",
          path: "/deals",
          name: "Deals",
          icon: <FaIdeal className="h-6 w-6" />,
        },
        {
          key: "payments",
          path: "/payments",
          name: "Payments",
          icon: <MdOutlinePayments className="h-6 w-6" />,
        },
        {
          key: "reviews",
          path: "/reviews",
          name: "Reviews",
          icon: <MdReviews className="h-6 w-6" />,
        },
      ].map((link) => (
        <NavLink
          key={link.key}
          to={link.path}
          className={({ isActive }) =>
            [
              isActive ? "text-white bg-[#0033FF] hover:bg-[#0033FF]" : "",
              "flex flex-row gap-4 py-3 rounded-md hover:bg-black/15",
            ].join(" ")
          }
        >
          <div className="flex justify-center items-center w-8 min-w-8">
            {link.icon}
          </div>
          {showSidebarMenu && <p className="whitespace-nowrap">{link.name}</p>}
        </NavLink>
      ))}
    </div>
  );
};

export default MenuItems;
