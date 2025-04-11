"use client";
import React, { useState } from "react";
import SocialIconItem from "./SocialIconItem";

const SocialIconList = () => {
  const [socialIcons, setSocialIcons] = useState([
    { id: 3, icon: "bxl-instagram", url: "https://insta.com" },
    { id: 2, icon: "bxl-facebook", url: "https://facebook.com" },
  ]);

  const handleDelete = (id) => {
    setSocialIcons(socialIcons.filter(icon => icon.id !== id));
  };

  return (
    <div className="social-icons-content ui-sortable">
      {socialIcons.map((icon) => (
        <SocialIconItem key={icon.id} id={icon.id} icon={icon.icon} url={icon.url} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default SocialIconList;
