"use client";

import React, { useEffect, useState } from 'react'
import { getDecodedToken, getUsername } from "@/utils/decoded";

export default function Profile() {
  const [decoded, setDecoded] = useState(null);  // Initialize as null
  const [username, setUsername] = useState(null);

  // Initialize on client side
  useEffect(() => {
    setDecoded(getDecodedToken());
    setUsername(getUsername());
  }, []);

  if (!decoded) {
    return <div>Loading...</div>; // Or any other fallback UI
  }

  return (
    <div>
      <h1>THIS IS {decoded.username || 'Unknown'} page</h1> 
    </div>
  );
}
