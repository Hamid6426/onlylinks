"use client";
import React from "react";

const FontSelector = () => (
  <div className="mt-3">
    <div className="section-label">Font</div>
    <div className="form-group mt-2">
      <select className="form-select fonts-select2 w-full">
        <option value="Futura">Futura</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Poppins" className="selected">Poppins</option>
        <option value="Wide & Bold">Wide & Bold</option>
        <option value="Wide and Bold">Wide and Bold</option>
      </select>
    </div>
  </div>
);

export default FontSelector;
