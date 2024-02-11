import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "title" }, "Hello react");
const heading2 = React.createElement("h2", { id: "title" }, "Namaste react");
const container = React.createElement("div", {}, [heading, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
