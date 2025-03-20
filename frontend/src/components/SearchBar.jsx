import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, setshowSearch } = useContext(ShopContext);

  return (
    <div className="flex justify-center items-center bg-gray-100 h-16 px-4 py-2 w-full">
      {/* Search Bar Container */}
      <div className="relative flex items-center w-[80%] max-w-[500px] bg-white rounded-lg border border-gray-300 px-4 py-1 shadow-md transition-all duration-300 ease-in-out focus-within:ring-2 focus-within:ring-blue-400">
        
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full h-8 px-3 py-2 text-sm bg-transparent focus:outline-none placeholder-gray-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Search Icon (Background appears only on hover) */}
        <img
          className="w-6 h-6 cursor-pointer p-1 rounded-full hover:bg-gray-300 transition-all duration-200 ease-in-out "
          src={assets.search_icon}
          alt="Search"
          onClick={() => setshowSearch(true)}
        />
      </div>

      {/* Clear (X) Icon - Background appears only on hover */}
        <img
          src={assets.cross_icon}
          alt="Clear"
          className="w-6 h-6 cursor-pointer p-1 rounded-full hover:bg-gray-300 transition-all duration-200 ease-in-out  ml-3"
          onClick={() => {
            setSearch(""); // Clears search input
            setshowSearch(false); // Hides search bar
          }}
        />
    </div>
  );
};

export default SearchBar;
