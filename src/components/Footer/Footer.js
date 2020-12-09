import React from "react"
import { Layout } from "antd"

export default function Footer() {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      {process.env.REACT_APP_COMPANY} ©2020
    </Layout.Footer>
  )
}
