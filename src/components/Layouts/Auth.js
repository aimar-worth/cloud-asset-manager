import React from "react";
import Div100vh from "react-div-100vh";

import { AuthLayout } from "./styles";

export default function Auth({ children }) {
  return (
    <Div100vh>
      <AuthLayout>{children}</AuthLayout>
    </Div100vh>
  );
}
