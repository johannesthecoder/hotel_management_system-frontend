import { Outlet } from "react-router-dom";
import AppBar from "../components/app_bar";

export default function SystemHomePage() {
  return (
    <div className="h-full flex flex-col gap-3">
      <div>
        <AppBar />
      </div>
      <div className="flex grow">
        <Outlet />
      </div>
    </div>
  );
}
