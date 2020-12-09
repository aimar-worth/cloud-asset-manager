import React from "react"
import { Form, Input } from "antd"

export default function InputField({ label, textarea }) {
  return (
    <Form.Item label={label}>
      {textarea ? <Input.TextArea rows={4} /> : <Input />}
    </Form.Item>
  )
}
