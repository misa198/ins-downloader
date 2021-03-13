import React from "react";

import Loading from '../../components/Loading/index';

import "../../styles/LoadingContainer.scss";

const LoadingContainer: React.FC = () => {
  return (
    <div className="loading-container">
      <Loading />
    </div>
  );
};

export default LoadingContainer;
