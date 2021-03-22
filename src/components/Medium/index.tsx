import React, { useEffect, useState } from "react";

import { MediumWrapper, MediumImg, MediumVideo } from "./styled";

import Loading from "../Loading/index";

import { MediumTypes } from "../../App";

type propTypes = {
  medium: MediumTypes;
};

const Medium: React.FC<propTypes> = ({ medium }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadedImage = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (medium.is_video) setIsLoaded(true);
  }, [medium.is_video]);

  return (
    <MediumWrapper isLoaded={isLoaded} key={medium.id}>
      {!medium.is_video && (
        <MediumImg
          isLoaded={isLoaded}
          src={medium.uri}
          alt={medium.id}
          onLoad={handleLoadedImage}
        />
      )}
      {medium.is_video && <MediumVideo controls src={medium.video_url} />}
      {!isLoaded && <Loading />}
    </MediumWrapper>
  );
};

export default Medium;
