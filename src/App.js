import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
//import Body from "./components/Body";
import Footer from "./components/Footer";
import { Home } from "./pages";

const AppLayout = () => {
  return (
    <div className="bg-[#f7f4f4] min-h-screen w-full">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
