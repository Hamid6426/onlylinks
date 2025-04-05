// components/ResendVerification.jsx
"use client";

import { useState } from "react";

const ResendVerification = ({ email }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResend = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/resend-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "Verification email resent successfully!");
      } else {
        setMessage(data.error || "Failed to resend verification email.");
      }
    } catch (err) {
      console.error("Error resending verification email:", err);
      setMessage("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleResend}
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Resending..." : "Resend Verification Email"}
      </button>
      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default ResendVerification;
