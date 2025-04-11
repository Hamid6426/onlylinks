"use client";
import React, { useState } from "react";

const UserInfo = () => {
  const [displayName, setDisplayName] = useState("nbkjb");
  const [location, setLocation] = useState("bjkbjknjk");
  const [bio, setBio] = useState("ljndkldnanlnvlda");

  return (
    <div>
      <div className="flex flex-col">
        <div data-click="display_name">
          <label className="section-label">Display name</label>
          <div className="form-group mt-1">
            <input
              type="text"
              className="form-control form-control-lg"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              name="display_name"
              data-input-name="display_name"
              minLength="0"
              maxLength="50"
            />
          </div>
        </div>

        <div className="mt-3" data-click="location">
          <label className="section-label">Location</label>
          <div className="form-group mt-1">
            <input
              type="text"
              className="form-control form-control-lg"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              name="location"
              data-input-name="location"
              minLength="0"
              maxLength="50"
            />
          </div>
        </div>

        <div className="mt-3" data-click="bio">
          <label className="section-label">Bio</label>
          <div className="form-group mt-1 mb-0">
            <textarea
              className="form-control"
              name="bio"
              data-input-name="bio"
              rows="3"
              minLength="0"
              maxLength="100"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <p className="w-full flex items-center justify-between">
            <span className="section-label-sm" style={{ opacity: 0.5, color: "#000" }}>
              <span className="bio-type-char">{bio.length}</span>/100
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
