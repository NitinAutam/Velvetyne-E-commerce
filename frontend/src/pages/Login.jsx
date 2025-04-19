import React, { useState } from "react";
import Title from "../components/Title";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="h-auto flex items-start justify-center pt-20 pb-10 px-4">
      <div className="w-full max-w-sm space-y-3">
        <div className="text-center text-3xl font-playfair">
          <Title text2={isSignUp ? "Signup" : "Login"} />
        </div>

        {isSignUp && (
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-black px-4 py-2 rounded-sm"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-black px-4 py-2 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-black px-4 py-2 rounded-sm"
        />

        <div className="flex justify-between text-sm text-gray-600">
          <button className="hover:underline">Forgot your password?</button>
          <button
            onClick={() => setIsSignUp((prev) => !prev)}
            className="underline"
          >
            {isSignUp ? "Existing User? Log in" : "Create account"}
          </button>
        </div>

        <div className="flex justify-center">
          <button className="w-1/3 py-2 bg-black text-white">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
