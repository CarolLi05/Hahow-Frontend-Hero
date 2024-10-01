import { styled } from "styled-components";

const Wrapper = styled.p`
  margin: 3rem 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

export default function Loading() {
  return <Wrapper>Loading...</Wrapper>;
}
