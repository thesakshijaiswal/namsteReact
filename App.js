import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => (
  <div className="heroSection">
    <div className="logo">
      <i class="ri-restaurant-fill"></i>FoodFunk
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
