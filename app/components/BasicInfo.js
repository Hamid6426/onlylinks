"use client";

import React, { useState } from "react";

export default function UserProfile() {
  const [username, setUsername] = useState("hamid");
  const [name, setName] = useState("Mian Hamid Ur Rehman");
  const [email, setEmail] = useState("mianhamid6426@gmail.com");
  const [password, setPassword] = useState("********");
  const [profilePic, setProfilePic] = useState("/dist/img/profile-picture.png");

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const fileURL = URL.createObjectURL(event.target.files[0]);
      setProfilePic(fileURL);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-lg mx-auto">
      {/* Profile Title */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile</h2>
      <div className="border-b border-gray-200 mb-4"></div>

      {/* Profile Picture Upload */}
      <div className="flex justify-center mb-4">
        <label className="relative cursor-pointer">
          <img
            src={profilePic}
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

      {/* Editable Fields */}
      <div className="space-y-4">
        {/* Username */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Username:</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-2/3"
          />
        </div>

        {/* Name */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-2/3"
          />
        </div>

        {/* Email */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-2/3"
          />
        </div>

        {/* Password */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-2/3"
          />
        </div>
      </div>

      {/* Save Button */}
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md w-full">
        Save Changes
      </button>
    </div>
  );
}
