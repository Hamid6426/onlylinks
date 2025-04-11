"use client";
import React, { useState } from "react";

const ProfilePictureSize = () => {
  const [size, setSize] = useState(150); // Default size

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <div className="section-label mt-3">Profile picture size</div>
      <div className="range-picture-size">
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="w-full">
            <input
              type="range"
              min="50"
              max="300"
              step="1"
              style={{ width: "100%" }}
              value={size}
              onChange={handleSizeChange}
            />
          </span>
          <div style={{ width: "120px" }}>
            <div className="row-grid-2 gap-2 input-number">
              <input
                type="number"
                className="form-control form-control-sm"
                value={size}
                max="300"
                min="50"
                onChange={(e) => setSize(e.target.value)}
              />
              <label className="mt-1">px</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureSize;
