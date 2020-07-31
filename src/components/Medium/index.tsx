import React, { useEffect, useState } from "react";
import classnames from "classnames";

import Loading from "../Loading/index";

import { mediumTypes } from "../../types/index";

import "../../styles/Medium.scss";

type propTypes = {
  medium: mediumTypes;
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
    <div
      className={classnames("medium", {
        "medium--loading": !isLoaded,
      })}
      key={medium.id}
    >
      {!medium.is_video && (
        <img
          className={classnames({
            loading: !isLoaded,
          })}
          src={medium.uri}
          alt={medium.id}
          onLoad={handleLoadedImage}
        />
      )}
      {
        medium.is_video && (
          <video controls src={medium.video_url}/>
        )
      }
      {!isLoaded && <Loading />}
    </div>
  );
};

export default Medium;
