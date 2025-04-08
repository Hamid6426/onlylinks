"use client";

import { jwtDecode } from "jwt-decode";
  
export const getDecodedToken = () => {
  if (typeof window === "undefined") return {}; // Server-side return empty
  
  try {
    const token = localStorage.getItem("token");
    return token ? jwtDecode(token) : {};
  } catch (error) {
    console.error("Error decoding token:", error);
    return {};
  }
};

export const getUserId = () => getDecodedToken()?.user_id || null;
export const getUsername = () => getDecodedToken()?.username || "";
export const getUserEmail = () => getDecodedToken()?.email || "";
export const getUserName = () => getDecodedToken()?.name || "";
export const getUserProfile = () => getDecodedToken()?.profile || "";