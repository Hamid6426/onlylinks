"use client";
import React, { useState } from "react";

const ProfilePicture = () => {
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/id/4/160/90");
  const [shape, setShape] = useState("100%"); // Default shape (rounded-full)

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
      {/* Section for Profile Picture */}
      <div className="section-label mt-3 text-purple-500 flex mb-4">Profile picture</div>
      <div className="flex flex-col mt-1">
        <div className="profile-picture-container  flex" id="profile-picture">
          <label className="upload-picture-profile">
            <span className="preview-container cursor-pointer">
              <img
                className="profile-pic-img rounded-full border-2 border-gray-400"
                alt="Profile"
                src={imageUrl}
                style={{
                  width: "150px", // You can adjust the size as needed
                  height: "150px", // Ensure square size for circular shape
                  objectFit: "cover", // Ensures image fills the container
                }}
              />
              <span className="upload-icon-container">
                <span className="upload-icon" role="button">
                  {/* Optional: Add an icon for image upload */}
                </span>
              </span>
            </span>
            <input type="file" onChange={handleImageChange} style={{ display: 'none' }} />
          </label>
        </div>
      </div>

      {/* Section for Profile Picture Shape */}
      <div className="flex gap-2 mt-2 picture-shape cursor-pointer">
        <div
          className="grid-button"
          role="button"
          data-val="10"
          onClick={() => setShape("10")}
        >
          <span className="grid-bg" style={{ borderRadius: "10px" }}></span>
        </div>
        <div
          className="grid-button selected"
          role="button"
          data-val="10000"
          onClick={() => setShape("100%")}
        >
          <span className="grid-bg border-radius-100"></span>
        </div>
        {/* Add rounded-full option */}
        <div
          className="grid-button"
          role="button"
          data-val="rounded-full"
          onClick={() => setShape("100%")}
        >
          <span className="grid-bg border-radius-full"></span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
