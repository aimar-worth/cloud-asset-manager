import React from "react"
import { Form, Input } from "antd"

export default function InputField({ id, label, textarea }) {
  return (
    <Form.Item label={label} name={id}>
      {textarea ? (
        <Input.TextArea rows={4} data-testid="textarea" />
      ) : (
        <Input />
      )}
    </Form.Item>
  )
}
