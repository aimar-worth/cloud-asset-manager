import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import RequestAsset from "./pages/RequestAsset";
import MyAssets from "./pages/MyAssets";
import Login from "./pages/Login";
import LoginRedirect from "./pages/LoginRedirect";

import AuthLayout from "./components/Layouts/Auth";
import DashLayout from "./components/Layouts/Dashboard";
import Loader from "./components/Loader/Loader";

// import GoogleAuthCallback from "./utils/GoogleAuthCallback.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper
          exact
          path="/loader"
          component={Loader}
          layout={AuthLayout}
        />
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

        {/* <Route path="/auth/callback/google">
          <GoogleAuthCallback />
        </Route> */}
        {/* <Route path="/" exact component={RequestAsset} />
        <Route path="/login" exact component={Login} /> */}
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
