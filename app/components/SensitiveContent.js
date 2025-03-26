"use client";

import React, { useState } from "react";

export default function SensitiveContent() {
  const [isSensitive, setIsSensitive] = useState(false);
  const [ageRestriction, setAgeRestriction] = useState("0");

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-lg mx-auto">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Sensitive Content</h2>
      <div className="border-b border-gray-200 mb-4"></div>

      {/* Description */}
      <p className="text-gray-600 mb-3">
        Display a sensitive content warning before visitors can view your profile.
      </p>

      {/* Toggle Switch */}
      <div className="flex items-center gap-3">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isSensitive}
            onChange={() => setIsSensitive(!isSensitive)}
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600"></div>
        </label>
        <span className="text-gray-700 font-medium">Sensitive Content</span>
      </div>

      {/* Age Restriction Options (Visible Only If Sensitive Content is Enabled) */}
      {isSensitive && (
        <div className="mt-4">
          <label className="block text-gray-700 font-medium mb-2">
            Please select an age restriction:
          </label>
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
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md w-full">
        Save Changes
      </button>
    </div>
  );
}
