"use client";

import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

// Dummy Data (Replace with API data)
const socialData = [
  { name: "Facebook", value: 80 },
  { name: "Twitter", value: 45 },
  { name: "Instagram", value: 60 },
  { name: "LinkedIn", value: 30 },
];

export default function SocialIconsAnalytics() {
  const hasData = socialData.length > 0;

  // ECharts Pie Chart Options
  const options = {
    tooltip: { trigger: "item" },
    legend: { bottom: "0%", left: "center" },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        label: { show: false },
        emphasis: { label: { show: true, fontSize: "14", fontWeight: "bold" } },
        data: socialData,
      },
    ],
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Social Icons</h2>

      {/* Chart or No Data Message */}
      {hasData ? (
        <ReactECharts option={options} style={{ height: "300px" }} />
      ) : (
        <div className="text-center text-gray-500 py-10">No Data</div>
      )}
    </div>
  );
}
