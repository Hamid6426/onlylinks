"use client";

import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { MdShare } from "react-icons/md";

export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!token) return null;

  let username = "";
  try {
    const decoded = jwtDecode(token);
    username = decoded?.username || "";
  } catch (err) {
    console.error("Invalid token", err);
    return null;
  }

  const handleCopyLink = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl || !username) return;

    const link = `${baseUrl}/${username}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide message after 2s
    });
  };

  return (
    <button
      type="button"
      onClick={handleCopyLink}
      className="relative flex items-center text-gray-600 hover:text-purple-600 group"
    >
      <MdShare className="h-6 w-6" />
      <div className="text-nowrap absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded px-2 py-1">
        Copy Link
      </div>
      {copied && (
        <div className="text-nowrap absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs rounded px-2 py-1 shadow-lg z-10">
          Link Copied!
        </div>
      )}
    </button>
  );
}
