import React from "react";

import { HeaderWrapper, HeaderUrl, HeaderLogo } from "./styled";

const Header: React.FC = () => {
  return (
    <HeaderWrapper className="header">
      <HeaderUrl
        href="https://github.com/misa198/instagram-images-downloader"
        target="blank"
      >
        <HeaderLogo className="header__url__logo">
          Instagram Downloader
        </HeaderLogo>
      </HeaderUrl>
    </HeaderWrapper>
  );
};

export default Header;
