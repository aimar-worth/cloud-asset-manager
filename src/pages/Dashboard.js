import React, { useState } from "react";
// import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb";

import {
  OverviewContainer,
  OverviewCard,
  CardContainer,
  Card,
} from "./DashboardStyles";

export default function Dashboard() {
  const history = useHistory();
  const [isLogged] = useState(!!localStorage.getItem("jwt"));

  if (!isLogged) {
    history.push("/login");
  }

  const crums = [
    {
      title: "Dashboard",
    },
  ];

  return (
    <div>
      <Breadcrumbs crums={crums} />
      {/* <div style={{ padding: "12px", minHeight: 360 }}> */}
      <OverviewContainer>
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </OverviewContainer>
      <CardContainer>
        <Card>Your assets</Card>
        <Card />
        <Card />
      </CardContainer>
      {/* </div> */}
    </div>
  );
}
