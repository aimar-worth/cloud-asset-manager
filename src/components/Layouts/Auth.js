import React from "react";
import { Row, Col } from "antd";

export default function AuthLayout({ children }) {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ height: "100vh", backgroundColor: "#0f253a" }}
    >
      <div style={{ width: "200px" }}>{children}</div>
    </Row>
  );
}
