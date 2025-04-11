"use client";
import React from "react";
import ThemeCardCustom from "./ThemeCardCustom";

const themes = [
  {
    id: 0,
    name: "Custom",
    bgImage: "https://picsum.photos/id/1/160/90",
    profileBorder: "border-red-500",
    borderColor: "text-red-500",
    textColor: "text-black",
  },
  {
    id: 1,
    name: "Anime Template",
    bgImage: "https://picsum.photos/id/2/160/90",
    profileBorder: "border-white",
    borderColor: "text-white",
    textColor: "text-white",
  },
  {
    id: 2,
    name: "Anime Template",
    bgImage: "https://picsum.photos/id/3/160/90",
    profileBorder: "border-black",
    borderColor: "text-black",
    textColor: "text-white",
  },
  {
    id: 4,
    name: "Anime Template",
    bgImage: "https://picsum.photos/id/4/160/90",
    profileBorder: "border-black",
    borderColor: "text-black",
    textColor: "text-white",
  },
  {
    id: 5,
    name: "Pink Template",
    bgImage: "linear-gradient(to right bottom, rgb(238, 0, 255), rgb(255, 255, 255))",
    profileBorder: "border-white",
    borderColor: "text-white",
    textColor: "text-white",
  },
  {
    id: 6,
    name: "Anime Template",
    bgImage: "https://picsum.photos/id/4/160/90",
    profileBorder: "border-black",
    borderColor: "text-black",
    textColor: "text-white",
  },
  {
    id: 7,
    name: "Anime Template",
    bgImage: "https://picsum.photos/id/4/160/90",
    profileBorder: "border-white",
    borderColor: "text-white",
    textColor: "text-black",
  },
  {
    id: 8,
    name: "Hollywood",
    bgImage: "",
    profileBorder: "border-black",
    borderColor: "text-black",
    textColor: "text-white",
  },
];

const ThemeSelector = () => {
  const [selectedThemeId, setSelectedThemeId] = React.useState(null);

  return (
    <div className="flex flex-wrap gap-3 overflow-auto my-3">
      {themes.map((theme) => (
        <ThemeCardCustom
          key={theme.id}
          id={theme.id}
          bgImage={theme.bgImage}
          profileBorder={theme.profileBorder}
          borderColor={theme.borderColor}
          textColor={theme.textColor}
          name={theme.name}
          selected={selectedThemeId === theme.id}
          onSelect={setSelectedThemeId}
        />
      ))}
    </div>
  );
};

export default ThemeSelector;
