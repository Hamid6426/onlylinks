import React from "react";
import ActivityAnalytics from "../../../components/ActivityAnalytics";
import Activity from "../../../components/Activity";
import TopPerformingLinks from "../../../components/TopPerformingLinks";
import Locations from "../../../components/Locations";
import DevicesAnalytics from "../../../components/DevicesAnalytics";
import SocialIconsAnalytics from "../../../components/SocialIconsAnalytics";
import TopReferrers from "../../../components/TopReferrers";

export default function page() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 my-6">
      <ActivityAnalytics />
      <Activity />
      <TopPerformingLinks />
      {/* <Locations /> */}
      <TopReferrers />
      <DevicesAnalytics /> 
      <SocialIconsAnalytics />
    </div>
  );
}
