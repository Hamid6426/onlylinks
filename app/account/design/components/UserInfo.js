"use client";
import React, { useState } from "react";

const UserInfo = () => {
  const [displayName, setDisplayName] = useState("nbkjb");
  const [location, setLocation] = useState("bjkbjknjk");
  const [bio, setBio] = useState("ljndkldnanlnvlda");

  return (
    <div className="bg-white rounded-lg shadow-md w-full">
      <div className="flex flex-col space-y-4">

        {/* Display Name */}
        <div data-click="display_name">
          <label className="section-label text-purple-500">Display name</label>
          <div className="form-group mt-1">
            <input
              type="text"
              className="form-control form-control-lg border-2 border-gray-400 p-3 rounded-md w-full"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              name="display_name"
              data-input-name="display_name"
              minLength="0"
              maxLength="50"
              placeholder="Enter display name"
            />
          </div>
        </div>

        {/* Location */}
        <div className="mt-3" data-click="location">
          <label className="section-label text-purple-500">Location</label>
          <div className="form-group mt-1">
            <input
              type="text"
              className="form-control form-control-lg border-2 border-gray-400 p-3 rounded-md w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              name="location"
              data-input-name="location"
              minLength="0"
              maxLength="50"
              placeholder="Enter location"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="mt-3" data-click="bio">
          <label className="section-label text-purple-500">Bio</label>
          <div className="form-group mt-1 mb-0">
            <textarea
              className="form-control border-2 border-gray-400 p-3 rounded-md w-full"
              name="bio"
              data-input-name="bio"
              rows="4"
              minLength="0"
              maxLength="100"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter your bio"
            />
          </div>
          <p className="w-full flex items-center justify-between text-sm text-gray-500 mt-1">
            <span className="opacity-75">
              <span className="bio-type-char">{bio.length}</span>/100
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
