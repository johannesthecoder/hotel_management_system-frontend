import PosFilterBar from "../components/menu_filter_bar";

export default function PosMenuPage() {
  return (
    <div className="flex w-full grow gap-3 h-full overflow-auto">
      <div className="flex flex-col gap-3 w-6/12 md:w-7/12 lg:w-8/12 xl:w-9/12 2xl:10/12">
        <PosFilterBar />
        <div className="grow bg-raya-white rounded-lg"></div>
      </div>
      <div className="flex justify-center items-center bg-raya-white rounded-lg grow">
        Bill / Order display
      </div>
    </div>
  );
}
