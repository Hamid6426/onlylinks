"use client";

import React, { useState } from "react";

export default function BasicInfo() {
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
    <div className="bg-white border border-gray-200 shadow-md p-6 rounded-md w-full">
      {/* Profile Title */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile</h2>
      <div className="border-b border-gray-200 mb-4"></div>

      <div className="flex h-full items-center w-full">
        {/* Profile Picture Upload */}
        <div className="flex justify-center w-4/12">
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
        <div className="w-1/12"></div>

        <div className="space-y-4 w-7/12">
          {/* Username */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-3/4"
          />

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-3/4"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-3/4"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-3/4"
          />
        </div>
      </div>
      {/* Save Button */}
      <div className="w-full flex justify-center mt-6">
        <button className="bg-gray-600 max-w-60 w-full hover:bg-purple-500 text-white py-2 rounded-md">
          Save Changes
        </button>
      </div>
    </div>
  );
}
