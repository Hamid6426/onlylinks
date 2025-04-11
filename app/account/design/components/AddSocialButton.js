"use client";
import React, { useState } from "react";

const AddSocialButton = () => {
  const [showSelect, setShowSelect] = useState(false);

  const handleAddClick = () => {
    setShowSelect(!showSelect);
  };

  return (
    <center>
      <div className="mt-2">
        {showSelect && (
          <div className="add-social-select">
            <select
              className="form-select select2 select2-hidden-accessible"
              style={{ width: "200px", height: "50px !important", textAlign: "left" }}
            >
              <option value="" disabled>
                Select Social
              </option>
            </select>
          </div>
        )}
        <button className="btn btn-primary add-social-button" type="button" onClick={handleAddClick}>
          + Add social
        </button>
      </div>
    </center>
  );
};

export default AddSocialButton;
