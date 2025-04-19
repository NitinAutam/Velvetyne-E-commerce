import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { search, setSearch, setshowSearch } = useContext(ShopContext);

  const totQuantity = cartItems.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return (
    <div className="flex items-center justify-between py-5 mx-24 font-medium border-b-2 ">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="w-36" />
      </Link>

      {/* Navbar links for Home, Collection, About, Contact */}
      <ul className="flex gap-6 font-sans uppercase text-black text-opacity-80">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative ${
                isActive
                  ? "after:w-[60%] after:border-gray-600"
                  : "opacity-90 hover:after:w-[60%] hover:after:border-gray-400"
              } hover:opacity-100 after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-4px] after:border-b-2 after:transition-all after:duration-300`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `relative ${
                isActive
                  ? "after:w-[60%] after:border-gray-600"
                  : "opacity-90 hover:after:w-[60%] hover:after:border-gray-400"
              } hover:opacity-100 after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-4px] after:border-b-2 after:transition-all after:duration-300`
            }
          >
            Collection
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative ${
                isActive
                  ? "after:w-[60%] after:border-gray-600"
                  : "opacity-90 hover:after:w-[60%] hover:after:border-gray-400"
              } hover:opacity-100 after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-4px] after:border-b-2 after:transition-all after:duration-300`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative ${
                isActive
                  ? "after:w-[60%] after:border-gray-600"
                  : "opacity-90 hover:after:w-[60%] hover:after:border-gray-400"
              } hover:opacity-100 after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-4px] after:border-b-2 after:transition-all after:duration-300`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Navbar links for Search, Login, Cart (no hover or active opacity styles) */}
      <ul className="flex gap-5">
        <li>
          <NavLink to="/search">
            <img
              src={assets.search_icon}
              alt=""
              className="w-5"
              onClick={() => {
                console.log("Clicked search icon");
                setshowSearch(true); // Hides search bar
              }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <img src={assets.profile_icon} alt="" className="w-5" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <div className="relative">
              <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                {totQuantity}
              </p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
