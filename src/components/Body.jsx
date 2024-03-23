import RestaurantCard from "./RestaurantCard";
import { cardContent } from "../constants";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterResult = restaurants.filter((restaurant) =>
    restaurant.name.includes(searchText),
  );
  return filterResult;
}
const Body = () => {
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); //To create state variable
  const [restaurants, setRestaurants] = useState(cardContent);

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
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantCard">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
