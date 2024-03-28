import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../constants";
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
  const [restaurants, setRestaurants] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    const APICall =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      data?.data?.cards[2]?.card?.card?.gridElement?.infoWithStyle?.restaurants;
    console.log(APICall);
    setRestaurants(APICall);
    setFilteredRestaurants(APICall);
  }

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
