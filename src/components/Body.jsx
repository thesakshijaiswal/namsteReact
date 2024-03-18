import RestaurantCard from "./RestaurantCard";
import { cardContent } from "../constants";
const Body = () => {
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          className="searchBar"
          id="searchBar"
          placeholder="Search"
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
