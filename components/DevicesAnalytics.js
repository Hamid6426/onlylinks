"use client";

import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

// Dummy Data (Replace with API data)
const devices = [
  { name: "Mobile", views: 120, clicks: 45 },
  { name: "Desktop", views: 90, clicks: 30 },
  { name: "Tablet", views: 50, clicks: 20 },
];

export default function DevicesAnalytics() {
  // const [viewType, setViewType] = useState<"views" | "clicks">("views");
  const [viewType, setViewType] = useState("views");

  // Prepare chart data
  const chartData = devices.map((device) => ({
    name: device.name,
    value: viewType === "views" ? device.views : device.clicks,
  }));

  // ECharts Pie Chart Options
  const options = {
    tooltip: { trigger: "item" },
    legend: { bottom: "0%", left: "center" },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: { show: false },
        emphasis: { label: { show: true, fontSize: "14", fontWeight: "bold" } },
        data: chartData,
      },
    ],
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Devices</h2>

      {/* Chart */}
      <ReactECharts option={options} style={{ height: "300px" }} />

      {/* Toggle Views/Clicks */}
      <div className="flex justify-center space-x-4 mt-4 text-sm">
        <button
          className={`analytics-link ${viewType === "views" ? "text-gray-600 font-bold" : "text-gray-500"}`}
          onClick={() => setViewType("views")}
        >
          Views
        </button>
        <span>|</span>
        <button
          className={`analytics-link ${viewType === "clicks" ? "text-gray-600 font-bold" : "text-gray-500"}`}
          onClick={() => setViewType("clicks")}
        >
          Clicks
        </button>
      </div>
    </div>
  );
}
