import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoBedOutline,
  IoRestaurantOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { RiDashboardLine } from "react-icons/ri";

export default function NavigationItems() {
  const [currentRoute, setCurrentRoute] = useState("dashboard");
  var navigationItems = [
    {
      outlineIcon: <RiDashboardLine className="text-xl md:text-2xl" />,
      link: "dashboard",
    },
    {
      outlineIcon: <IoBedOutline className="text-xl md:text-2xl" />,
      link: "accommodation",
    },
    {
      outlineIcon: <IoRestaurantOutline className="text-xl md:text-2xl" />,
      link: "restaurant",
    },
    {
      outlineIcon: <IoStorefrontOutline className="text-xl md:text-2xl" />,
      link: "inventory",
    },
  ];

  return (
    <div className="ms-3 flex gap-3">
      {navigationItems.map((v) => (
        <Link
          key={v.link}
          to={`/system/${v.link}`}
          onClick={() => setCurrentRoute(v.link)}
          className={`p-2.5  mt-1 hover:text-colors-primary hover:mb-1 hover:mt-0 hover:cursor-pointer
        ${
          v.link === currentRoute
            ? "border-colors-primary text-colors-primary border-b-2"
            : "text-colors-grey "
        }`}
        >
          {v.outlineIcon}
        </Link>
      ))}
    </div>
  );
}
