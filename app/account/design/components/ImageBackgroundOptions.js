"use client";
import React from "react";

const ImageBackgroundOptions = () => {
  return (
    <div className="page-bg-options mt-4 text-center">
      <div className="flex gap-4 items-start">
        {/* Preview box */}
        <div
          className="preview-container w-[160px] h-[90px] rounded-md overflow-hidden border border-gray-400 shadow-sm"
          data-bg-preview="background_image"
          data-url="https://picsum.photos/id/4/160/90"
        >
          <img
            src="https://picsum.photos/id/4/160/90"
            alt="preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="flex-1 flex flex-col gap-3">
          <button
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md font-medium flex items-center justify-center gap-2 transition"
            data-id="upload"
            data-val="background_image"
          >
            <i className="bx bx-cloud-upload text-lg" />
            Upload an Image
          </button>

          <button
            className="w-full border border-gray-400 hover:border-gray-700 text-gray-700 py-2 px-4 rounded-md font-medium transition"
            data-id="remove"
            data-val="background_image"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageBackgroundOptions;
