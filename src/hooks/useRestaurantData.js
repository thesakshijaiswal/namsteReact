import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const useRestaurantData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async() => {
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
      setAllRestaurants(APICall);
      setFilteredRestaurants(APICall);

    } catch (error) {
      console.log("Oops! Something went wrong...");
    }
  };
  return {
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  };
};

export default useRestaurantData;
