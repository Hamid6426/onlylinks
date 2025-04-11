"use client";
import React from "react";

const VideoBackgroundOptions = () => {
  return (
    <div className="page-bg-options mt-4">
      <div className="flex gap-4 items-start">
        {/* Buttons */}
        <div className="flex-1 flex flex-col gap-3">
          <button
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md font-medium flex items-center justify-center gap-2 transition"
            data-id="upload"
            data-val="background_video"
          >
            <i className="bx bx-cloud-upload text-lg" />
            Upload a Video
          </button>

          <button
            className="w-full border border-gray-400 hover:border-gray-700 text-gray-700 py-2 px-4 rounded-md font-medium transition hidden"
            data-id="remove"
            data-val="background_video"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBackgroundOptions;
