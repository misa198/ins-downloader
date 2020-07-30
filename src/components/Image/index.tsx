import React from "react";

import { imageType } from "../../types/index";

import "../../styles/Image.scss";

type propTypes = {
  image: imageType;
};

const Image: React.FC<propTypes> = ({ image }) => {
  return (
    <div className="image" key={image.id}>
      <img src={image.uri} alt={image.id} />
    </div>
  );
};

export default Image;
