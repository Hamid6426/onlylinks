"use client";
import React from "react";

const SocialLinkSettings = () => {
  return (
    <div>
      <div className="flex items-center gap-1 mt-3">
        <label htmlFor="socials_display" className="toggle-switchy">
          <input type="checkbox" id="socials_display" name="socials_display" value="1" checked />
          <span className="toggle">
            <span className="switch"></span>
          </span>
        </label>
        <div className="toggle-switchy-text">Display social icons</div>
      </div>
      <div className="flex items-center gap-1 mt-3">
        <label htmlFor="social_links_new_tab" className="toggle-switchy">
          <input type="checkbox" id="social_links_new_tab" name="social_links_new_tab" value="1" checked />
          <span className="toggle">
            <span className="switch"></span>
          </span>
        </label>
        <div className="toggle-switchy-text">Open social links in new tab</div>
      </div>
    </div>
  );
};

export default SocialLinkSettings;
