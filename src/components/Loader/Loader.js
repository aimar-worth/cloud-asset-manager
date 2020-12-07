import React from "react";
import Loader from "react-loader-spinner";

import { LoaderContainer } from "./styles";

export default function LoaderComp() {
  return (
    <LoaderContainer>
      <img
        src={process.env.REACT_APP_LOGO}
        alt={process.env.REACT_APP_COMPANY}
      />
      <Loader
        type="Bars"
        color="#e6037e"
        height={50}
        width={50}
        // timeout={3000} //3 secs
      />
    </LoaderContainer>
  );
}
