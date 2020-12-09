import React from "react";
import { Form, Select } from "antd";

function SelectField({ label, options }) {
  return (
    <Form.Item label={label}>
      <Select>
        {options.map((option) => (
          <Select.Option key={option.title} value={option.title}>
            {option.title}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default SelectField;
