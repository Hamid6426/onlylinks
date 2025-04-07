"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const [showReset, setShowReset] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    email: "",
  });
  const router = useRouter();

  const [message, setMessage] = useState({ type: "", text: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.identifier || !formData.password) {
      setMessage({ type: "error", text: "Please fill all fields" });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: formData.identifier.toLowerCase(),
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setMessage({ type: "success", text: "Login successful, redirecting..." });

        // Wait 3 seconds before redirect
        setTimeout(() => {
          router.push("/account");
        }, 3000);
      } else {
        setMessage({ type: "error", text: data.error || "Login failed" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Internal error, please try again" });
    } finally {
      // Keep loading true during the timeout to show spinner until redirect
      setTimeout(() => setLoading(false), 3000);
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setMessage({ type: "error", text: "Enter a valid email" });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/auth/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email.toLowerCase() }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage({ type: "success", text: "Reset link sent to your email" });
      } else {
        setMessage({ type: "error", text: data.error || "Reset failed" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Internal error, please try again" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <div className="flex justify-center mb-4">
          <Link href="/">
            <Image width={100} height={100} src="onlylinks-logo.svg" alt="logo" className="h-12" />
          </Link>
        </div>

        {showReset ? (
          <div>
            <h2 className="text-xl font-semibold text-center">Restore Password</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Enter your email and we&apos;ll send you a link to reset your password.
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
              <button type="submit" className="mt-3 w-full bg-purple-500 text-white p-2 rounded-md" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
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
                name="identifier"
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
              <button type="submit" className="mt-3 w-full bg-purple-500 text-white p-2 rounded-md" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            {message.text && (
              <div
                className={`mt-3 p-2 text-center rounded-md ${
                  message.type === "error" ? "bg-red-500 text-white" : "bg-green-500 text-white"
                }`}
              >
                {message.text}
              </div>
            )}
            <div className="text-center mt-3 text-sm">
              <p>
                Don&apos;t have an account?{" "}
                <Link href="/choose-username" className="text-purple-500">
                  Signup
                </Link>
              </p>
              <p>
                <button onClick={() => setShowReset(true)} className="text-purple-500">
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
