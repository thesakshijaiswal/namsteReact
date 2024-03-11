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
const AppLayout = () => {
  <>
    <Header />
    <body />
  </>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
