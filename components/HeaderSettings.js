"use client";

import React, { useState } from "react";

const HeaderSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border rounded-md overflow-hidden">
      {/* Tab Toggle */}
      <div
        className="tab-toggle flex justify-between items-center cursor-pointer p-4 bg-gray-100"
        onClick={toggleOpen}
      >
        <div className="tab-title text-lg font-semibold text-purple-600">Header</div>
        <i className={`fa ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`} />
      </div>

      {/* Content Toggle */}
      {isOpen && (
        <div className="p-4 space-y-6">
          {/* Header Text Size */}
          <div>
            <div className="section-label text-purple-600 mt-3">Header text size</div>
            <div className="flex gap-2 mt-2">
              <div
                role="button"
                className="grid-button w-10 h-10 flex items-center justify-center font-bold cursor-pointer border rounded-full"
                data-val="s"
              >
                S
              </div>
              <div
                role="button"
                className="grid-button w-10 h-10 flex items-center justify-center font-bold cursor-pointer border rounded-full selected"
                data-val="m"
              >
                M
              </div>
              <div
                role="button"
                className="grid-button w-10 h-10 flex items-center justify-center font-bold cursor-pointer border rounded-full"
                data-val="l"
              >
                L
              </div>
            </div>
          </div>

          {/* Header Text Outline Toggle */}
          <div className="flex items-center gap-2 mt-4">
            <label
              htmlFor="header_text_outline"
              className="toggle-switchy flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="header_text_outline"
                name="header_text_outline"
                className="mr-2"
              />
              <span className="toggle inline-block">
                <span className="switch block w-6 h-3 bg-gray-300 rounded-full"></span>
              </span>
            </label>
            <div className="toggle-switchy-text text-gray-600">Header text outline</div>
          </div>

          {/* Header Text Background Transparency */}
          <div>
            <div className="section-label text-purple-600 mt-3">
              Header text background transparency
            </div>
            <div className="mt-2 flex items-center gap-3">
              <span className="w-full">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  className="w-full"
                  data-test-name="header_text_bg_transparency"
                />
              </span>
              <div className="w-[120px] flex items-center gap-2">
                <input
                  type="number"
                  className="form-control form-control-sm border p-2 rounded w-full"
                  max="100"
                  min="0"
                  data-test-name="header_text_bg_transparency"
                />
                <label className="mt-1 ml-1 text-gray-600">%</label>
              </div>
            </div>
          </div>

          {/* Header Format */}
          <div>
            <div className="section-label text-purple-600 mt-3">Header format</div>
            <div className="flex gap-2 mt-2">
              <div
                role="button"
                className="grid-button w-10 h-10 flex items-center justify-center cursor-pointer border rounded"
                data-val="0"
              >
                <div>1</div>
              </div>
              <div
                role="button"
                className="grid-button w-10 h-10 flex items-center justify-center cursor-pointer border rounded selected"
                data-val="1"
              >
                <div>2</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSettings;
