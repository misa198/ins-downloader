import React from "react";

import "../../styles/Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <a href="https://github.com/misa198/instagram-images-downloader" target="blank">
        <div className="logo">Instagram Downloader</div>
      </a>
    </div>
  );
};

export default Header;
