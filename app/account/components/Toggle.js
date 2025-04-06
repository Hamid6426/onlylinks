import React from "react";

export default function Toggle({ label, checked, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <div
        className="
            w-10 h-6 bg-gray-300 peer-focus:ring-3 peer-focus:ring-gray-300 rounded-full
            peer-checked:bg-purple-500 peer-checked:after:translate-x-4
            after:content-[''] after:absolute after:top-1 after:left-1
            after:bg-white after:border after:border-gray-300
            after:rounded-full after:w-4 after:h-4
            after:transition-all duration-300 ease-in-out
          "
      />
      <span className="ml-2 select-none">{label}</span>
    </label>
  );
}
