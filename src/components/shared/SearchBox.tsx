import { ReactElement } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox(): ReactElement {
  return (
    <div className="relative max-w-[160px]  md:max-w-xs hidden md:block  border-red-500 border">
      <div className="absolute  top-1.5 left-2">
        <FaSearch />
      </div>
      <input type="text" className="w-full h-full" />
    </div>
  );
}
