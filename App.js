import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => (
  <div className="heroSection">
    <div className="logo">
      <i class="ri-restaurant-fill"></i>FOODIE
    </div>
    <div className="search">
      <i class="ri-search-2-line"></i>
      <input
        type="search"
        name="Searchbar"
        id="searchbar"
        placeholder="Search here..."
      />
    </div>
    <div className="userIcon">
      <i class="ri-shield-user-line"></i>
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
