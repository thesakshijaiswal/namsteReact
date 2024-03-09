import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => (
  <div className="heroSection">
    <div className="logo">LOGO</div>
    <div className="search">
      <input type="search" name="Searchbar" id="searchbar" />
    </div>
    <div className="userIcon">userIcon</div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
