import { useState } from "react";
import { styled } from "styled-components";
import { useLoaderData, useSubmit, useNavigation } from "react-router-dom";
import { Row, Col } from "./UI/Layout";
import Border from "./UI/Border";
import { SubmitButton } from "./UI/SubmitButton";
import Ability from "./Ability";
import { getProfile, updateProfile } from "../api/apis";

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
  const submit = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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

  function handleSave(data) {
    const totalPoints = Object.values(heroProfileData).reduce(
      (result, point) => result + point
    );
    const currentTotalPoints = Object.values(abilities).reduce(
      (result, point) => result + point
    );

    if (remainingPoints > 0) {
      alert(`你還有 ${remainingPoints} 點沒有分配到唷！`);
    }

    if (totalPoints === currentTotalPoints) {
      submit(data, { method: "PATCH", encType: "application/json" });
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
            noMorePoint={remainingPoints <= 0}
          />
        ))}
      </Control>
      <SubmitContent>
        <SubmitButton
          disabled={isSubmitting}
          onClick={() => handleSave(abilities)}
        >
          <span>{isSubmitting ? "更新中..." : "儲存"}</span>
        </SubmitButton>
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

export async function HeroProfileAction({ request, params }) {
  const id = params.heroId;
  const heroData = await request.json();
  const method = request.method;

  const response = await updateProfile(id, method, heroData);
  if (!response.ok) {
    throw new Error("Couldn't update Heroes Data!");
  } else {
    return response;
  }
}
