import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants.js";
import { useState, useEffect } from "react";
import { ShimmerHome } from "../shimmer";

function filterData(searchText, restaurants) {
  const filterResult = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterResult;
}
const Body = () => {
  // searchText is a local state variable
  const [searchText, setSearchText] = useState(""); //To create state variable
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      const data = JSON.parse(jsonData.contents);
      console.log("Api call", data);
      const APICall =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log("Api call is made here!", APICall);
      setRestaurants(APICall);
      setFilteredRestaurants(APICall);
    } catch (error) {
      console.log("Oops! something went wrong");
    }
  }

  return restaurants.length === 0 ? (
    <ShimmerHome />
  ) : (
    <>
      <div className="searchBar bg-[#f7f4f4]">
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
      <div className="bg-[#f7f4f4]">
      <div className="restaurantCard grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center container py-20 mx-auto">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
          );
        })}
      </div>
      </div>
    </>
  );
};
export default Body;
