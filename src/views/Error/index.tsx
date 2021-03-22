import React from "react";

import { ErrorWrapper, ErrorImage, ErrorText } from "./styled";

const Error: React.FC = () => {
  return (
    <ErrorWrapper>
      <ErrorImage />
      <ErrorText>Error!</ErrorText>
    </ErrorWrapper>
  );
};

export default Error;
