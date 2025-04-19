import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";

const PlaceOrder = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 flex flex-col lg:flex-row gap-12">
      {/* LEFT SIDE - DELIVERY INFO */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="text-3xl">
        <Title text1="Delivery" text2="Information"  />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First name" className="input-field" />
          <input type="text" placeholder="Last name" className="input-field" />
        </div>

        <input
          type="email"
          placeholder="Email address"
          className="input-field"
        />
        <input type="text" placeholder="Street" className="input-field" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="City" className="input-field" />
          <input type="text" placeholder="State" className="input-field" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Zipcode" className="input-field" />
          <input type="text" placeholder="Country" className="input-field" />
        </div>

        <input type="text" placeholder="Phone" className="input-field" />
      </div>

      {/* RIGHT SIDE - CART TOTALS & PAYMENT */}
      <div className="w-full mt-12 lg:w-1/2 space-y-8">
        <div>
          <div className="text-2xl">
          <Title text1={"Cart"} text2={"Totals"} /></div>
          <div className="mt-4 text-sm space-y-2">
            <div className="flex justify-between border-b py-2">
              <span>Subtotal</span>
              <span>$64.00</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Shipping Fee</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg py-2">
              <span>Total</span>
              <span>$74.00</span>
            </div>
          </div>
        </div>

        {/* PAYMENT METHODS */}
        <div>
          <h3 className="text-lg font-medium mb-2"><Title text1={"Payment"} text2={"Method"}/></h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="payment-option">
              <input type="radio" name="payment" />
              <img src={assets.stripe_logo} className="h-6" alt="Stripe" />
            </label>
            <label className="payment-option">
              <input type="radio" name="payment" />
              <img src={assets.razorpay_logo} className="h-5" alt="Razorpay" />
            </label>
            <label className="payment-option">
              <input type="radio" name="payment" />
              <div className="flex items-center gap-2">
                <span>Cash on Delivery</span>
              </div>
            </label>
          </div>
        </div>

        {/* PLACE ORDER BUTTON */}
        <div>
          <button className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition-all">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
