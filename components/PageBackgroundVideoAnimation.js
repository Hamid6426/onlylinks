"use client";

import React, { useState } from "react";

const BackgroundVideoOptions = () => {
  // Optionally, you can control whether to show this section via state.
  // Here it's set to hidden (display: none) by default.
  const [showVideoOptions] = useState(false);

  return (
    <div
      className="page-bg-options"
      data-bg-type="background_video"
      style={{ display: showVideoOptions ? "block" : "none" }}
    >
      <div className="mt-3">
        <div className="flex flex-1 gap-2 mt-3">
          <div
            className="preview-container overflow-hidden"
            data-bg-preview="background_video"
          ></div>
          <div className="flex flex-1 flex-col">
            <div className="w-full">
              <button
                className="btn btn-primary relative w-full"
                data-id="upload"
                data-val="background_video"
              >
                <span className="flex items-center justify-center font-semibold gap-1">
                  <i className="bx bx-cloud-upload icon-default-large"></i>
                  Upload an Video
                </span>
              </button>
            </div>
            <button
              className="btn w-full mt-2"
              style={{ display: "none" }}
              data-id="remove"
              data-val="background_video"
              data-title="Remove"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BackgroundAnimationOptions = () => {
  return (
    <div className="page-bg-animation block">
      <div className="my-6">
        <div className="h-px w-full" style={{ background: "rgb(224, 224, 224)" }}></div>
      </div>
      <div className="section-label mt-3">Background animation</div>
      <select className="form-select mt-1 w-full" name="background_animation">
        <option value="" className="selected">
          Disabled
        </option>
        <option value="gradient" style={{ display: "none" }}>
          Gradient
        </option>
        <option value="cube">Cube</option>
        <option value="slide">Slide</option>
      </select>
    </div>
  );
};

const PageBackgroundVideoAnimation = () => {
  return (
    <div>
      <BackgroundVideoOptions />
      <BackgroundAnimationOptions />
    </div>
  );
};

export default PageBackgroundVideoAnimation;
