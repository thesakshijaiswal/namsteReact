const Navbar = () => (
  <div className="navbar h-32 flex bg-[#f7f4f4]">
    <div className="logo font-bold">
      FoodFunk
      <i className="ri-bowl-fill"></i>
    </div>
    <ul className="flex">
      <li>
        Home<i className="ri-home-smile-fill"></i>
      </li>
      <li>
        About<i className="ri-hotel-fill"></i>
      </li>
      <li>
        Offers<i className="ri-money-rupee-circle-fill"></i>
      </li>
      <li>
        Cart<i className="ri-shopping-cart-2-fill"></i>
      </li>
      <i className="ri-menu-3-line"></i>
    </ul>
  </div>
);
export default Navbar;
