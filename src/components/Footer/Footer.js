import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default function MainFooter() {
  return (
    <Footer style={{ textAlign: "center" }}>
      {process.env.REACT_APP_COMPANY} ©2020
    </Footer>
  );
}
