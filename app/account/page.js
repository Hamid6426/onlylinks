"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import LinksContent from "@/components/LinksContent";
import PreviewPhone from "@/components/PreviewPhone";
import { getDecodedToken, getUserId } from "@/utils/decoded";

export default function Account() {
  const [decoded, setDecoded] = useState({});
  const [_userId, setUserId] = useState(null);

  // Initialize on client side
  useEffect(() => {
    setDecoded(getDecodedToken());
    setUserId(getUserId());
  }, []);

  return (
    <main className="flex gap-6 p-6">
      <div className="w-full">
        <h1 className="font-bold text-2xl mb-4">Hello, {decoded.username}</h1>
        <div className="p-4 flex items-center justify-between bg-red-100 border border-red-400 text-red-700 rounded">
          <p>You don't have a subscription</p>
          <Link className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-purple-500" href="/account/billing">
            Subscribe
          </Link>
        </div>
        <LinksContent />
      </div>
      <div className="relative w-[240px]">
        <div className="fixed">
          <PreviewPhone />
        </div>
      </div>
    </main>
  );
}
