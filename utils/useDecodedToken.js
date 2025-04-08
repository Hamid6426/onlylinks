"use client";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

export const useDecodedToken = () => {
  const [decoded, setDecoded] = useState({});

  useEffect(() => {
    // Ensure code runs only on the client side
    if (typeof window !== "undefined") {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          // Decode and update the state with the token's payload
          const decodedToken = jwtDecode(token);
          setDecoded(decodedToken);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  return decoded;
};
