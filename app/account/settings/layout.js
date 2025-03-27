import React from "react";
import SettingsNavbar from "@/components/SettingsNavbar";

export default function layout({ children }) {
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      <SettingsNavbar />
      <main>{children}</main>
    </div>
  );
}
