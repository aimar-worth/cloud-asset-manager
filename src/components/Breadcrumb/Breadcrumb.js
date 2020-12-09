import React from "react"
import { Breadcrumb as BreCum } from "antd"

export default function Breadcrumb({ crums }) {
  return (
    <BreCum style={{ margin: "16px 0" }}>
      {crums.map((crum) => (
        <BreCum.Item key={crum.id}>{crum.title}</BreCum.Item>
      ))}
    </BreCum>
  )
}
