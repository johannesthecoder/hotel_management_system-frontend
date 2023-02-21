import UserInfo from "./user_info";
import LogoAndName from "./logo_and_name";
import NavigationItems from "./navigationItems";

export default function AppBar() {
  return (
    <div className="flex justify-between items-center">
      <LogoAndName />
      <div className="flex gap-6 justify-end items-center">
        <NavigationItems />
        <UserInfo name="yohannes" position="cashier" />
      </div>
    </div>
  );
}
