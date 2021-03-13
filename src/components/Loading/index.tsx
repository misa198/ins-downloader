import React from "react";

import LoadingStyled from "./styled";

const Loading: React.FC = () => {
  return (
    <LoadingStyled className="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingStyled>
  );
};

export default Loading;
