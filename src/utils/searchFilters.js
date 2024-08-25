export const onSearchFilter = (allRestaurants,setFilteredRestaurants,searchText) => {
  
    const filterData = allRestaurants?.filter((restaurant) => 
      restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    setFilteredRestaurants(filterData)
};