import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 4rem;
  padding: 0.5rem;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;

export const HeaderUrl = styled.a`
  text-decoration: none;
  color: #000000;
`;

export const HeaderLogo = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Billdabong";
  font-size: 2rem;
  user-select: none;
`;
