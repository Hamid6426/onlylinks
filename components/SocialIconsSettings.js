"use client";

import React, { useState } from "react";

const SocialIconsSettings = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [displaySocialIcons, setDisplaySocialIcons] = useState(false);
  const [openSocialLinksNewTab, setOpenSocialLinksNewTab] = useState(false);

  return (
    <div className="border rounded-md overflow-hidden">
      {/* Tab Toggle */}
      <div
        className="tab-toggle flex justify-between items-center cursor-pointer p-3 bg-gray-100 border-b"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="tab-title font-semibold">Social icons</div>
        <i className={`fa ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
      </div>

      {isOpen && (
        <div className="p-3">
          {/* Social Icons Content */}
          <div className="mt-3 social-icons-content ui-sortable"></div>

          <div className="flex flex-col items-center mt-2">
            {/* Hidden Select for adding social (if needed) */}
            <div className="mb-2">
              <div className="add-social-select hidden">
                <select
                  className="form-select select2"
                  style={{
                    width: "200px",
                    height: "50px",
                    textAlign: "left",
                  }}
                  disabled
                >
                  <option value="" disabled></option>
                </select>
              </div>
              <button
                className="btn btn-primary add-social-button bg-gray-500 text-white py-2 px-4 rounded"
                type="button"
              >
                + Add social
              </button>
            </div>
          </div>

          {/* Toggle for Display Social Icons */}
          <div className="flex items-center gap-1 mt-3">
            <label
              htmlFor="socials_display"
              className="toggle-switchy flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="socials_display"
                name="socials_display"
                value="1"
                checked={displaySocialIcons}
                onChange={() => setDisplaySocialIcons(!displaySocialIcons)}
                className="mr-2"
              />
              <span className="toggle inline-block">
                <span className="switch block w-6 h-3 bg-gray-300 rounded-full"></span>
              </span>
            </label>
            <div className="toggle-switchy-text">Display social icons</div>
          </div>

          {/* Toggle for Opening Social Links in New Tab */}
          <div className="flex items-center gap-1 mt-3">
            <label
              htmlFor="social_links_new_tab"
              className="toggle-switchy flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="social_links_new_tab"
                name="social_links_new_tab"
                value="1"
                checked={openSocialLinksNewTab}
                onChange={() =>
                  setOpenSocialLinksNewTab(!openSocialLinksNewTab)
                }
                className="mr-2"
              />
              <span className="toggle inline-block">
                <span className="switch block w-6 h-3 bg-gray-300 rounded-full"></span>
              </span>
            </label>
            <div className="toggle-switchy-text">
              Open social links in new tab
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialIconsSettings;
