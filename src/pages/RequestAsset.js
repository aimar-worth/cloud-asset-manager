import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import useCheckLoggedIn from "../utils/useCheckLoggedIn";

import { Form, Button } from "antd";
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb";
import TagSelect from "../components/TagSelect/TagSelect";
import Select from "../components/Select/SelectField";
import Input from "../components/Input/InputField";
import { UserContext } from "../context/UserContext";
import { fetchData } from "../utils/fetchData";

export default function RequestAsset() {
  const history = useHistory();
  const isLoggedIn = useCheckLoggedIn();

  if (!isLoggedIn) {
    history.push("/login");
  }

  const user = localStorage.getItem("user");

  const [fields, setFields] = useState({
    tags: [],
    types: [],
    clouds: [],
  });
  const [loading, setLoading] = useState(false);

  const populateFields = async (user) => {
    setLoading(true);
    const tags = await fetchData(user, "services");
    const types = await fetchData(user, "assettypes");
    const clouds = await fetchData(user, "clouds");
    setFields({ tags, types, clouds });
    setLoading(false);
  };

  useEffect(() => {
    populateFields(JSON.parse(user));
  }, [user]);

  const crums = [
    {
      title: "Request",
    },
  ];

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
            <Input label="Description" textarea={true} />
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
  );
}
