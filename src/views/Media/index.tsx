import React from "react";

import { MediaWrapper } from "./styled";

import Medium from "../../components/Medium/index";

import { MediumTypes } from "../../App";

type propTypes = {
  media: MediumTypes[];
};

const Images: React.FC<propTypes> = ({ media }) => {
  return (
    <MediaWrapper>
      {media.map((medium) => (
        <Medium medium={medium} key={medium.id} />
      ))}
    </MediaWrapper>
  );
};

export default Images;
