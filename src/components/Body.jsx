import RestaurantCard from "./RestaurantCard";
import { cardContent } from "../constants";
const Body = () => {
  return (
    <div className="restaurantCard">
      {cardContent.map((restaurant) => {
        return <RestaurantCard {...restaurant} key={restaurant.id} />;
      })}
    </div>
  );
};
export default Body;
