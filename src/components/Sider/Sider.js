import React, { useState } from "react";
import { Layout } from "antd";

import Navigation from "../Navigation/Navigation";

const { Sider } = Layout;

export default function Sidebar() {
  const [collapsed, setcollapsed] = useState(false);
  const onCollapse = () => {
    setcollapsed(!collapsed);
  };

  return (
    <Sider
      breakpoint="md"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <img
          src="https://images.ctfassets.net/bwx98rfv5w3w/3Xzy1AQAXmCm0iK62iAiOm/7bb9e0d9cd0020949d4554f4c66ed785/worth-logo-svg.svg"
          alt="worth internet systems"
          style={{ width: "50%" }}
        />
      </div>
      <Navigation />
    </Sider>
  );
}
