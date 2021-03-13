import styled from "styled-components";

export default styled.div`
  padding: 0.5rem;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: 5;

  .header__url {
    text-decoration: none;
    color: #000000;

    &__logo {
      width: 100%;
      text-align: center;
      font-family: "Billdabong";
      font-size: 2rem;
      user-select: none;
    }
  }
`;
