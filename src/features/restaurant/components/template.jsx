import { useState } from "react";
import { GiCampCookingPot, GiMeal } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { TbMathSymbols } from "react-icons/tb";

export default function KitchenPage() {
  const [currentPage, setCurrentPage] = useState("pos");
  var navigationItems = [
    { icon: <GiMeal />, link: "pos" },
    { icon: <GiCampCookingPot />, link: "kitchen" },
    { icon: <BiFoodMenu />, link: "menu" },
    { icon: <TbMathSymbols />, link: "report" },
  ];

  return (
    <div className="h-full flex justify-between ">
      <div className="w-80 flex flex-col gap-1.5">
        <div className="grow border rounded"></div>
        <div className="py-1 px-4 flex justify-between border rounded">
          {navigationItems.map((v) => (
            <button
              onClick={() => setCurrentPage(v.link)}
              className={`pt-1 grow flex flex-col justify-center items-center ${
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
            </button>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
