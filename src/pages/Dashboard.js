import React from "react"
import { useHistory } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb"
import useCheckLoggedIn from "../utils/useCheckLoggedIn"

import {
  OverviewContainer,
  OverviewCard,
  CardContainer,
  Card,
} from "./DashboardStyles"

export default function Dashboard() {
  const history = useHistory()
  const isLoggedIn = useCheckLoggedIn()

  if (!isLoggedIn) {
    history.push("/login")
  }

  const crums = [
    {
      id: 1,
      title: "Dashboard",
    },
  ]

  return (
    <>
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
    </>
  )
}
