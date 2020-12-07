import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const LoginRedirect = (props) => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/auth/google/callback${location.search}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("jwt", res.jwt);
        localStorage.setItem("username", res.user.username);
        setTimeout(() => history.push("/"), 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history, location.search]);

  return <Loader />;
};

export default LoginRedirect;
