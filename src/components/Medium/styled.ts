import styled from "styled-components";

export const MediumWrapper = styled.div<{ isLoaded: boolean }>`
  width: 397px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  min-height: ${(props) => (props.isLoaded ? "" : "397px")};
`;

export const MediumImg = styled.img<{ isLoaded: boolean }>`
  width: 100%;
  opacity: 1;
  transition: opacity 200ms;

  visibility: ${(props) => (props.isLoaded ? "" : "hidden")};
  opacity: ${(props) => (props.isLoaded ? "" : 0)};
  height: ${(props) => (props.isLoaded ? "" : 0)};
`;

export const MediumVideo = styled.video`
  width: 100%;
`;

// export default styled.div`
//   .loading-wrapper {
//     width: 100%;
//     height: 100%;
//   }
// `;
