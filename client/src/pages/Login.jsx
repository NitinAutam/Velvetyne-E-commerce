import React, { useState } from "react";
import Title from "../components/Title";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  // name is name,email,pass, on change changes usestate 
  // ...prev keeping all same but changing particular [name] to its value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const endpoint = isSignUp ? "/api/auth/signUp" : "/api/auth/login";
    const body = isSignUp
      ? formData
      : { email: formData.email, password: formData.password };
    //fetches data like postman
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Succ");
    } else {
      alert(data.message || "Failed");
    }
  };

  return (
    <div className="h-auto flex items-start justify-center pt-20 pb-10 px-4">
      <div className="w-full max-w-sm space-y-3">
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
          <button className="hover:underline">Forgot your password?</button>
          <button
            onClick={() => setIsSignUp((prev) => !prev)}
            className="underline"
          >
            {isSignUp ? "Existing User? Log in" : "Create account"}
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="w-1/3 py-2 bg-black text-white"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
