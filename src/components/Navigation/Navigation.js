import React from "react";
import { Menu } from "antd";
import {
  BarsOutlined,
  BookOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

// const { SubMenu } = Menu;

export default function Navigation() {
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1" icon={<DashboardOutlined />}>
        <NavLink to="/">Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<BookOutlined />}>
        <NavLink to="/request">Request</NavLink>
      </Menu.Item>
      <Menu.Item key="3" icon={<BarsOutlined />}>
        <NavLink to="/myassets">My Assets</NavLink>
      </Menu.Item>
    </Menu>
  );
}
