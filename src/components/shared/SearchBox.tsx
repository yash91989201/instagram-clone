import { ReactElement } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox(): ReactElement {
  return (
    <div className="relative w-56 md:w-72 ">
      <div className="absolute text-sm top-2.5 left-2">
        <FaSearch className="text-gray-800" />
      </div>
      <input
        type="text"
        className="w-full px-2 py-1 pl-8 border border-gray-200 rounded focus:bg-transparent bg-gray-50 text-smbg-gray-100 focus:outline-none focus:border-gray-400 "
        placeholder="Search"
      />
    </div>
  );
}
