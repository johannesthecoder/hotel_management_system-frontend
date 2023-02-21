import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function RestaurantLandingPage() {
  return (
    <div className="h-full flex flex-col justify-center items-center border">
      <div className="text-2xl">
        This is the landing/dashboard/ page for RESTAURANT
      </div>
      <Link
        to={"/system/restaurant/menu"}
        className="block p-2 mt-1 border-b hover:mb-1 hover:mt-0"
      >
        <span>Goto Menu</span>
        <IoMdArrowRoundForward className="ml-2 inline" />
      </Link>
      <Link
        to={"/system/restaurant/pos"}
        className="block p-2 mt-1 border-b hover:mb-1 hover:mt-0"
      >
        <span>Goto Pos</span>
        <IoMdArrowRoundForward className="ml-2 inline" />
      </Link>
      <Link
        to={"/system/restaurant/kitchen"}
        className="block p-2 mt-1 border-b hover:mb-1 hover:mt-0"
      >
        <span>Goto Kitchen</span>
        <IoMdArrowRoundForward className="ml-2 inline" />
      </Link>
    </div>
  );
}
