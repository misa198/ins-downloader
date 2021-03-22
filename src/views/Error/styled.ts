import styled from "styled-components";
import { ReactComponent as ErrorImageImg } from "../../assets/images/error.svg";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const ErrorImage = styled(ErrorImageImg)`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
`;

export const ErrorText = styled.div`
  font-size: 1.2rem;
`;
