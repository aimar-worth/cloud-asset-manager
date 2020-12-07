import React from "react";
// import { useHistory } from "react-router-dom";

import { Form, Button } from "antd";
import { LoginWrapper } from "./LoginStyles";

export default function Login() {
  return (
    <LoginWrapper>
      <img
        src={process.env.REACT_APP_LOGO}
        alt={process.env.REACT_APP_COMPANY}
      />
      <Form>
        <Form.Item>
          <a href={`${process.env.REACT_APP_API_URL}/connect/google`}>
            <Button
              size="large"
              type="submit"
              style={{
                width: "100%",
                background: "#e6037e",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Login
            </Button>
          </a>
        </Form.Item>
      </Form>
    </LoginWrapper>
  );
}
