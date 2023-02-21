export default function OrderHeader({
  id,
  orderedBy,
  orderedAt,
  status,
  balance,
}) {
  return (
    <div className="p-2 flex justify-between border rounded">
      <div className="flex flex-col gap-1 justify-between">
        <div className="font-bold">#{id}</div>
        <div className="p-1 bg-colors-primary-light rounded">{status}</div>
        <div className="italic">{orderedBy}</div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className="text-colors-grey">
          @{new Date(orderedAt).toString().split(" ").slice(1, 5).join(" ")}
        </div>
        <div className="py-1.5 px-3.5 text-sm md:text-lg text-colors-primary border border-colors-primary font-bold rounded">
          ksh {balance}/=
        </div>
      </div>
    </div>
  );
}
