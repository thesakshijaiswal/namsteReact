import React from 'react'
import RestaurantCard from "./RestaurantCard";
const RestaurantList = ({ restaurants }) => {
  return (
    <div>
    <div className="restaurantCard grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-4 xxl:gap-5 place-items-center container py-20 mx-auto">
      {restaurants?.map((restaurant) => {
        return (
          <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
        );
      })}
    </div>
    </div>
  );
};

export default RestaurantList;