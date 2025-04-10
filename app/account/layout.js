"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to the login page if no token is found
      router.push("/login");
    }
  }, [router]); // The dependency on 'router' ensures it's initialized properly

  return (
    <div className="flex flex-row w-screen overflow-x-hidden">
      <div className="w-64">
        <DashboardSidebar />
      </div>
      <div className="flex flex-col w-[calc(100%_-_16rem)]">
        <div className="z-50 w-[calc(100%_-_16rem)]">
          <DashboardNavbar />
        </div>  
        <main>{children}</main>
      </div>
    </div>
  );
}
