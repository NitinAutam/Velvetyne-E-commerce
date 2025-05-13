import React, { useState } from "react";

const Newsletter = () => {
  const [name, setName] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        STORIES, STYLES AND SPORTSWEAR AT VELVETYNE, SINCE 2024
      </p>
      <form
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        onSubmit={HandleSubmit}
      >
        <input
          className="w-full sm:flex-1 outline-none"
          placeholder="Enter your email"
          type="email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >SUBSCRIBE</button>{" "}
      </form>
    </div>
  );
};

export default Newsletter;
