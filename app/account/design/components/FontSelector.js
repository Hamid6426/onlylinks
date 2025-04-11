"use client";
import React from "react";

const FontSelector = () => (
  <div className="mt-4">
    <div className="text-sm font-semibold text-purple-500 mb-2">Font</div>
    <div className="form-group">
      <select
        className="form-select w-full px-3 py-3 rounded-md border border-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
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
