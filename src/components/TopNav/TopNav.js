import React, { useContext } from "react";
import { Layout } from "antd";
import { UserContext } from "../../context/UserContext";

const { Header } = Layout;

export default function TopNav() {
  const { user } = useContext(UserContext);
  console.log("USER CONTEXT TOPNAV", user);
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {user ? <p>Hello, {user.user.username}</p> : null}
    </Header>
  );
}
