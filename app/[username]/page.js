"use client";

import React, { useEffect, useState } from 'react'
import { getDecodedToken, getUserId } from "@/utils/decoded";

export default function page() {
  const [decoded, setDecoded] = useState({});
  const [_userId, setUserId] = useState(null);

  // Initialize on client side
  useEffect(() => {
    setDecoded(getDecodedToken());
    setUserId(getUserId());
  }, []);
  return (
    <div>
      <h1>THIS IS {decoded.username} page</h1> 
    </div>
  )
}
