import React from "react";
// import { useHistory } from "react-router-dom";

import { Form, Button } from "antd";
import { LoginWrapper } from "./LoginStyles";
// import { Link } from "react-router-dom";
// import { UserContext } from "../context/UserContext";

// const LoginButton = (props) => (
//   <Link to={`${process.env.REACT_APP_API_URL}/connect/google`}></Link>
//   // <a href={`${process.env.API_URL}/connect/google`}>
//   //   <button style={{ width: "150px" }}>Connect to {props.providerName}</button>
//   // </a>
// );

export default function Login() {
  // const history = useHistory();

  // const [isLogged, setIsLogged] = useState(!!localStorage.getItem("jwt"));

  // if (isLogged) {
  //   history.push("/");
  // }

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
