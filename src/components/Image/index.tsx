import React, { useState } from "react";
import classnames from "classnames";

import Loading from "../../components/Loading/index";

import { imageType } from "../../types/index";

import "../../styles/Image.scss";

type propTypes = {
  image: imageType;
};

const Image: React.FC<propTypes> = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadedImage = () => {
    setIsLoaded(true);
  };

  return (
    <div className="image" key={image.id}>
      <img
        className={classnames({
          loading: !isLoaded,
        })}
        src={image.uri}
        alt={image.id}
        onLoad={handleLoadedImage}
      />
      {!isLoaded && (
        <div className="loading-wrapper">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Image;
