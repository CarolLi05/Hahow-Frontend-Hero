import { styled } from "styled-components";

const Title = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  display: block;
  text-align: center;
  transform: skewX(20deg);
  padding: 0 16px;
  background-color: transparent !important;
`;

const Wrapper = styled.button`
  background-color: #e62429;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: auto;
  transform: skewX(-20deg);
  padding: 16px;
  margin: 0 15px 15px 0;
`;

export default function SubmitButton() {
  return <Wrapper>
    <Title>儲存</Title>
  </Wrapper>;
}
