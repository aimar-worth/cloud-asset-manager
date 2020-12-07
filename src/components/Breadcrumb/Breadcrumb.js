import React from "react";
import { Breadcrumb } from "antd";

export default function BreadcrumbComp({ crums }) {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {crums.map((crum, index) => (
        <Breadcrumb.Item key={index}>{crum.title}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
