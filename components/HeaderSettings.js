"use client";

import Image from "next/image";
import React, { useState } from "react";

const HeaderSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border rounded-md overflow-hidden">
      {/* Tab Toggle */}
      <div
        className="tab-toggle flex justify-between items-center cursor-pointer p-3 bg-gray-100 border-b"
        onClick={toggleOpen}
      >
        <div className="tab-title font-semibold">Header</div>
        <i className={`fa ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
      </div>

      {isOpen && (
        <div className="p-3 space-y-6">
          {/* Profile Picture Section */}
          <div>
            <div className="section-label mt-3" data-click="profile_picture">
              Profile picture
            </div>
            <div className="flex flex-col mt-1">
              <div className="profile-picture-container" id="profile-picture">
                <label className="upload-picture-profile cursor-pointer">
                  <span className="preview-container relative inline-block">
                    <Image
                      className="profile-pic-img rounded-full"
                      alt=""
                      src="/dist/img/profile-picture.png"
                      width={100}
                      height={100}  
                    />
                    <span className="upload-icon-container absolute inset-0 flex items-center justify-center">
                      <span className="upload-icon" role="button">
                        <svg
                          className="upload-icon-img w-6 h-6"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="3.2"></circle>
                          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Profile Picture Shape */}
          <div>
            <div className="section-label mt-3">Profile picture shape</div>
            <div className="flex gap-2 mt-2 picture-shape">
              <div
                className="grid-button cursor-pointer border p-2"
                role="button"
                data-val="10"
              >
                <span
                  className="grid-bg block"
                  style={{
                    borderRadius: "10px",
                    width: "100%",
                    height: "100%",
                  }}
                ></span>
              </div>
              <div
                className="grid-button cursor-pointer border p-2 selected"
                role="button"
                data-val="10000"
              >
                <span
                  className="grid-bg block"
                  style={{
                    borderRadius: "10000px",
                    width: "100%",
                    height: "100%",
                  }}
                ></span>
              </div>
            </div>
          </div>

          {/* Profile Picture Size */}
          <div>
            <div className="section-label mt-3">Profile picture size</div>
            <div className="mt-2">
              {/* Hidden Range (if needed) */}
              <div className="range-picture-size hidden">
                <div className="flex items-center">
                  <span className="w-full">
                    <input
                      type="range"
                      min="50"
                      max="300"
                      step="1"
                      className="w-full"
                      data-test-name="profile_picture_size"
                    />
                  </span>
                  <div className="w-[120px]">
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        className="form-control form-control-sm border p-1 rounded w-full"
                        max="300"
                        min="50"
                        data-test-name="profile_picture_size"
                      />
                      <label className="mt-1 ml-1">px</label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Visible Range */}
              <div className="range-picture-size-2">
                <div className="flex items-center">
                  <span className="w-full">
                    <input
                      type="range"
                      min="50"
                      max="100"
                      step="1"
                      className="w-full"
                      data-test-name="profile_picture_size2"
                    />
                  </span>
                  <div className="w-[120px]">
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        className="form-control form-control-sm border p-1 rounded w-full"
                        max="80"
                        min="50"
                        data-test-name="profile_picture_size2"
                      />
                      <label className="mt-1 ml-1">px</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Picture Outline Toggle */}
            <div className="flex items-center gap-1 mt-3">
              <label
                htmlFor="profile-picture-outline"
                className="toggle-switchy flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="profile-picture-outline"
                  name="profile_picture_outline"
                  value="1"
                  className="mr-2"
                />
                <span className="toggle inline-block">
                  <span className="switch block w-6 h-3 bg-gray-300 rounded-full"></span>
                </span>
              </label>
              <div className="toggle-switchy-text">Profile picture outline</div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6">
            <div className="h-px w-full" style={{ background: "rgb(224, 224, 224)" }}></div>
          </div>

          {/* Display Name, Location, Bio */}
          <div className="flex flex-col space-y-4">
            <div data-click="display_name">
              <label className="section-label">Display name</label>
              <div className="form-group mt-1">
                <input
                  type="text"
                  className="form-control form-control-lg border p-2 rounded w-full"
                  defaultValue="nbkjb"
                  name="display_name"
                  data-input-name="display_name"
                  minLength="0"
                  maxLength="50"
                />
              </div>
            </div>
            <div data-click="location">
              <label className="section-label">Location</label>
              <div className="form-group mt-1">
                <input
                  type="text"
                  className="form-control form-control-lg border p-2 rounded w-full"
                  defaultValue="bjkbjknjk"
                  name="location"
                  data-input-name="location"
                  minLength="0"
                  maxLength="50"
                />
              </div>
            </div>
            <div data-click="bio">
              <label className="section-label">Bio</label>
              <div className="form-group mt-1 mb-0">
                <textarea
                  className="form-control border p-2 rounded w-full"
                  name="bio"
                  data-input-name="bio"
                  rows="3"
                  minLength="0"
                  maxLength="100"
                  defaultValue="ljndkldnanlnvlda"
                ></textarea>
              </div>
              <p className="w-full flex items-center justify-between">
                <span className="section-label-sm opacity-50 text-black">
                  <span className="bio-type-char">16</span>/100
                </span>
              </p>
            </div>
          </div>

          {/* Header Text Size */}
          <div>
            <div className="section-label mt-3">Header text size</div>
            <div className="flex gap-2 mt-2 header-text-size">
              <div
                role="button"
                className="grid-button w-10 h-10 flex items-center justify-center font-bold cursor-pointer border rounded selected"
                data-val="s"
              >
                S
              </div>
              <div
                role="button"
                className="grid-button w-10 h-10 flex items-center justify-center font-bold cursor-pointer border rounded"
                data-val="m"
              >
                M
              </div>
              <div
                role="button"
                className="grid-button w-10 h-10 flex items-center justify-center font-bold cursor-pointer border rounded"
                data-val="l"
              >
                L
              </div>
            </div>
          </div>

          {/* Header Text Outline Toggle */}
          <div className="flex items-center gap-1 mt-3">
            <label
              htmlFor="header_text_outline"
              className="toggle-switchy flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="header_text_outline"
                name="header_text_outline"
                value="1"
                className="mr-2"
              />
              <span className="toggle inline-block">
                <span className="switch block w-6 h-3 bg-gray-300 rounded-full"></span>
              </span>
            </label>
            <div className="toggle-switchy-text">Header text outline</div>
          </div>

          {/* Header Text Background Transparency */}
          <div>
            <div className="section-label mt-3">
              Header text background transparency
            </div>
            <div className="mt-2 flex items-center">
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
              <div className="w-[120px]">
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    className="form-control form-control-sm border p-1 rounded w-full"
                    max="100"
                    min="0"
                    data-test-name="header_text_bg_transparency"
                  />
                  <label className="mt-1 ml-1">%</label>
                </div>
              </div>
            </div>
          </div>

          {/* Header Format */}
          <div>
            <div className="section-label mt-3">Header format</div>
            <div className="flex gap-2 mt-2 header-format">
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
