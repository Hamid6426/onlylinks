"use client";
import React from "react";

const SocialIconItem = ({ icon, url, onDelete, id }) => {
  return (
    <div className="mt-3 social-div" data-id={id} data-position="-1">
      <div className="form-group">
        <div className="input-group">
          <div className="drag" style={{ cursor: "grab", alignContent: "center" }}>
            <svg
              className="svg-default"
              style={{ opacity: 0.5 }}
              focusable="false"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path>
            </svg>
          </div>
          <div className="w-10"></div>
          <div style={{ alignContent: "center", fontSize: "1.5rem" }}>
            <i className={`bx ${icon}`} style={{ fontSize: "1.5rem", width: "24px", height: "24px" }}></i>
          </div>
          <div className="w-3"></div>
          <input
            className="form-control input-url"
            type="text"
            value={url}
            placeholder="URL"
            data-test-id={id}
          />
          <div className="w-3"></div>
          <button type="button" className="py-1 px-2 btn-delete" data-test-id={id} onClick={() => onDelete(id)}>
            <i className="bx bx-trash-alt" style={{ fontSize: "1rem", verticalAlign: "middle" }}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialIconItem;
