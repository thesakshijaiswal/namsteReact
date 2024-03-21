import RestaurantCard from "./RestaurantCard";
import { cardContent } from "../constants";
import { useState } from "react";
const Body = () => {
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(); //To create state variable

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          className="searchBar"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="searchBtn">Search</button>
      </div>
      <div className="restaurantCard">
        {cardContent.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
