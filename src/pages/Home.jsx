import { SearchBar,RestaurantList } from "../components";
import { ShimmerHome } from "../shimmer";
import useRestaurantData from "../hooks/useRestaurantData";

const Home = () => {
    const {
        allRestaurants,
        filteredRestaurants,
        setFilteredRestaurants,
      } = useRestaurantData();

      return (
        allRestaurants?.length === 0 ? (
            <ShimmerHome />
        ) : (
            <>
            <SearchBar
            setFilteredRestaurants={setFilteredRestaurants}
            allRestaurants={allRestaurants}
          />
            <RestaurantList restaurants={filteredRestaurants} />
            </>
        )
      );
};

export default Home;