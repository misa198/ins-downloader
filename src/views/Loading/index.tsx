import React from "react";

import LoadingViewStyled from "./styled";

import Loading from "../../components/Loading/index";

const LoadingView: React.FC = () => {
  return (
    <LoadingViewStyled className="loading-view">
      <Loading />
    </LoadingViewStyled>
  );
};

export default LoadingView;
