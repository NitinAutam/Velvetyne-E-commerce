import React, { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import {
  showSuccess,
  showError,
  showInfo,
  showWarning,
} from "../utils/toastUtils";

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { setshowSearch } = useContext(ShopContext);
  const { loggedIn, handleLogout } = useAuth();

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    if (!loggedIn) {
      setShowDropdown(true);
      return;
    }
    setShowDropdown((prev) => !prev);
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
    setShowDropdown(false);
  };

  const totQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex items-center justify-between py-5 mx-24 font-medium border-b-2">
      <Link to={"/"}>
        <img src={assets.logo} alt="Logo" className="w-36" />
      </Link>

      <ul className="flex gap-6 font-sans uppercase text-black text-opacity-80">
        {["/", "/collection", "/about", "/contact"].map((path, idx) => {
          const labels = ["Home", "Collection", "About", "Contact"];
          return (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative ${
                    isActive
                      ? "after:w-[60%] after:border-gray-600"
                      : "opacity-90 hover:after:w-[60%] hover:after:border-gray-400"
                  } hover:opacity-100 after:absolute after:left-1/2 after:translate-x-[-50%] after:bottom-[-4px] after:border-b-2 after:transition-all after:duration-300`
                }
              >
                {labels[idx]}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <ul className="flex gap-5 items-center">
        <li>
          <NavLink to="/search">
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-5"
              onClick={() => setshowSearch(true)}
            />
          </NavLink>
        </li>

        <li className="relative" ref={dropdownRef}>
          <img
            src={assets.profile_icon}
            alt="Profile"
            className="w-5 cursor-pointer hover:opacity-80 transition"
            onClick={handleProfileClick}
          />

          {showDropdown && (
            <div
              role="menu"
              aria-label="User menu"
              className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md z-50 text-sm font-medium overflow-hidden animate-fade-in"
            >
              {loggedIn ? (
                <>
                  <a
                    href="https://github.com/NitinAutam/Velvetyne-E-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    GitHub
                  </a>

                  <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                      `block px-4 py-2 transition ${
                        isActive
                          ? "bg-gray-100 font-semibold"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    Orders
                  </NavLink>

                  <button
                    onClick={handleLogoutClick}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      navigate("/login");
                      showInfo("Redirecting to login...");
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Login / Sign Up
                  </button>

                  <a
                    href="https://github.com/NitinAutam/Velvetyne-E-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    GitHub
                  </a>
                </>
              )}
            </div>
          )}
        </li>

        <li>
          <NavLink to="/cart">
            <div className="relative">
              <img src={assets.cart_icon} alt="Cart" className="w-5 min-w-5" />
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
