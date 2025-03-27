"use client";

import React from "react";
import dynamic from "next/dynamic";
import { BiBarChart } from "react-icons/bi";

// Dynamically import ECharts to prevent SSR issues
const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

export default function Activity() {
  const analyticsData = {
    views: 5,
    uniqueViews: 0,
    clicks: 0,
    uniqueClicks: 0,
    dates: ["Mar 18", "Mar 19", "Mar 20", "Mar 21", "Mar 22"],
    viewsData: [0, 2, 3, 5, 5],
    clicksData: [0, 0, 0, 0, 0],
  };

  // Chart Options
  const options = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: analyticsData.dates,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Views",
        type: "line",
        data: analyticsData.viewsData,
        color: "rgba(0, 200, 0, 0.5)",
      },
      {
        name: "Clicks",
        type: "line",
        data: analyticsData.clicksData,
        color: "rgba(0, 0, 100, 0.5)",
      },
    ],
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      {/* Header */}
      <div className="flex items-center gap-2 text-lg font-semibold text-gray-700">
        <BiBarChart size={22} />
        <span>Activity</span>
      </div>

      {/* Metrics Summary */}
      <div className="flex justify-center text-center my-4">
        <div className="w-1/2 border-r border-gray-300">
          <p className="text-gray-600">Views</p>
          <p className="text-xl font-bold">{analyticsData.views}</p>
        </div>
        <div className="w-1/2">
          <p className="text-gray-600">Clicks</p>
          <p className="text-xl font-bold">{analyticsData.clicks}</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-64">
        <ReactECharts option={options} style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Unique Views & Clicks */}
      <div className="mt-4 flex justify-center text-center gap-8 text-gray-700">
        <div>
          <p className="text-sm">Unique Views</p>
          <p className="text-lg font-semibold">{analyticsData.uniqueViews}</p>
        </div>
        <div>
          <p className="text-sm">Unique Clicks</p>
          <p className="text-lg font-semibold">{analyticsData.uniqueClicks}</p>
        </div>
      </div>
    </div>
  );
}
