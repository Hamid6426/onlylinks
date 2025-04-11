"use client";
import React from "react";

const ThemeCard = ({
  imageUrl,
  profileUrl,
  username,
  themeTitle,
  selected,
  animation,
  onClick,
  borderColor = "border-black",
  textColor = "text-black",
  bgColor = "bg-white",
}) => {
  return (
    <div className="text-center theme-switch cursor-pointer" role="button" onClick={onClick}>
      <div
        className={`theme-preview ${selected ? "theme-selected" : ""}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
          backgroundPosition: "center center",
        }}
        data-animation={animation}
      >
        <div className="mt-2">
          <img
            src={profileUrl}
            className={`theme-profile-picture w-[30px] h-[30px] rounded-full border ${borderColor}`}
            alt=""
          />
          <div className={`block mt-2 text-[7px] overflow-hidden font-poppins ${textColor}`}>
            <span className="text">{username}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[77%] mx-auto mt-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`flex justify-center items-center h-6 rounded ${bgColor}`}>
              <div
                className={`theme-preview-link font-poppins ${
                  textColor === "text-black" ? "text-black" : "text-white"
                }`}
              >
                Link
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-label theme-title mt-2">{themeTitle}</div>
      <div className="form-check">
        <input className="form-check-input theme-switch-input float-none" type="radio" name="theme" />
      </div>
    </div>
  );
};

export default ThemeCard;
