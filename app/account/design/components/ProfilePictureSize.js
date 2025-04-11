"use client";
import React, { useState } from "react";

const ProfilePictureSize = () => {
  const [size, setSize] = useState(150); // Default size

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className="mt-4">
      <div className="text-sm font-semibold text-purple-500 mb-2">Profile picture size</div>
      <div className="flex items-center gap-4">
        <div className="flex-grow">
          <input
            type="range"
            min="50"
            max="300"
            step="1"
            value={size}
            onChange={handleSizeChange}
            className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col items-center h-full">
          <div className="flex items-center border h-full gap-2">
            <input
              type="number"
              className="border-gray-700 border form-control form-control-sm px-3 py-2 text-center rounded-md focus:ring-2 focus:ring-purple-500"
              value={size}
              max="300"
              min="50"
              onChange={(e) => setSize(e.target.value)}
            />
            <label className="text-gray-700 h-full px-2 border-gray-700 border-t border-l border-b border-r py-2 rounded-md">px</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureSize;
