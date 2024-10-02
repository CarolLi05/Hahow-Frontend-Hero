import { styled } from "styled-components";

const Wrapper = styled.button`
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
`;

const Title = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent !important;
  padding: 0 1rem;
  transform: skewX(20deg);
`;

export default function SubmitButton({ onClick, title }) {
  return (
    <Wrapper type="button" onClick={onClick}>
      <Title>{title}</Title>
    </Wrapper>
  );
}
