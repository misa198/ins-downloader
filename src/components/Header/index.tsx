import React from "react";

import HeaderStyled from "./styled";

const Header: React.FC = () => {
  return (
    <HeaderStyled className="header">
      <a
        className="header__url"
        href="https://github.com/misa198/instagram-images-downloader"
        target="blank"
      >
        <div className="header__url__logo">Instagram Downloader</div>
      </a>
    </HeaderStyled>
  );
};

export default Header;
