import { styled } from "styled-components";
import { Row, Col } from "../UI/Layout";
import breakpoints from "../../styles/breakpoints.js";

const ProfileWrapper = styled(Row)`
  margin-top: 2rem;
  padding-right: calc(0.5 * 1.5rem);
  padding-left: calc(0.5 * 1.5rem);
`;

const Counter = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.75rem;
`;

const SubmitContent = styled(Col)`
  display: flex;
  justify-content: end;
  align-self: end;
  margin-right: 0.75rem;
`;

const RemainingPoints = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media screen and ${breakpoints.xs} {
    font-size: 1rem;
  }
`;

export { ProfileWrapper, Counter, SubmitContent, RemainingPoints };