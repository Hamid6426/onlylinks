"use client";
import React from "react";

const ImageBackgroundOptions = () => {
  return (
    <div className="page-bg-options text-center mt-3">
      <div className="flex flex-1 gap-2 mt-3">
        <div
          className="preview-container overflow-hidden"
          data-bg-preview="background_image"
          data-url="https://picsum.photos/id/4/160/90"
        >
          <img
            src="https://picsum.photos/id/4/160/90"
            alt="preview"
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
                <i className="bx bx-cloud-upload icon-default-large" />
                Upload an Image
              </span>
            </button>
          </div>
          <button className="btn w-full mt-2" data-id="remove" data-val="background_image">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageBackgroundOptions;
