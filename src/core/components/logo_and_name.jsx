import { IoLogoAppleAr } from "react-icons/io5";

export default function LogoAndName() {
  return (
    <div className="px-2 py-1 flex gap-3 items-center border-0 md:border rounded text-colors-primary">
      <IoLogoAppleAr className="text-3xl md:text-5xl" />
      <div className="hidden md:block">
        <strong className="block text-2xl">RayaHotel</strong>
        <span className="italic">Nairobi</span>
      </div>
    </div>
  );
}
