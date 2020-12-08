import React from "react";
import { Select } from "antd";

export default function TagSelect({ tags }) {
  const children = [];
  tags.map((tag) => {
    children.push(<Select.Option key={tag.id}>{tag.title}</Select.Option>);
  });

  return (
    <Select
      mode="tags"
      style={{ width: "100%" }}
      // onChange={handleChange}
    >
      {children}
    </Select>
  );
}
