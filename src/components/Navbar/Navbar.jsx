import { LuShoppingCart } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ cartProducts }) => {
  return (
    <div className="bg-white border-b-2 border-b-[#F2F2F2] sticky top-0 z-50">
      {/* Navbar Start (Logo + Mobile Menu) */}
      <div className="myNav navbar md:w-8/12 w-11/12 mx-auto">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Menu"
            >
              <RxHamburgerMenu className="text-2xl" />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-white rounded-box w-52 font-semibold text-[#101727]"
            >
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <h2 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-2xl sm:text-3xl font-semibold">
            DigiTools
          </h2>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-[#101727] font-semibold">
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Navbar End (Cart + Buttons) */}
        <div className="navbar-end flex items-center gap-2">
          <div className="indicator">
            <LuShoppingCart className="text-xl" />
            {cartProducts.length > 0 && (
              <span className="w-4 h-4 grid place-items-center rounded-full text-[10px] font-semibold indicator-item bg-red-500 text-white">
                {cartProducts.length}
              </span>
            )}
          </div>
          <button className="btn btn-sm border-0 bg-white font-semibold">
            Login
          </button>
          <button className="btn btn-sm rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-5 font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
