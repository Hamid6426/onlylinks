"use client";
import React, { useState } from "react";

import ThemeCard from "./components/ThemeCard";
import BackgroundSelector from "./components/BackgroundSelector";
import BackgroundOptionsPanel from "./components/BackgroundOptionsPanel";
import BackgroundAnimationSelector from "./components/BackgroundAnimationSelector";
import AppearanceColorsSelector from "./components/AppearanceColorsSelector";
import FontSelector from "./components/FontSelector";
import ProfilePicture from "./components/ProfilePicture";
import ProfilePictureSize from "./components/ProfilePictureSize";
import ProfilePictureOutline from "./components/ProfilePictureOutline";
import UserInfo from "./components/UserInfo";
import HeaderSettings from "@/components/HeaderSettings";
import BlockStyle from "./components/BlockStyle";
import CornerRadius from "./components/CornerRadius";
import BlockTransparency from "./components/BlockTransparency";
import ThemeSelector from "@/components/ThemeSelector";
import ThemeCardCustom from "./components/ThemeCardCustom";
import SocialLinksManager from "./components/SocialLinkManager";

export default function DesignPage() {
  const [bgType, setBgType] = useState("image");
  const [animation, setAnimation] = useState("slide");
  return (
    <div className="mx-auto max-w-[640px]">
      <ThemeCard />
      <ThemeSelector />
      <ThemeCardCustom />
      <BackgroundSelector onSelect={setBgType} />
      <BackgroundOptionsPanel selectedType={bgType} />
      <BackgroundAnimationSelector value={animation} onChange={setAnimation} />
      <AppearanceColorsSelector />
      <FontSelector />
      <ProfilePicture />
      <ProfilePictureSize />
      <ProfilePictureOutline />
      <UserInfo />
      <HeaderSettings />
      <BlockStyle />
      <CornerRadius />
      <BlockTransparency />
      <SocialLinksManager />
    </div>
  );
}
