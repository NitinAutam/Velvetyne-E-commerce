import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const SUBTOTAL = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Heading */}
      <div className="text-3xl">
        <Title text1="Your" text2="Cart"  />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-6">
        {/* Left: Cart Items */}
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={`${item._id}-${item.selectedSize}`}
                _id={item._id}
                name={item.name}
                image={item.image}
                selectedSize={item.selectedSize}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Right: Billing Summary */}
        <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6 mt-8 lg:mt-0 lg:ml-auto">
          <div className="text-xl font-semibold text-gray-800 mb-4">
            <span className="text-lg font-normal">Order Summary</span>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between text-gray-700 text-lg border-b pb-3 mb-3">
            <span>Subtotal</span>
            <span className="font-bold">${SUBTOTAL}</span>
          </div>

          {/* Shipping Fee */}
          <div className="flex justify-between text-gray-700 text-lg border-b pb-3 mb-3">
            <span>Shipping Fee</span>
            <span className="font-bold">$10</span>
          </div>

          {/* Total */}
          <div className="flex justify-between text-gray-900 font-bold text-xl mb-4">
            <span>Total</span>
            <span>${SUBTOTAL + 10}</span>
          </div>

          {/* Checkout Button */}
          <Link to={'/placeorder'}>
          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
            PROCEED TO CHECKOUT
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
