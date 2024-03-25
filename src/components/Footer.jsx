import { useState } from "react";
const Footer = () => {
  const [value, setValue] = useState(0);
  return (
    <footer>
      <div className="container">
        <button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          -
        </button>
        <h3>{value}</h3>
        <button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +
        </button>
      </div>
      <p>Copyright © 2024 </p>
    </footer>
  );
};
export default Footer;
