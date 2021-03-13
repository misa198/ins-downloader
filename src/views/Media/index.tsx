import React from "react";

import MediaStyled from "./styled";

import Medium from "../../components/Medium/index";

import { mediumTypes } from "../../types/index";

type propTypes = {
  media: Array<mediumTypes>;
};

const Images: React.FC<propTypes> = ({ media }) => {
  return (
    <MediaStyled className="media">
      {media.map((medium) => (
        <Medium medium={medium} key={medium.id} />
      ))}
    </MediaStyled>
  );
};

export default Images;
