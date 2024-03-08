import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Hello react",
);
const Heading2 = () => (
  <ul>
    <li key="l1">Home</li>
    <li key="l2">About us </li>
    <li key="l3">Blogs </li>
  </ul>
);
//This how jsx looks
const heading3 = <h1>Now im utilising jsx</h1>;

// Components in React

//- Functional component (New)
const HeaderComponent = () => {
  return (
    <div>
      <Heading2 />
      {heading}
      {
        //any js code can go inside of this
        console.log(20 + 30)
      }
      <h3>This is functional component</h3>
      <p>description for functional component</p>
    </div>
  );
};
// -Class component (Old)

const root = ReactDOM.createRoot(document.getElementById("root"));
// render a jsx component using below code line
root.render(<HeaderComponent />);
