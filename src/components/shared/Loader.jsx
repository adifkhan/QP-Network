import { LuLoader } from "react-icons/lu";

export default function Loader() {
  return (
    <div className="h-full flex flex-col items-center justify-between gap-1">
      <LuLoader size={30} color="#307777" className="animate-spin" />
    </div>
  );
}
