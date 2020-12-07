import React from "react";
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb";

export default function RequestAsset() {
  const crums = [
    {
      title: "Request",
    },
  ];
  return (
    <div>
      <Breadcrumbs crums={crums} />
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        This is request
      </div>
    </div>
  );
}
