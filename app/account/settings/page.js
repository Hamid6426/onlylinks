"use client";

import React, { useState, useEffect } from "react";
import { getDecodedToken, getUserId } from "@/utils/decoded";
import Image from "next/image";

export default function BasicInfo() {
  const [decoded, setDecoded] = useState({});
  const [userId, setUserId] = useState(null);

  // Initialize on client side
  useEffect(() => {
    setDecoded(getDecodedToken());
    setUserId(getUserId());
  }, []);

  const [username, setUsername] = useState(decoded?.username || "");
  const [name, setName] = useState(decoded?.name || "");
  const [email, setEmail] = useState(decoded?.email || "");
  const [password, setPassword] = useState("********");
  const [profilePic, setProfilePic] = useState(decoded?.profile || "");
  const [activeField, setActiveField] = useState(null);

  // Update form fields when decoded data loads
  useEffect(() => {
    setUsername(decoded?.username || "");
    setName(decoded?.name || "");
    setEmail(decoded?.email || "");
    setProfilePic(decoded?.profile || "");
  }, [decoded]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/user/profile?userId=${userId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user profile.");
        }
        const data = await res.json();
        // adjust properties based on your API response structure
        setUsername(data.username || "");
        setName(data.name || "");
        setEmail(data.email || "");
        if (data.profile) {
          setProfilePic(data.profile);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  // Upload function to call the backend API
  const uploadImage = async (file, userId) => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("userId", userId);

      const res = await fetch("/api/user/upload-profile-pic", {
        method: "PATCH",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      return data;
    } catch (err) {
      console.error("→ uploadImage error", err);
      throw err;
    }
  };

  // Handle the file input change event
  const handleImageUpload = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Create a temporary object URL for immediate preview
      const previewURL = URL.createObjectURL(file);
      setProfilePic(previewURL);

      // Ensure userId is available for the API request
      if (!userId) {
        alert("User ID is missing.");
        return;
      }

      try {
        const data = await uploadImage(file, userId);
        // If API returns the image path, update profilePic with that value.
        if (data && data.path) {
          setProfilePic(data.path);
        }
      } catch (err) {
        console.error("Image upload failed:", err);
        alert(err.message);
      }
      // Optionally, revoke the temporary object URL later if needed
    }
  };

  // Function to handle field updates (username, name, email, password)
  const handleUpdate = async (fieldName, value) => {
    if (!userId) {
      alert("User ID is missing.");
      return;
    }

    try {
      const endpointMap = {
        username: "/api/user/change-username",
        name: "/api/user/change-name",
        email: "/api/user/change-email",
        password: "/api/user/change-password",
      };

      const response = await fetch(endpointMap[fieldName], {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          [`new${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`]: value,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`${fieldName} updated successfully!`);
        setActiveField(null);
      } else {
        throw new Error(data.error || `Failed to update ${fieldName}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-white border border-gray-200 shadow-md p-6 rounded-md w-full">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile</h2>
      <div className="border-b border-gray-200 mb-4"></div>

      <div className="flex h-full items-center w-full">
        <div className="flex justify-center w-4/12">
          <label className="relative cursor-pointer">
            <Image
              src={profilePic || "/profile-picture.svg"}
              width={100}
              height={100}
              alt="Profile"
              className="w-24 h-24 rounded-full border border-gray-300"
            />
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="w-1/12"></div>

        <div className="space-y-4 w-7/12">
          <div className="relative flex items-center">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setActiveField("username")}
              className="border p-2 rounded w-3/4"
            />
            {activeField === "username" && (
              <button
                onClick={() => handleUpdate("username", username)}
                className="ml-2 text-purple-500 hover:text-purple-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="relative flex items-center">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setActiveField("name")}
              className="border p-2 rounded w-3/4"
            />
            {activeField === "name" && (
              <button onClick={() => handleUpdate("name", name)} className="ml-2 text-purple-500 hover:text-purple-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="relative flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setActiveField("email")}
              className="border p-2 rounded w-3/4"
            />
            {activeField === "email" && (
              <button
                onClick={() => handleUpdate("email", email)}
                className="ml-2 text-purple-500 hover:text-purple-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="relative flex items-center">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setActiveField("password")}
              className="border p-2 rounded w-3/4"
            />
            {activeField === "password" && (
              <button
                onClick={() => handleUpdate("password", password)}
                className="ml-2 text-purple-500 hover:text-purple-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
