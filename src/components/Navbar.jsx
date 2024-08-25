import brandLogo from "../../public/brandLogo.png"
const Navbar = () => (
  <nav className="p-3 flex justify-between">
    <a href="#" id="brand" className="flex gap-2 items-center">
      <img src={brandLogo} alt="brandLogo" className="w-32 object-cover max-w-32 max-h-32" />
      <span className="tracking-wider text-3xl font-extrabold">FoodFunk</span>
    </a>
  </nav>
);
export default Navbar;
