import Order from "../components/order";
import Menu from "../components/menu";

export default function PosIndexPage() {
  return (
    <div className="h-full flex gap-2 justify-center items-stretch overflow-hidden">
      <div className="w-56 sm:w-72 md:w-80 lg:w-96 shrink-0 flex flex-col gap-2  overflow-hidden">
        <Order />
      </div>
      <div className="grow flex flex-col gap-2 overflow-hidden">
        <Menu />
      </div>
    </div>
  );
}
