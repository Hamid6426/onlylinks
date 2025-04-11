"use client";
import React, { useState } from "react";

const ProfilePictureOutline = () => {
  const [isOutlined, setIsOutlined] = useState(false);

  return (
    <div className="flex items-center gap-1 mt-3">
      <label htmlFor="profile-picture-outline" className="toggle-switchy">
        <input
          type="checkbox"
          id="profile-picture-outline"
          name="profile_picture_outline"
          value="1"
          checked={isOutlined}
          onChange={() => setIsOutlined(!isOutlined)}
        />
        <span className="toggle">
          <span className="switch"></span>
        </span>
      </label>
      <div className="toggle-switchy-text">Profile picture outline</div>
    </div>
  );
};

export default ProfilePictureOutline;
