"use client";

import React from "react";
import dynamic from "next/dynamic";
import { BiBarChart } from "react-icons/bi";

// Load ECharts dynamically (avoids SSR issues)
const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

export default function ActivityAnalytics() {
  const data = {
    views: 5,
    clicks: 0,
  };

  // ECharts Configuration
  const options = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["Mar 18", "Mar 19", "Mar 20", "Mar 21", "Mar 22"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Views",
        type: "line",
        data: [0, 2, 3, 5, 5],
        color: "rgba(0, 200, 0, 0.5)",
      },
      {
        name: "Clicks",
        type: "line",
        data: [0, 0, 0, 0, 0],
        color: "rgba(0, 0, 100, 0.5)",
      },
    ],
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      {/* Title */}
      <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
        <BiBarChart size={22} />
        <span>Activity</span>
      </div>

      {/* Views & Clicks Summary */}
      <div className="flex justify-center text-center my-4">
        <div className="w-1/2 border-r border-gray-300">
          <p className="text-gray-600">Views</p>
          <p className="text-xl font-bold">{data.views}</p>
        </div>
        <div className="w-1/2">
          <p className="text-gray-600">Clicks</p>
          <p className="text-xl font-bold">{data.clicks}</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-64">
        <ReactECharts option={options} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}
