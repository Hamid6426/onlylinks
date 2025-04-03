"use client";

import React, { useState, useEffect } from "react";
import { getUserId } from "@/utils/decoded";

export default function SensitiveContent() {
  const [userId, setUserId] = useState(null);
  const [isSensitive, setIsSensitive] = useState(false);
  const [ageRestriction, setAgeRestriction] = useState("0");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize userId on client side
  useEffect(() => {
    setUserId(getUserId());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      userId: userId,
      sensitive: isSensitive,
      sensitive_age: parseInt(ageRestriction, 10),
    };

    try {
      const response = await fetch("/api/user/sensitive-info", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to update sensitive content preferences");
      }

      // Handle successful response if needed
    } catch (error) {
      console.error("Error submitting sensitive content preferences:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border border-gray-200 shadow-md p-6 rounded-md w-full mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Sensitive Content</h2>
      <div className="border-b border-gray-200 mb-4"></div>

      {/* Description */}
      <p className="text-gray-600 mb-3">Display a sensitive content warning before visitors can view your profile.</p>

      {/* Toggle Switch */}
      <div className="flex items-center gap-3">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isSensitive}
            onChange={() => setIsSensitive(!isSensitive)}
          />
          <div className="w-16 h-8 bg-gray-300 peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer-checked:bg-purple-500 peer-checked:after:translate-x-8 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border after:border-gray-300 after:rounded-full after:w-6 after:h-6 after:transition-all duration-300 ease-in-out"></div>
        </label>
        <span className="text-gray-700 font-medium">Sensitive Content</span>
      </div>

      {/* Age Restriction Options (Visible Only If Sensitive Content is Enabled) */}
      {isSensitive && (
        <div className="mt-4">
          <label className="block text-gray-700 font-medium mb-2">Please select an age restriction:</label>
          <div className="space-y-2">
            {["18", "21", "25", "0"].map((value) => (
              <label key={value} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="ageRestriction"
                  value={value}
                  checked={ageRestriction === value}
                  onChange={(e) => setAgeRestriction(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="text-gray-700">
                  {value === "0" ? "General Warning (No Age Restriction)" : `${value}+`}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Save Button */}
      <button
        type="button" // Change from "submit" since there's no <form>
        onClick={handleSubmit} // Call handleSubmit on click
        disabled={isSubmitting}
        className={`mt-3 w-full text-white rounded-md p-3 focus:outline-none ${
          isSubmitting ? "bg-gray-400" : "bg-gray-600 hover:bg-purple-500"
        }`}
      >
        {isSubmitting ? "Saving..." : "Save"}
      </button>
    </div>
  );
}