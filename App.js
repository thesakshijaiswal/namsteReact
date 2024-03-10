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
        Home<i class="ri-home-smile-fill"></i>
      </li>
      <li>
        About<i class="ri-hotel-fill"></i>
      </li>
      <li>
        Offers<i class="ri-money-rupee-circle-fill"></i>
      </li>
      <li>
        Cart<i class="ri-shopping-cart-2-fill"></i>
      </li>
      <i class="ri-menu-3-line"></i>
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
