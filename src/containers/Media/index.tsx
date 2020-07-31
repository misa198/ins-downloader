import React from "react";

import Medium from "../../components/Medium/index";

import { mediumTypes } from "../../types/index";

import "../../styles/Media.scss";

type propTypes = {
  media: Array<mediumTypes>;
};

const Images: React.FC<propTypes> = ({ media }) => {
  return (
    <div className="media">
      {media.map((medium) => (
        <Medium medium={medium} key={medium.id} />
      ))}
    </div>
  );
};

export default Images;
