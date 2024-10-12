import { styled } from "styled-components";

const SubmitButton = styled.button`
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 15px 15px 0;
  padding: 1rem;
  transform: skewX(-20deg);

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
  }

  & span {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent !important;
    padding: 0 1rem;
    transform: skewX(20deg);
  }
`;

export { SubmitButton };
