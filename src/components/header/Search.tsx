import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <form className="flex flex-row gap-2">
      <input
        className="block py-1 px-0 w-full text-sm text-gray-700 bg-transparent
      border-0 border-b border-gray-300 appearance-none focus:outline-none
      focus:ring-0 focus:border-purple-600 transition-colors duration-200
      delay-0 ease-in-expo peer"
        type="text"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="flex justify-center items-center w-12 h-10 rounded-full bg-white hover:shadow-[-5px_5px_25px_-5px_rgb(0,0,0,0.25)] cursor-pointer"
      >
        <AiOutlineSearch className="w-5 h-5 text-gray-300" />
      </button>
    </form>
  );
};

export default Search;
