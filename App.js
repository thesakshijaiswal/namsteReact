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
const Heading3 = () => (
  <ul>
    <li key="l1">Home</li>
    <li key="l2">About us </li>
    <li key="l3">Blogs </li>
  </ul>
);
//This how jsx looks
const heading4 = <h1>Now im utilising jsx</h1>;
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
  heading4,
]);

// Components in React

//- Functional component (New)
const HeaderComponent = () => {
  return (
    <div>
      <Heading3 />
      {heading}
      {
        //any js code can go inside of this
        console.log(20 + 30)
      }
      <h3 key="h3">This is functional component</h3>
      <p key="para1">description for functional component</p>
    </div>
  );
};
// -Class component (Old)

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(container);
// render a jsx component using below code line
root.render(<HeaderComponent />);
