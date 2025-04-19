import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { removeFromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { assets } from "../assets/assets";

const CartItem = ({ _id, name, price, selectedSize, image, quantity }) => {
  const { currency } = useContext(ShopContext);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-5xl mx-auto border-b pb-4">
      {/* Cart Item */}
      <div className="flex items-center justify-between mt-4 p-4 border rounded-lg shadow-sm">
        {/* Product Image */}
        <div className="w-24 h-24 flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 px-4">
          <p className="text-lg font-medium text-gray-900">{name}</p>
          <p className="text-gray-600 text-sm">
            {currency} {price}
          </p>
        </div>

        {/* Size Display */}
        <div className="px-4">
          <span className="border px-3 py-1 text-gray-700 font-medium">
            {selectedSize}
          </span>
        </div>

        {/* Quantity Display */}
        <div className="px-4">
          <input
            type="number"
            value={quantity}
            className="w-12 border rounded-md text-center"
            readOnly
          />
        </div>

        {/* Delete Button */}
        <div className="px-4">
  <button
    onClick={() => dispatch(removeFromCart({ _id , selectedSize}))}
    className="text-gray-500 hover:text-red-500"
    title="Remove item"
    aria-label="Remove item"
  >
    <img
      src={assets.bin_icon}
      alt="Remove"
      className="w-5 h-5 hover:scale-110 transition-transform duration-200"
    />
  </button>
</div>
      </div>
    </div>
  );
};

export default CartItem;
