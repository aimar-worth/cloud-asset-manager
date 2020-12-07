import React from "react";
import { Layout } from "antd";

import Sidebar from "../Sider/Sider";
import TopNav from "../TopNav/TopNav";
import Footer from "../Footer/Footer";
// import Breadcrumb from "../Breadcrumb/Breadcrumb";

const { Content } = Layout;

export default function Dashboard({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout className="site-layout">
        <TopNav />
        <Content style={{ margin: "0 16px" }}>
          {children}
          <Footer />
        </Content>
      </Layout>
    </Layout>
  );
}
