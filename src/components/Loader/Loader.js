import React from "react";
import Loader from "react-loader-spinner";

import { LoaderContainer } from "./styles";

export default function LoaderComp() {
  return (
    <LoaderContainer>
      <img
        src="https://images.ctfassets.net/bwx98rfv5w3w/3Xzy1AQAXmCm0iK62iAiOm/7bb9e0d9cd0020949d4554f4c66ed785/worth-logo-svg.svg"
        alt="worth internet systems"
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
