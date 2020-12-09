import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import { Form, Button } from "antd"
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb"
import TagSelect from "../components/TagSelect/TagSelect"
import Select from "../components/Select/SelectField"
import Input from "../components/Input/InputField"
import fetchData from "../utils/fetchData"

export default function RequestAsset() {
  const history = useHistory()
  const [fields, setFields] = useState({
    tags: [],
    types: [],
    clouds: [],
  })
  const [loading, setLoading] = useState(false)
  const user = localStorage.getItem("user")

  const populateFields = async ({ jwt }) => {
    setLoading(true)
    const tags = await fetchData(jwt, "services")
    const types = await fetchData(jwt, "assettypes")
    const clouds = await fetchData(jwt, "clouds")
    setFields({ tags, types, clouds })
    setLoading(false)
  }

  useEffect(() => {
    populateFields(JSON.parse(user))
  }, [user])

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
        {loading ? (
          <p>loading</p>
        ) : (
          <Form layout="vertical" style={{ width: "100%", maxWidth: "400px" }}>
            <Select label="Asset Type" options={fields.types} />
            <Select label="Cloud" options={fields.clouds} />
            <TagSelect label="Services" tags={fields.tags} />
            <Input label="Project name" />
            <Input label="Description" textarea />
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
        )}
      </div>
    </div>
  )
}
