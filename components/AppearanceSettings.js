"use client";

import React, { useState } from "react";

const AppearanceSettings = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAppearance = () => setIsOpen(!isOpen);

  return (
    <div className="border rounded-md overflow-hidden">
      {/* Toggle Header */}
      <div
        className="tab-toggle flex justify-between items-center cursor-pointer p-3 bg-gray-100 border-b"
        onClick={toggleAppearance}
      >
        <div className="tab-title font-semibold">Appearance</div>
        <i className={`fa ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
      </div>

      {/* Appearance Settings */}
      {isOpen && (
        <div className="p-3">
          <div className="relative mt-3 appearance-colors-custom">
            {/* Header Color */}
            <div className="section-label-bold mt-3">Header color</div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="flex items-center">
                <div
                  className="color-select cursor-pointer w-6 h-6 rounded"
                  role="button"
                  tabIndex="0"
                  data-color-id="header_text"
                  data-current-color="rgb(0, 0, 0)"
                  style={{ backgroundColor: "rgb(0, 0, 0)" }}
                ></div>
                <div className="section-label-sm px-3">
                  Header text and icons
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="color-select cursor-pointer w-6 h-6 rounded"
                  role="button"
                  tabIndex="0"
                  data-color-id="header_text_outline"
                  data-current-color="rgb(0, 0, 0)"
                  style={{ backgroundColor: "rgb(0, 0, 0)" }}
                ></div>
                <div className="section-label-sm px-3">Header text outline</div>
              </div>
              <div className="flex items-center col-span-2">
                <div
                  className="color-select cursor-pointer w-6 h-6 rounded"
                  role="button"
                  tabIndex="0"
                  data-color-id="header_text_bg"
                  data-current-color="rgb(0, 0, 0)"
                  style={{ backgroundColor: "rgb(0, 0, 0)" }}
                ></div>
                <div className="section-label-sm px-3">Header text background</div>
              </div>
            </div>

            {/* Link Block Colors */}
            <div className="section-label-bold mt-3">Link block colors</div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="flex items-center">
                <div
                  className="color-select cursor-pointer w-6 h-6 rounded"
                  role="button"
                  tabIndex="0"
                  data-color-id="link_block_bg"
                  data-current-color="rgb(0, 0, 0)"
                  style={{ backgroundColor: "rgb(0, 0, 0)" }}
                ></div>
                <div className="section-label-sm px-3">
                  Link block background
                </div>
              </div>
              <div className="flex items-center">
                <div
                  className="color-select cursor-pointer w-6 h-6 rounded"
                  role="button"
                  tabIndex="0"
                  data-color-id="link_block_button_text"
                  data-current-color="rgb(255, 255, 255)"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                ></div>
                <div className="section-label-sm px-3">Link button text</div>
              </div>
            </div>

            {/* Block Colors */}
            <div className="section-label-bold mt-3">Block colors</div>
            <div className="grid grid-cols-1 gap-2 mt-1">
              <div className="flex items-center">
                <div
                  className="color-select cursor-pointer w-6 h-6 rounded"
                  role="button"
                  tabIndex="0"
                  data-color-id="block_text"
                  data-current-color="rgb(0, 0, 0)"
                  style={{ backgroundColor: "rgb(0, 0, 0)" }}
                ></div>
                <div className="section-label-sm px-3">Block text</div>
              </div>
            </div>
          </div>

          {/* Font Selector */}
          <div className="mt-3">
            <div className="section-label font-semibold">Font</div>
            <div className="form-group mt-2">
              <select
                className="form-select w-full border p-2 rounded"
                name="font"
              >
                <option value="Futura">Futura</option>
                <option value="Futura">Futura</option>
                <option value="Futura">Futura</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Poppins" selected>
                  Poppins
                </option>
                <option value="Wide & Bold">Wide &amp; Bold</option>
                <option value="Wide and Bold">Wide and Bold</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppearanceSettings;
