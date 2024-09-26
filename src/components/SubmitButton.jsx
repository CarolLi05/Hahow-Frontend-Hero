import { styled } from "styled-components";

const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.25rem;
  display: block;
  text-align: center;
  transform: skewX(20deg);
  padding: 0 16px;
  background-color: transparent !important;
`;

const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: auto;
  padding: 16px;
  margin: 0 15px 15px 0;
  transform: skewX(-20deg);

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export default function SubmitButton() {
  return <Wrapper>
    <Title>儲存</Title>
  </Wrapper>;
}
