"use client";

import React, { useState } from "react";

const themes = [
  {
    id: 0,
    name: "Custom",
    image:
      "/upload/thumb/themes/thumb_bcdeb0f8_0ffa287ea44dec2eea8e9db49d7f2341.jpg",
    textColor: "text-black",
    bgColor: "bg-black/30",
    borderRadius: "rounded-sm",
  },
  {
    id: 9,
    name: "Hollywood",
    image: "",
    textColor: "text-white",
    bgColor: "bg-black",
    borderRadius: "rounded-sm",
  },
  {
    id: 7,
    name: "Anime Template",
    image:
      "/upload/thumb/themes/thumb_3edb52fd_df66e0d7baad5015e936264338acee3d.jpg",
    textColor: "text-black",
    bgColor: "bg-white",
    borderRadius: "rounded-full",
  },
];

const ThemeSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState(0);

  const handleThemeChange = (id) => {
    setSelectedTheme(id);
    console.log("Selected Theme ID:", id);
  };

  return (
    <div className="flex mt-3 mb-3 gap-3 flex-wrap max-h-[1000px] overflow-auto">
      {themes.map((theme) => (
        <div
          key={theme.id}
          className={`flex flex-col items-center cursor-pointer p-3 border rounded-md shadow-md hover:shadow-lg transition-all ${
            selectedTheme === theme.id ? "border-gray-500" : "border-transparent"
          }`}
          onClick={() => handleThemeChange(theme.id)}
        >
          <div
            className="w-40 h-40 bg-cover bg-center rounded-md overflow-hidden relative"
            style={{ backgroundImage: theme.image ? `url(${theme.image})` : "none" }}
          >
            <div className="absolute top-2 left-2 flex items-center space-x-2">
              <img
                src="/dist/img/profile-picture.png"
                alt=""
                className="w-8 h-8 rounded-full border"
              />
              <span className={`text-[10px] font-medium ${theme.textColor}`}>
                @username
              </span>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 space-y-1">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center h-6 ${theme.bgColor} ${theme.borderRadius}`}
                >
                  <span className={`text-[10px] font-medium ${theme.textColor}`}>
                    Link
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 text-sm font-semibold">{theme.name}</div>
          <div className="mt-1">
            <input
              type="radio"
              name="theme"
              className="form-radio"
              checked={selectedTheme === theme.id}
              onChange={() => handleThemeChange(theme.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;
