"use client";

import Image from "next/image";
import React, { useState } from "react";

// Solid Background Options
const BackgroundSolidOptions = () => {
  return (
    <div className="page-bg-options" data-bg-type="background_solid">
      <div className="flex mt-3 items-center">
        <div
          className="color-select cursor-pointer"
          role="button"
          data-color-id="bg"
          data-current-color="rgb(23, 18, 115)"
          style={{ backgroundColor: "rgb(23, 18, 115)" }}
        ></div>
        <div className="section-label-sm ml-2">Page background color</div>
      </div>
    </div>
  );
};

// Gradient Background Options
const BackgroundGradientOptions = () => {
  return (
    <div className="page-bg-options" data-bg-type="background_gradient">
      <div className="grid grid-cols-3 gap-2 mt-3 grid-gradient-select">
        <button
          className="section-label selected"
          type="button"
          data-val="linear"
          style={{
            backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))",
            color: "rgb(0, 0, 0)",
          }}
        >
          Linear
        </button>
        <button
          className="section-label"
          type="button"
          data-val="radial"
          style={{
            backgroundImage: "radial-gradient(rgb(255, 255, 255), rgb(255, 255, 255))",
            color: "rgb(0, 0, 0)",
          }}
        >
          Radial
        </button>
        <button
          className="section-label"
          type="button"
          data-val="diagonal"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, rgb(255, 255, 255), rgb(255, 255, 255))",
            color: "rgb(0, 0, 0)",
          }}
        >
          Diagonal
        </button>
      </div>
      <div className="grid grid-rows-2 gap-4 mt-3 grid-gradient-color">
        <div className="flex items-center">
          <div
            className="color-select cursor-pointer"
            role="button"
            data-color-id="bg1"
            data-current-color="rgb(255, 255, 255)"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          ></div>
          <div className="section-label-sm ml-2">Page background color 1</div>
        </div>
        <div className="flex items-center">
          <div
            className="color-select cursor-pointer"
            role="button"
            data-color-id="bg2"
            data-current-color="rgb(255, 255, 255)"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          ></div>
          <div className="section-label-sm ml-2">Page background color 2</div>
        </div>
      </div>
    </div>
  );
};

// Image Background Options
const BackgroundImageOptions = () => {
  return (
    <div className="page-bg-options text-center" data-bg-type="background_image">
      <div className="mt-3">
        <div className="flex flex-1 gap-2 mt-3">
          <div
            className="preview-container overflow-hidden"
            data-bg-preview="background_image"
            data-url="/upload/thumb/themes/thumb_bcdeb0f8_0ffa287ea44dec2eea8e9db49d7f2341.jpg"
          >
            <Image
              src="/upload/thumb/themes/thumb_bcdeb0f8_0ffa287ea44dec2eea8e9db49d7f2341.jpg"
              alt="preview"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="w-full">
              <button
                className="btn btn-primary relative w-full"
                data-id="upload"
                data-val="background_image"
              >
                <span className="flex items-center justify-center font-semibold gap-1">
                  <i className="bx bx-cloud-upload icon-default-large"></i>
                  Upload an Image
                </span>
              </button>
            </div>
            <button
              className="btn w-full mt-2"
              style={{ display: "block" }}
              data-id="remove"
              data-val="background_image"
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

// Main Parent Component
const PageBackgroundOptions = () => {
  // Default background type set to "background_image"
  const [bgType, setBgType] = useState("background_image");

  // Optionally, you can add a handler here to change bgType based on user interaction.
  // For now, only the corresponding section is rendered.
  return (
    <div>
      {bgType === "background_solid" && <BackgroundSolidOptions />}
      {bgType === "background_gradient" && <BackgroundGradientOptions />}
      {bgType === "background_image" && <BackgroundImageOptions />}
    </div>
  );
};

export default PageBackgroundOptions;
