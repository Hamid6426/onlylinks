import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";

export default function layout({ children }) {
  return (
    <div className="flex flex-row w-screen">
      <DashboardSidebar />
      <div className="flex flex-col w-full">
        <DashboardNavbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
