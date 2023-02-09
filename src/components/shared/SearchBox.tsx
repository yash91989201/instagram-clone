import { ReactElement } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox(): ReactElement {
  return (
    <div className="relative hidden max-w-3xl overflow-hidden bg-gray-100 border border-gray-400 rounded md:block active:border-gray-600 ">
      <div className="absolute text-sm top-2 left-2">
        <FaSearch className="text-gray-800" />
      </div>
      <input
        type="text"
        className="px-2 py-1 pl-8 text-sm bg-transparent peer"
        placeholder="Search"
      />
    </div>
  );
}
