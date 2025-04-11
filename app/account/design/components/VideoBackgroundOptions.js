"use client";
import React from "react";

const VideoBackgroundOptions = () => {
  return (
    <div className="page-bg-options mt-3">
      <div className="flex flex-1 gap-2 mt-3">
        <div className="preview-container overflow-hidden" data-bg-preview="background_video"></div>
        <div className="flex flex-1 flex-col">
          <div className="w-full">
            <button
              className="btn btn-primary relative w-full"
              data-id="upload"
              data-val="background_video"
            >
              <span className="flex items-center justify-center font-semibold gap-1">
                <i className="bx bx-cloud-upload icon-default-large" />
                Upload a Video
              </span>
            </button>
          </div>
          <button
            className="btn w-full mt-2"
            data-id="remove"
            data-val="background_video"
            style={{ display: "none" }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBackgroundOptions;
