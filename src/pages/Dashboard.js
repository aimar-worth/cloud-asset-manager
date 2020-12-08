import React from "react";
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb";
// import { useCheckLoggedIn } from "../utils/useCheckLoggedIn";

import {
  OverviewContainer,
  OverviewCard,
  CardContainer,
  Card,
} from "./DashboardStyles";

export default function Dashboard() {
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
