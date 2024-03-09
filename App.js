import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => <h1>Namaste react assignment 4 question 1</h1>;
const Header = () => {
  return (
    <div className="title">
      <Title />
      <h1>Hello React</h1>
      <h2>welcome to the world of react</h2>
      <h3>Assignment 4</h3>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header></Header>);
