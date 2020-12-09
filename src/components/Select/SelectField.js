import React, { useState, useEffect } from "react"
import { Form, Select } from "antd"

function SelectField({ label, type, tags }) {
  const [options, setOptions] = useState([])
  useEffect(() => {
    const populateField = async () => {
      await fetch(`${process.env.REACT_APP_API_URL}/${type}`)
        .then((res) => res.json())
        .then((data) => {
          setOptions(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    populateField()
  }, [type])

  return (
    <Form.Item label={label}>
      <Select mode={tags ? "tags" : ""}>
        {options.map((option) => (
          <Select.Option key={option.title} value={option.title}>
            {option.title}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  )
}

export default SelectField
