import React from "react";

import { imageType } from '../../types/index';

import "../../styles/Images.scss";

type propTypes = {
  images: Array<imageType>;
};

const Images: React.FC<propTypes> = ({ images }) => {
  return (
    <div className="images">
      {images.map((image) => (
        <div className="image" key={image.id}>
          <img src={image.uri} alt={image.id} />
        </div>
      ))}
    </div>
  );
};

export default Images;
