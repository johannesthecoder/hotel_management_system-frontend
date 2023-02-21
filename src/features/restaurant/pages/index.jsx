// #route
import { Link, Outlet } from "react-router-dom";
// #redux
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentPage, selectCurrentPage } from "../slice";
// #icons
import { GiCampCookingPot, GiMeal } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { TbMathSymbols } from "react-icons/tb";
// #components
import UserInfo from "../../../core/components/user_info";

export default function RestaurantIndexPage() {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  var navigationItems = [
    { icon: <GiMeal />, link: "pos" },
    { icon: <GiCampCookingPot />, link: "kitchen" },
    { icon: <TbMathSymbols />, link: "report" },
    { icon: <FiSettings />, link: "setting" },
  ];

  return (
    <div className="h-full flex flex-col gap-2 justify-between overflow-hidden">
      <div className="grow overflow-auto">
        <Outlet />
      </div>
      <div className="flex gap-2">
        <div className="w-56 sm:w-72 md:w-80 lg:w-96  py-1 px-0.5 md:px-4 flex justify-between border rounded">
          {navigationItems.map((v) => (
            <Link
              key={v.link}
              to={`/system/restaurant/${v.link}`}
              onClick={() => dispatch(updateCurrentPage(v.link))}
              className={`pt-1 grow flex flex-col justify-center items-center rounded ${
                v.link === currentPage
                  ? "text-3xl text-colors-primary"
                  : "text-xl text-colors-grey hover:bg-colors-primary-light "
              }`}
            >
              {v.icon}
              <small
                className={`${
                  v.link === currentPage ? "hidden" : "text-sm capitalize"
                }`}
              >
                <small>{v.link}</small>
              </small>
            </Link>
          ))}
        </div>
        <div className="grow flex  gap-2 justify-between items-stretch">
          <div className="grow flex justify-center items-center border rounded">
            Additional Infos
          </div>
          <UserInfo name="yohannes" position="cashier" />
        </div>
      </div>
    </div>
  );
}
