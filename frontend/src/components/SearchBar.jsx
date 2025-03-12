import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, showSearch, setshowSearch } = useContext(ShopContext);
  
  return (
    <div className="flex justify-center items-center bg-slate-200 h-16 px-6 py-3 w-full">
      {/* Search Input Container */}
      <div className="flex items-center w-[90%] max-w-[600px] bg-white rounded-lg border border-gray-300 px-4 shadow-md focus-within:ring-2 focus-within:ring-blue-400">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search here"
          className="w-full h-9 px-4 py-2 text-sm focus:outline-none"
          onChange={(e)=>setSearch(e.target.value)}
        />

        {/* Search Icon */}
        <img
          className="w-6 h-6 cursor-pointer p-1 hover:opacity-80"
          src={assets.search_icon}
          alt="Search"
        />

        {/* Clear (X) Icon - Positioned Properly Inside */}
      </div>
      <img
          src={assets.cross_icon}
          alt="Clear"
          className="w-5 h-5 cursor-pointer p-1 hover:opacity-80 ml-2"
        />
    </div>
  );
};

export default SearchBar;
