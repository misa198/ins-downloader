import React from "react";

import Image from "../../components/Image/index";

import { imageType } from "../../types/index";

import "../../styles/Images.scss";

type propTypes = {
  images: Array<imageType>;
};

const Images: React.FC<propTypes> = ({ images }) => {
  return (
    <div className="images">
      {images.map((image) => (
        <Image image={image} key={image.id} />
      ))}
    </div>
  );
};

export default Images;
