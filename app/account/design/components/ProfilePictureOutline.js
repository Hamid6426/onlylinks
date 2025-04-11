"use client";
import React, { useState } from "react";

const ProfilePictureOutline = () => {
  const [isOutlined, setIsOutlined] = useState(false);

  return (
    <div className="flex flex-col gap-2 my-4">
      <div className="section-label mt-3 text-purple-500 flex">Profile picture</div>

      <label htmlFor="profile-picture-outline" className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          id="profile-picture-outline"
          name="profile_picture_outline"
          value="1"
          checked={isOutlined}
          onChange={() => setIsOutlined(!isOutlined)}
          className="hidden"
        />
        <span className="relative inline-block w-12 h-6 rounded-full transition-colors duration-300">
          <span
            className={`absolute inset-0 bg-gray-400 rounded-full transition-all duration-300 ${
              isOutlined ? "bg-purple-500" : "bg-gray-300"
            }`}
          />
          <span
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ease-in-out ${
              isOutlined ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </span>
      </label>
    </div>
  );
};

export default ProfilePictureOutline;
