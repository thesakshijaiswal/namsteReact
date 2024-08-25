import React, { useState } from 'react'
import { onSearchFilter } from "../utils/searchFilters"
const SearchBar = ({setFilteredRestaurants, allRestaurants}) => {
    const [searchText, setSearchText] = useState("");

    const handleEnter = (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          onSearchFilter(allRestaurants, setFilteredRestaurants, searchText);
        }
      };
  return (
    <div className="mt-20 w-11/12 flex items-center mx-auto">
        <input
         type="text"
         placeholder="Search your favorite restaurant"
         className='md:w-72 px-5 py-3 text-lg rounded-2xl shadow-2xl mr-2 truncate outline-none border-none'
         value={searchText}
         onChange={(e) => {
         setSearchText(e.target.value);
         onkeydown = {handleEnter}
          }}
         />
         <button
          onClick={() => {
           onSearchFilter(allRestaurants, setFilteredRestaurants, searchText);
         }}
         className='bg-[#EF2A39] text-white px-5 py-3 shadow-2xl rounded-2xl cursor-pointer hover:bg-[#db2736]'
         >
         <i className="ri-search-2-line text-xl"></i>
         </button>
    </div>
  );
}

export default SearchBar;