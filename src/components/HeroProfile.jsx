import { useState } from "react";
import { styled } from "styled-components";
import { useLoaderData } from "react-router-dom";
import { Row, Col } from "./UI/Layout";
import Border from "./UI/Border";
import Ability from "./Ability";
import SubmitButton from "./SubmitButton";
import { getProfile } from "../api/apis";

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

export default function HeroProfile() {
  const heroProfileData = useLoaderData();
  const [abilities, setAbilities] = useState({
    str: heroProfileData.str,
    int: heroProfileData.int,
    agi: heroProfileData.agi,
    luk: heroProfileData.luk,
  });
  const [remainingPoints, setRemainingPoints] = useState(0);

  function handleIncrease(ability) {
    if (remainingPoints > 0) {
      setAbilities((prev) => ({
        ...prev,
        [ability]: prev[ability] + 1,
      }));
      setRemainingPoints((prev) => prev - 1);
    }
  }
  function handleDecrease(ability) {
    if (abilities[ability] > 0) {
      setAbilities((prev) => ({
        ...prev,
        [ability]: prev[ability] - 1,
      }));
      setRemainingPoints((prev) => prev + 1);
    }
  }

  return (
    <Wrapper>
      <Border position="top" />
      <Control>
        <RemainingPoints>剩餘分數：{remainingPoints}</RemainingPoints>
        {Object.entries(abilities).map(([title, points]) => (
          <Ability
            key={title}
            title={title}
            points={points}
            onIncrease={() => handleIncrease(title)}
            onDecrease={() => handleDecrease(title)}
            noMorePoint={remainingPoints === 0}
          />
        ))}
      </Control>
      <SubmitContent>
        <SubmitButton />
      </SubmitContent>
      <Border position="bottom" />
    </Wrapper>
  );
}

export async function HeroProfileLoader({ params }) {
  const id = params.heroId;
  const response = await getProfile(id);
  return response;
}
