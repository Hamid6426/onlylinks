"use client";

import React, { useState } from "react";
import Image from "next/image";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [email, setEmail] = useState("");

  // Validate username (Mock logic)
  const checkUsername = () => {
    setIsUsernameAvailable(username.length >= 3);
  };

  // Handle form submission (Mock logic)
  const handleSignup = (e) => {
    e.preventDefault();
    setSignupSuccess(true);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg mx-auto mt-12 w-full max-w-md">
        {/* Logo */}
        <Image src="onlylinks-logo.svg" alt="logo" width={200} height={80} />

        {/* Claim Username */}
        {!showSignupForm && !signupSuccess && (
          <>
            <h2 className="mt-4 text-xl font-bold text-center">
              Claim your Link in Bio!
            </h2>
            <form autoComplete="off" className="mt-3">
              <input
                autoComplete="false"
                name="hidden"
                type="text"
                className="hidden"
              />

              <div className="bg-gray-100 p-2 rounded-md flex items-center gap-2">
                <img src="/dist/img/logo-icon.svg" className="w-4 h-4" alt="" />
                <span className="font-semibold text-gray-700">
                  onlylinks.com/
                </span>
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={checkUsername}
                  minLength={3}
                  maxLength={20}
                  className="bg-transparent border-none focus:outline-none flex-grow"
                />
                {isUsernameAvailable && (
                  <i className="bx bx-check text-green-500 text-lg"></i>
                )}
              </div>

              {/* Next Button */}
              <button
                type="button"
                className={`w-full mt-3 p-2 text-white bg-blue-500 rounded-md ${
                  username.length >= 3
                    ? "cursor-pointer"
                    : "cursor-not-allowed opacity-50"
                }`}
                disabled={username.length < 3}
                onClick={() => setShowSignupForm(true)}
              >
                Next
              </button>
            </form>
          </>
        )}

        {/* Create Account Form */}
        {showSignupForm && !signupSuccess && (
          <>
            <div className="mt-3">
              <span className="font-semibold">{username}</span> is yours!
              <button
                className="float-right text-blue-500"
                onClick={() => setShowSignupForm(false)}
              >
                <i className="fa fa-chevron-left"></i>
              </button>
            </div>
            <h2 className="mt-1 text-xl font-bold text-center">
              Now, create your account
            </h2>

            <form onSubmit={handleSignup} autoComplete="off" className="mt-3">
              <input
                autoComplete="false"
                name="hidden"
                type="text"
                className="hidden"
              />

              <input
                className="w-full p-2 border rounded mt-3"
                type="text"
                name="name"
                placeholder="Name"
                required
              />

              <input
                className="w-full p-2 border rounded mt-3"
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="w-full p-2 border rounded mt-3"
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength={8}
              />

              <button
                className="w-full p-2 text-white bg-blue-500 rounded-md mt-3"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </>
        )}

        {/* Signup Success Message */}
        {signupSuccess && (
          <div className="text-center">
            <h3 className="text-lg font-bold text-green-600">
              Signup Successful!
            </h3>
            <p className="text-green-500">
              Verification link was sent to your email <strong>{email}</strong>
            </p>
          </div>
        )}

        {/* Login Link */}
        <p className="mt-3 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-blue-500">
            Login
          </a>
        </p>

        {/* Terms & Privacy */}
        <p className="mt-3 text-xs text-gray-600 text-center">
          By signing up, you agree to our{" "}
          <a href="/terms/" target="_blank" className="text-blue-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy-policy/" target="_blank" className="text-blue-500">
            Privacy Policy
          </a>
          .
        </p>
    </div>
  );
};

export default Signup;
