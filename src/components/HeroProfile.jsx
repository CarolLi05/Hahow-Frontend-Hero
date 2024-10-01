// import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Row, Col } from "./UI/Layout";
import Border from "./UI/Border";
import Ability from "./Ability";
import SubmitButton from "./SubmitButton";

const Wrapper = styled(Row)`
  margin-top: 2rem;
  padding-right: calc(0.5 * 1.5rem);
  padding-left: calc(0.5 * 1.5rem);
`;

const Control = styled(Col)`
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
`;

export default function HeroProfile({ remainingPoints }) {
  // const { heroId } = useParams(); // 使用 useParams 取得路由參數

  return (
    <Wrapper>
      <Border position="top" />
      <Control>
        <RemainingPoints>剩餘分數：30{remainingPoints}</RemainingPoints>
        <Ability title="str" points="5" />
        <Ability title="int" points="10" />
        <Ability title="agi" points="8" />
        <Ability title="luk" points="7" />
      </Control>
      <SubmitContent>
        <SubmitButton />
      </SubmitContent>
      <Border position="bottom" />
    </Wrapper>
  );
}
