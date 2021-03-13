import React from "react";

import { ReactComponent as ErrorImage } from "../../assets/images/error.svg";

import "../../styles/Error.scss";

const Error: React.FC = () => {
  return (
    <div className="error">
      <ErrorImage className="error__image" />
      <div className="error__text">Error!</div>
    </div>
  );
};

export default Error;
