import React from "react";
import { Breadcrumb as BreCum } from "antd";

export default function Breadcrumb({ crums }) {
  return (
    <BreCum style={{ margin: "16px 0" }}>
      {crums.map((crum, index) => (
        <BreCum.Item key={index}>{crum.title}</BreCum.Item>
      ))}
    </BreCum>
  );
}
