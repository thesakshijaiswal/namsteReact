import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Hello react",
);
const heading2 = React.createElement(
  "h2",
  { id: "title", key: "h2" },
  "Namaste react",
);
const heading3 = (
  <ul>
    <li>Home</li>
    <li>About us </li>
    <li>Blogs </li>
  </ul>
);
//jsx
const heading4 = <h1>Now im utilising jsx</h1>;
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
  heading3,
  heading4,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
