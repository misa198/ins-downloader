import { createGlobalStyle } from "styled-components";

import BilldabongFont from "../../assets/fonts/Billdabong.ttf";

export default createGlobalStyle`
@font-face {
  font-family: "Billdabong";
  src: url(${BilldabongFont});
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 500px;
  width: 400px;
  overflow: hidden;

  #root {
    height: 100%;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  display: none;
}
`;
