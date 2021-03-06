import React, { useState } from "react"
import { Layout } from "antd"

import Navigation from "../Navigation/Navigation"

export default function Sider() {
  const [collapsed, setcollapsed] = useState(false)
  const onCollapse = () => {
    setcollapsed(!collapsed)
  }

  return (
    <Layout.Sider
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
          src={process.env.REACT_APP_LOGO}
          alt={process.env.REACT_APP_COMPANY}
          style={{ width: "50%" }}
        />
      </div>
      <Navigation />
    </Layout.Sider>
  )
}
