import { styled } from "styled-components";
import Border from "../components/UI/Border";
import Ability from "../components/Ability";
import SubmitButton from "../components/SubmitButton";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Content = styled.div`
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  justify-content: center;
`;

const RemainingPoints = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export default function HeroProfile({ remainingPoints }) {
  return (
    <Wrapper>
      <Border position="top" />
      <Content>
        <RemainingPoints>剩餘分數：30{remainingPoints}</RemainingPoints>
        <Ability />
        <Ability />
        <Ability />
        <Ability />
      </Content>
      <Footer>
        <SubmitButton />
      </Footer>
      <Border position="bottom" />
    </Wrapper>
  );
}
