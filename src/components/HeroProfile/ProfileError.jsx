import { useRouteError } from "react-router-dom";
import { styled } from "styled-components";

const ErrorMessage = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export function ProfileError() {
  const error = useRouteError();
  
  let message = "";

  if (error.status === 500) {
    message = error.message;
  }

  if (error.status === 404) {
    message = "無法找到頁面";
  }

  return (
    <ErrorMessage>{message}</ErrorMessage>
  );
}
