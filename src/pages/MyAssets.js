import React from "react";
import { useHistory } from "react-router-dom";
import useCheckLoggedIn from "../utils/useCheckLoggedIn";
import Breadcrumbs from "../components/Breadcrumb/Breadcrumb";

export default function MyAssets() {
  const history = useHistory();
  const isLoggedIn = useCheckLoggedIn();

  if (!isLoggedIn) {
    history.push("/login");
  }
  const crums = [
    {
      title: "My Assets",
    },
  ];
  return (
    <div>
      <Breadcrumbs crums={crums} />
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        this is my assets
      </div>
    </div>
  );
}
