"use client";
import React from "react";
import SolidBackgroundOptions from "./SolidBackgroundOptions";
import GradientBackgroundOptions from "./GradientBackgroundOptions";
import ImageBackgroundOptions from "./ImageBackgroundOptions";
import VideoBackgroundOptions from "./VideoBackgroundOptions";

const BackgroundOptionsPanel = ({ selectedType }) => {
  return (
    <>
      {selectedType === "solid" && <SolidBackgroundOptions />}
      {selectedType === "gradient" && <GradientBackgroundOptions />}
      {selectedType === "image" && <ImageBackgroundOptions />}
      {selectedType === "video" && <VideoBackgroundOptions />}
    </>
  );
};

export default BackgroundOptionsPanel;
