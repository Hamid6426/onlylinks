"use client";
import React, { useState } from "react";

const ProfilePicture = () => {
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/id/4/160/90");
  const [shape, setShape] = useState("10000");

  const handleImageChange = (event) => {
    // Handle image change (you can implement file upload logic here)
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImageUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="section-label mt-3">Profile picture</div>
      <div className="flex flex-col mt-1">
        <div className="profile-picture-container" id="profile-picture">
          <label className="upload-picture-profile">
            <span className="preview-container">
              <img
                className="profile-pic-img"
                alt="Profile"
                src={imageUrl}
                style={{ borderRadius: shape === "10000" ? "10000px" : `${shape}px` }}
              />
              <span className="upload-icon-container">
                <span className="upload-icon" role="button">
                  {/* SVG Icon */}
                </span>
              </span>
            </span>
            <input type="file" onChange={handleImageChange} style={{ display: 'none' }} />
          </label>
        </div>
      </div>
      <div className="section-label mt-3">Profile picture shape</div>
      <div className="flex gap-2 mt-2 picture-shape">
        <div className="grid-button" role="button" data-val="10" onClick={() => setShape("10")}>
          <span className="grid-bg" style={{ borderRadius: "10px" }}></span>
        </div>
        <div className="grid-button selected" role="button" data-val="10000" onClick={() => setShape("10000")}>
          <span className="grid-bg border-radius-100"></span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
