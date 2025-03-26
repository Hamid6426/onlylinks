"use client";

import React from "react";
import { BiLinkExternal } from "react-icons/bi";

// Dummy Data (Replace with actual API response)
const links = [
  { id: 1, url: "https://example.com/article1", clicks: 15 },
  { id: 2, url: "https://example.com/article2", clicks: 8 },
  { id: 3, url: "https://example.com/article3", clicks: 5 },
];

export default function TopPerformingLinks() {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Top Performing Links</h2>

      {/* Table Header */}
      <div className="flex px-3 py-2 bg-gray-100 font-semibold text-gray-600">
        <div className="flex-1">Link</div>
        <div className="flex-2 text-right">Clicks</div>
      </div>

      {/* Links Data */}
      {links.length > 0 ? (
        links.map((link) => (
          <div key={link.id} className="flex px-3 py-2 border-b last:border-none">
            <div className="flex-1 flex items-center gap-2 truncate">
              <BiLinkExternal className="text-gray-500" />
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline truncate"
              >
                {link.url}
              </a>
            </div>
            <div className="flex-2 text-right font-semibold text-gray-700">{link.clicks}</div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500 py-4">No data</div>
      )}
    </div>
  );
}
