import React, { useState } from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";import {
  showSuccess,
  showError,
} from "../utils/toastUtils";
import { useAuth } from "../context/AuthContext";


const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const {handleLogin} = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!email || !password || (isSignUp && !name)) {
      showError("Please fill all required fields.");
      return;
    }

    const endpoint = isSignUp ? "/api/auth/signUp" : "/api/auth/login";
    const body = isSignUp ? formData : { email, password };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        showSuccess(data.message || "Login successful");
        navigate("/");
        handleLogin();
        // TODO: redirect or update auth context
      } else {
        showError(data.message || "Authentication failed");
      }
    } catch (error) {
      showError("Something went wrong. Try again.");
      console.error("Auth error:", error);
    }
  };

  return (
    <div className="h-auto flex items-start justify-center pt-20 pb-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-3"
        noValidate
      >
        <div className="text-center text-3xl font-playfair">
          <Title text2={isSignUp ? "Signup" : "Login"} />
        </div>

        {isSignUp && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-black px-4 py-2 rounded-sm"
          />
        )}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border border-black px-4 py-2 rounded-sm"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border border-black px-4 py-2 rounded-sm"
        />

        <div className="flex justify-between text-sm text-gray-600">
          <button type="button" className="hover:underline">
            Forgot your password?
          </button>
          <button
            type="button"
            onClick={() => setIsSignUp((prev) => !prev)}
            className="underline"
          >
            {isSignUp ? "Existing User? Log in" : "Create account"}
          </button>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/3 py-2 bg-black text-white hover:bg-gray-800 transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
