"use client";

import React, { useState } from "react";
import Image from "next/image";

const Login = () => {
  const [showReset, setShowReset] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setMessage({ type: "error", text: "Please fill all fields" });
      return;
    }
    setMessage({ type: "success", text: "Login successful" });
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setMessage({ type: "error", text: "Enter a valid email" });
      return;
    }
    setMessage({ type: "success", text: "Reset link sent to your email" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <div className="flex justify-center mb-4">
          <a href="/">
            <img
              src="onlylinks-logo.svg"
              alt="logo"
              className="h-12"
            />
          </a>
        </div>

        {showReset ? (
          <div>
            <h2 className="text-xl font-semibold text-center">
              Restore Password
            </h2>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Enter your email and we’ll send you a link to reset your password.
            </p>
            <form onSubmit={handleReset} className="mt-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                className="mt-3 w-full bg-blue-500 text-white p-2 rounded-md"
              >
                Submit
              </button>
              <button
                type="button"
                className="mt-2 w-full bg-gray-300 p-2 rounded-md"
                onClick={() => setShowReset(false)}
              >
                Back
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-center">Login</h2>
            <form onSubmit={handleLogin} className="mt-4">
              <input
                type="text"
                name="username"
                placeholder="Username or Email"
                className="w-full p-2 border rounded-md"
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded-md mt-3"
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                className="mt-3 w-full bg-blue-500 text-white p-2 rounded-md"
              >
                Login
              </button>
            </form>
            {message.text && (
              <div
                className={`mt-3 p-2 text-center rounded-md ${
                  message.type === "error"
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {message.text}
              </div>
            )}
            <div className="text-center mt-3 text-sm">
              <p>
                Don't have an account?{" "}
                <a href="./signup" className="text-blue-500">
                  Signup
                </a>
              </p>
              <p>
                <button
                  onClick={() => setShowReset(true)}
                  className="text-blue-500"
                >
                  Forgot password?
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
