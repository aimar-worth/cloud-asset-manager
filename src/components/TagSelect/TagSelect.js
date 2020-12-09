import React from "react"
import { Form, Select } from "antd"

export default function TagSelect({ label, tags }) {
  const children = []
  tags.map((tag) =>
    children.push(<Select.Option key={tag.id}>{tag.title}</Select.Option>)
  )

  return (
    <Form.Item label={label}>
      <Select mode="tags" style={{ width: "100%" }}>
        {children}
      </Select>
    </Form.Item>
  )
}
