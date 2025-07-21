import { LuSearch } from "react-icons/lu";

export default function SearchBar({placeholder}:any) {
  return (
    <div className="flex justify-center py-8 w-[50%]">
      <form className="flex w-full max-w-2xl">
        <div className="flex-1 flex items-center gap-1 bg-white rounded px-4 py-2 text-[12px]">
          <LuSearch className="text-gray-500 text-[18px] cursor-pointer" />
          <input
            type="text"
            placeholder={placeholder}
            className="flex-1 px-4 py-2 focus:outline-none text-[12px] bg-transparent"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-2 rounded text-[14px] cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
} 