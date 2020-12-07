import React, { useContext } from "react";
import { Layout } from "antd";
import { UserContext } from "../../context/UserContext";

const { Header } = Layout;

export default function TopNav() {
  const { user } = useContext(UserContext);
  console.log(user);
  return <Header className="site-layout-background" style={{ padding: 0 }} />;
}
