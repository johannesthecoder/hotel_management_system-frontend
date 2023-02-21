import { FaPlus, FaMinus } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function OrderBody({ items }) {
  return (
    <div className="p-1">
      {items.map((v) => (
        <div
          key={v.itemId}
          className="mb-1 flex gap-2 justify-between border-b border-colors-primary-light rounded"
        >
          <div className="p-2 grow flex flex-col justify-between">
            <div className="font-bold capitalize">{v.itemName}</div>
            {v.accompanimentName && (
              <div>
                with
                <span className="italic"> {v.accompanimentName}</span>
              </div>
            )}
          </div>
          {/* <div className="w-0.5 my-1 bg-colors-grey rounded"></div> */}
          <div className="py-1 w-28 shrink-0 flex gap-1 justify-between items-center">
            <div className="">{v.unitPrice} </div>
            <span className="mt-1 text-2xl">*</span>{" "}
            <div className="flex flex-col items-center">
              <button className="p-0.5 border rounded hover:bg-colors-primary hover:text-colors-white">
                <FaPlus className="text-xs font-light" />
              </button>
              <div className="">{v.quantity}</div>
              <button className="p-0.5 border rounded hover:bg-colors-primary hover:text-colors-white">
                <FaMinus className="text-xs font-light" />
              </button>
            </div>
            <div className="flex flex-col justify-between items-end">
              <button className="mb-1.5">
                <MdCancel size={15} className="text-colors-failure" />
              </button>
              <div className="mr-1.5 font-bold">
                {v.unitPrice * v.quantity}{" "}
              </div>
              <div className="invisible">@</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
