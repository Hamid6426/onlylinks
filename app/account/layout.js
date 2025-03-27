import React from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function layout({ children }) {
  return (
    <div className="flex flex-row w-screen overflow-x-hidden">
      <div className="w-64">
        <DashboardSidebar />
      </div>
      <div className="flex flex-col w-[calc(100%_-_16rem)]">
        <div className="w-[calc(100%_-_16rem)]">
          <DashboardNavbar />
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
