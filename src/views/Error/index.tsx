import React from "react";

import ErrorStyled from "./styled";

import { ReactComponent as ErrorImage } from "../../assets/images/error.svg";

const Error: React.FC = () => {
  return (
    <ErrorStyled className="error">
      <ErrorImage className="error__image" />
      <div className="error_text">Error!</div>
    </ErrorStyled>
  );
};

export default Error;
