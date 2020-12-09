import React, { useContext } from "react"
import { Layout } from "antd"
import { UserContext } from "../../context/UserContext"

const { Header } = Layout

export default function TopNav() {
  const { user } = useContext(UserContext)
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0px 16px",
          fontSize: "1.2em",
          fontWeight: "600",
        }}
      >
        {user ? <p>Hello, {user.username}</p> : null}
      </div>
    </Header>
  )
}
