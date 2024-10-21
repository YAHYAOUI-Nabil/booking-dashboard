import { GrArticle, GrDocumentPerformance } from "react-icons/gr";
import { MdDatasetLinked } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { AiFillProduct } from "react-icons/ai";
import { useAppContext } from "../../app/contexts/AppContext";
import { NavLink } from "react-router-dom";

const MenuItems = () => {
  const { showSidebarMenu } = useAppContext();
  return (
    <div className="flex flex-col gap-1 px-4">
      {[
        {
          key: "kpi",
          path: "/",
          name: "KPI",
          icon: <GrDocumentPerformance className="h-6 w-6" />,
        },
        {
          key: "products",
          path: "/products",
          name: "Products",
          icon: <AiFillProduct className="h-6 w-6" />,
        },
        {
          key: "articles",
          path: "/articles",
          name: "Articles",
          icon: <GrArticle className="h-6 w-6" />,
        },
        {
          key: "Visited products",
          path: "/visited-products",
          name: "Visited products",
          icon: <MdDatasetLinked className="h-6 w-6" />,
        },
        {
          key: "users",
          path: "/users",
          name: "Administrators",
          icon: <GrUserAdmin className="h-6 w-6" />,
        },
      ].map((link) => (
        <NavLink
          key={link.key}
          to={link.path}
          className={({ isActive }) =>
            [
              isActive
                ? "text-white bg-gradient-to-r from-bgFrom to-bgTo"
                : "hover:bg-black/15",
              `flex flex-row gap-4 py-3 rounded-md ${
                showSidebarMenu ? "justify-start" : "justify-center"
              } `,
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
