import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => (
  <div className="navbar">
    <div className="logo">
      FoodFunk
      <i className="ri-bowl-fill"></i>
    </div>
    <ul>
      <li>
        Home<i className="ri-home-smile-fill"></i>
      </li>
      <li>
        About<i className="ri-hotel-fill"></i>
      </li>
      <li>
        Offers<i className="ri-money-rupee-circle-fill"></i>
      </li>
      <li>
        Cart<i className="ri-shopping-cart-2-fill"></i>
      </li>
      <i className="ri-menu-3-line"></i>
    </ul>
  </div>
);

const cardContent = [
  {
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Burger King",
    cuisines: ["American", "Burger"],
    rating: "4.5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "kitchen king",
    cuisines: ["South indian", "uttapam"],
    rating: "4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KFC",
    cuisines: ["noddles", "Pizza", "Burger"],
    rating: "4.6",
  },
];
const RestaurantCard = ({ image, name, cuisines, rating }) => {
  return (
    <div className="foodCard">
      <div className="cardInfo">
        <img src={image} alt="American Burger" />
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <h4>
          Ratings: {rating}
          <i className="ri-star-fill"></i>
        </h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div>
      <RestaurantCard {...cardContent[0]} />
      <RestaurantCard {...cardContent[1]} />
      <RestaurantCard {...cardContent[2]} />
    </div>
  );
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
