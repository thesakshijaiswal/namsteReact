import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => (
  <div className="navbar">
    <div className="logo" style={{ color: "brown" }}>
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

const RestaurantCard = () => {
  return (
    <div className="foodCard">
      <img
        src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="American Burger"
      />
      <h2>Burger King</h2>
      <p>American ,Burger</p>
      <h4>Ratings: 4.5</h4>
    </div>
  );
};
const Body = () => {
  return <RestaurantCard />;
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
