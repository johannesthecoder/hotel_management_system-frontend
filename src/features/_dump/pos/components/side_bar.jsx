import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { TfiSettings } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";

export default function PosSideBar({ currentPage }) {
  return (
    <div className="flex flex-col justify-between w-12 md:w-20 rounded-lg mr-3 bg-raya-white">
      <div className="">
        <h1 className="flex flex-col items-center font-bold text-lg m-2">
          <span>food</span>
          <span>
            <span className="text-raya-secondary">@</span>
            <span className="text-raya">Raya</span>
          </span>
        </h1>
        <div className="h-9"></div>
        <div className="bg-raya-white rounded-lg p-2">
          {[
            {
              label: "menu",
              icon: <BiFoodMenu className="text-lg" />,
            },
            {
              label: "orders",
              icon: <IoFastFoodOutline className="text-lg" />,
            },
            {
              label: "report  ",
              icon: <TbReportSearch className="text-lg" />,
            },
            {
              label: "status",
              icon: <MdOutlineDashboard className="text-lg" />,
            },
            {
              label: "setting",
              icon: <TfiSettings className="text-lg" />,
            },
          ].map((element) => (
            <Link
              to={`/${element.label}`}
              className={`flex flex-col justify-center items-center pt-2 md:pt-3 pb-2 mt-3 first:mt-0 rounded-lg ${
                element.label === currentPage
                  ? "bg-raya-primary text-raya-white"
                  : "bg-raya-light text-raya-secondary"
              }
                hover:bg-raya-primary hover:text-raya-white
              `}
            >
              {element.icon}
              <span className="hidden md:inline mt-1 capitalize">
                {element.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-raya-black text-raya-white rounded-lg px-1 py-2 overflow-hidden">
        <div className="flex justify-center items-center self-center w-8 h-8 rounded-full bg-raya-secondary mb-2">
          <FaRegUser className="text-raya-white" />
        </div>
        <span className="text-center">Gillian</span>
        <small className="text-center italic">Reception</small>
      </div>
    </div>
  );
}
