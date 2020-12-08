import React, { useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Spinner from "../components/Spinner/Spinner";

const LoginRedirect = (props) => {
  const { user, setUser } = useContext(UserContext);
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
        setUser(res);
        localStorage.setItem("user", JSON.stringify(res));
        // localStorage.setItem("username", res.user.username);
        setTimeout(() => history.push("/"), 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history, location.search, setUser]);

  return <Spinner />;
};

export default LoginRedirect;
