"use client";

import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import ResendVerification from "@/components/ResendVerification";

// Wrapping the Signup component with Suspense
const Signup = () => {
  const searchParams = useSearchParams();
  const prefilledUsername = searchParams.get("username") || "";
  const [username] = useState(prefilledUsername);

  useEffect(() => {
    if (!prefilledUsername) {
      // no username → send them back
      router.push("/choose-username");
    }
  }, [prefilledUsername, router]);

  const [name, setName] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setSignupSuccess(true);
      } else {
        setError(data.error || "Signup failed");
        console.error("Signup error:", data.error);
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Unexpected error:", err);
    }
  };

  const goBack = () => {
    router.push("/choose-username");
  };

  return (
    <div className="flex flex-col items-center p-6 border-2 border-gray-200 shadow-md rounded-lg mx-auto w-full max-w-md">
      {/* Logo */}
      <Image src="onlylinks-logo.svg" alt="logo" width={200} height={80} />

      {!signupSuccess && (
        <>
          <div className="mt-3 w-full flex flex-col justify-between items-center">
            <Link href="/" className="w-full text-center text-lg mb-2">
              <p className="font-semibold">WAY TO GO!</p>
              <span>
                username <span className="font-semibold text-purple-500 mx-2"> &quot;{username}&quot; </span> is yours!
              </span>
            </Link>
            <button className="text-purple-500" onClick={goBack}>
              <i className="fa fa-chevron-left"></i> Want to Change it?
            </button>
          </div>

          <h2 className="mt-1 text-xl font-bold text-center">Now, create your account</h2>

          <form onSubmit={handleSignup} autoComplete="off" className="mt-3">
            <input autoComplete="off" name="hidden" type="text" className="hidden" />

            <input
              className="w-full p-2 border rounded mt-3"
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <button className="w-full p-2 text-white bg-purple-500 rounded-md mt-3" type="submit">
              Create Account
            </button>
          </form>
        </>
      )}

      {signupSuccess && (
        <div className="text-center">
          <h3 className="text-lg font-bold text-green-600">Signup Successful!</h3>
          <p className="text-green-500">
            Verification link was sent to your email <strong>{email}</strong>
          </p>
          <ResendVerification email={email} />
        </div>
      )}

      <p className="mt-3 text-sm text-gray-600 text-center">
        Already have an account?{" "}
        <a href="/login" className="font-semibold text-purple-500">
          Login
        </a>
      </p>

      <p className="mt-3 text-xs text-gray-600 text-center">
        By signing up, you agree to our{" "}
        <a href="/terms/" target="_blank" className="text-purple-500">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy-policy/" target="_blank" className="text-purple-500">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

// Wrap the component in Suspense
const SuspenseWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Signup />
  </Suspense>
);

export default SuspenseWrapper;
