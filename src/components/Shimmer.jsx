import React from "react";
import ShimmerCard from "./ShimmerCard";
import "../../style.css";
const HomeShimmer = () => {
  const shimmerUICards = [];
  for (let i = 0; i < 20; i++) {
    shimmerUICards.push(<ShimmerCard key={i} />);
  }

  return <div className="restaurantCard">{shimmerUICards}</div>;
};

export default HomeShimmer;
