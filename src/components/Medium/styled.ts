import styled from "styled-components";

export default styled.div`
  width: 397px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .medium--loading {
    min-height: 397px;
  }

  img {
    width: 100%;
    opacity: 1;
    transition: opacity 200ms;

    &.loading {
      visibility: hidden;
      opacity: 0;
      height: 0;
    }
  }

  video {
    width: 100%;
  }

  .loading-wrapper {
    width: 100%;
    height: 100%;
  }
`;
