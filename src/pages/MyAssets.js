import React from "react";
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb";

export default function MyAssets() {
  const crums = [
    {
      title: "My Assets",
    },
  ];
  return (
    <div>
      <Breadcrumbs crums={crums} />
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        this is my assets
      </div>
    </div>
  );
}
