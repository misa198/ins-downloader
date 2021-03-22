import React from "react";

import { LoadingViewWrapper } from "./styled";

import Loading from "../../components/Loading/index";

const LoadingView: React.FC = () => {
  return (
    <LoadingViewWrapper>
      <Loading />
    </LoadingViewWrapper>
  );
};

export default LoadingView;
