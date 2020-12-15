import React from "react"
import { useHistory } from "react-router-dom"

import { Form, Button } from "antd"
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb"
import Select from "../components/Select/SelectField"
import Input from "../components/Input/InputField"

export default function RequestAsset() {
  const history = useHistory()
  const user = localStorage.getItem("user")

  const crums = [
    {
      id: 1,
      title: "Request",
    },
  ]

  if (!user) {
    history.push("/login")
  }

  return (
    <div>
      <Breadcrumbs crums={crums} />
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 360,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form layout="vertical" style={{ width: "100%", maxWidth: "400px" }}>
          <Select label="Asset Type" type="assettypes" />
          <Select label="Cloud" type="clouds" />
          <Select label="Services" type="services" tags />
          <Input label="Project name" id="project_name" />
          <Input label="Description" id="description" textarea />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button type="primary">Send a request</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
