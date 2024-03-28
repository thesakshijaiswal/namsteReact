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
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.51981990724166&lng=73.86026275822753&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
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
