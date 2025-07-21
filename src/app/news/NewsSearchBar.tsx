export default function NewsSearchBar() {
  return (
    <div className="w-full flex justify-center py-8 bg-white">
      <form className="flex w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-2 rounded-r font-semibold"
        >
          Search
        </button>
      </form>
    </div>
  );
} 