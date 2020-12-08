import React, { useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import RequestAsset from "./pages/RequestAsset";
import MyAssets from "./pages/MyAssets";
import Login from "./pages/Login";
import LoginRedirect from "./pages/LoginRedirect";

import AuthLayout from "./components/Layouts/Auth";
import DashLayout from "./components/Layouts/Dashboard";

import { UserContext } from "./context/UserContext";

import "./App.css";

function App() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const getUser = localStorage.getItem("user");
    setUser(JSON.parse(getUser));
  }, [setUser]);

  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper
          exact
          path="/connect/google/redirect"
          component={LoginRedirect}
          layout={AuthLayout}
        />
        <RouteWrapper
          path="/"
          exact
          component={Dashboard}
          layout={DashLayout}
        />
        <RouteWrapper
          path="/request"
          exact
          component={RequestAsset}
          layout={DashLayout}
        />
        <RouteWrapper
          path="/myassets"
          exact
          component={MyAssets}
          layout={DashLayout}
        />
        <RouteWrapper
          path="/login"
          exact
          component={Login}
          layout={AuthLayout}
        />
      </Switch>
    </BrowserRouter>
  );
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default App;
