import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../slices";
// #icons
import { FiUser } from "react-icons/fi";

export default function UserInfo({ name, position }) {
  const loggedInUser = useSelector(selectLoggedInUser);

  return (
    <div className="px-2 py-1 flex gap-3 items-center border rounded">
      <div>
        <div className="font-bold capitalize">
          {loggedInUser.name.first + " " + loggedInUser.name.last[0] + "."}
        </div>
        <small className="italic capitalize">{position}</small>
      </div>
      <div className="hidden md:block h-6 border"></div>
      <FiUser className="hidden md:block text-2xl" />
    </div>
  );
}
