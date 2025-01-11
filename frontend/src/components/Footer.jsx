import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      {/* Add padding for overall container */}
      <div className="mx-8 sm:mx-6 md:mx-8 lg:mx-32">
        {/* Grid layout for footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
          {/* Left Column: Logo and Description */}
          <div>
            <img src={assets.logo} className="mb-5 w-32" alt="Velvetyne Logo" />
            <p className="w-full md:w-2/3 text-gray-600">
              Velvetyne is more than just clothing; it's a statement of
              confidence and individuality. Whether you're owning the boardroom,
              strolling the city streets, or making memories on special
              occasions, Velvetyne is with you every step of the way, blending
              style with substance.
            </p>
          </div>
          {/* Center Column: Company Links */}
          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* Right Column: Contact Information */}
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>+1-000-000-0000</li>
              <li>Nothing@gmail.com</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ Lmcqueen.dev - All Right Reserved.</p>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
