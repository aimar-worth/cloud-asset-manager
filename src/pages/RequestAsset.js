import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { Form, Input, Select } from "antd";
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb";
import TagSelect from "../components/TagSelect/TagSelect";
import { UserContext } from "../context/UserContext";

export default function RequestAsset() {
  const history = useHistory();

  const { user } = useContext(UserContext);
  const [tags, setTags] = useState([]);
  const [types, setTypes] = useState([]);
  const [clouds, setClouds] = useState([]);

  const [isLogged] = useState(!!localStorage.getItem("user"));

  if (!isLogged) {
    history.push("/login");
  }

  console.log("TYPES", types);

  useEffect(() => {
    const getTags = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/services`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      const data = await res.json();
      setTags(data);
    };

    const getTypes = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/assettypes`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      const data = await res.json();
      setTypes(data);
    };

    const getClouds = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/clouds`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      const data = await res.json();
      setClouds(data);
    };

    getTypes();
    getClouds();
    getTags();
  }, [user.jwt]);

  const crums = [
    {
      title: "Request",
    },
  ];

  // const tags = [
  //   {
  //     id: 1,
  //     title: "NGINX",
  //   },
  //   {
  //     id: 2,
  //     title: "Liferay",
  //   },
  //   {
  //     id: 3,
  //     title: "nodejs",
  //   },
  // ];
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
          <Form.Item label="Asset Type">
            <Select>
              {types.map((type) => (
                <Select.Option key={type.title} value={type.title}>
                  {type.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Cloud">
            <Select>
              {clouds.map((location) => (
                <Select.Option key={location.title} value={location.title}>
                  {location.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Project name">
            <Input />
          </Form.Item>
          <Form.Item label="Select services">
            <TagSelect tags={tags} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
