import RestaurantCard from "./RestaurantCard";
import { cardContent } from "../constants";
import { useState, useEffect } from "react";

function filterData(searchText, restaurants) {
  const filterResult = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  return filterResult;
}
const Body = () => {
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); //To create state variable
  const [restaurants, setRestaurants] = useState(cardContent);
  const [filteredRestaurants, setFilteredRestaurants] = useState(cardContent);

  useEffect(() => {
    console.log("useEffect is called!");
  }, [searchText]);

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
        <button
          className="searchBtn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          <i className="ri-search-2-line"></i>
        </button>
      </div>
      <div className="restaurantCard">
        {filteredRestaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
