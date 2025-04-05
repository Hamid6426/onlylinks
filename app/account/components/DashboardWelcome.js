import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getDecodedToken, getUserId } from "@/utils/decoded";

export default function DashboardWelcome() {
  const [decoded, setDecoded] = useState({});
  const [_userId, setUserId] = useState(null);

  // Initialize on client side
  useEffect(() => {
    setDecoded(getDecodedToken());
    setUserId(getUserId());
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl mb-4">
        Hello, <span className="text-purple-500">"{decoded.username}"</span>
      </h1>
      <div className="p-4 flex items-center justify-between bg-red-100 border border-red-400 text-red-700 rounded">
        <p>You don&apos;t have a subscription</p>
        <Link className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-purple-500" href="/account/checkout">
          Subscribe
        </Link>
      </div>
    </>
  );
}
