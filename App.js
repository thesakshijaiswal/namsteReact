import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => (
  <div className="navbar">
    <div className="logo">FoodFunk</div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Offers</li>
      <li>Cart</li>
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
