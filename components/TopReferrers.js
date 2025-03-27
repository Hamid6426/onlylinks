"use client";

import React, { useState } from "react";

// Dummy Data (Replace with actual API response)
const referrers = [
  { source: "Google", views: 30, clicks: 12 },
  { source: "Facebook", views: 25, clicks: 9 },
  { source: "Twitter", views: 18, clicks: 6 },
  { source: "Other", views: 5, clicks: 2 },
];

export default function TopReferrers() {
  const [viewType, setViewType] = useState("views");

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Top Referrers</h2>

      {/* Toggle Views/Clicks */}
      <div className="flex justify-center space-x-4 mb-4 text-sm">
        <button
          className={`analytics-link ${viewType === "views" ? "text-gray-600 font-bold" : "text-gray-500"}`}
          onClick={() => setViewType("views")}
        >
          Views
        </button>
        <span>|</span>
        <button
          className={`analytics-link ${viewType === "clicks" ? "text-gray-600 font-bold" : "text-gray-500"}`}
          onClick={() => setViewType("clicks")}
        >
          Clicks
        </button>
      </div>

      {/* Referrer Data */}
      <div className="space-y-3">
        {referrers.map((ref, index) => {
          const value = viewType === "views" ? ref.views : ref.clicks;
          const maxValue = Math.max(...referrers.map((r) => (viewType === "views" ? r.views : r.clicks))) || 1;
          const percentage = (value / maxValue) * 100;

          return (
            <div key={index} className="p-2">
              <span className="block text-gray-700 font-medium">{ref.source}</span>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-300 rounded-md overflow-hidden">
                  <div
                    className="h-2 bg-gray-600 rounded-md"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="ml-2 font-semibold text-gray-700">{value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
