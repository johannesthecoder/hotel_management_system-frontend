import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function LandingPage() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="text-2xl">This is the landing page</div>
      <div className="mt-5">
        <Link
          to={"/system"}
          className="block p-2 mt-1 border-b hover:mb-1 hover:mt-0"
        >
          <span>Goto System</span>
          <IoMdArrowRoundForward className="ml-2 inline" />
        </Link>
      </div>
    </div>
  );
}
