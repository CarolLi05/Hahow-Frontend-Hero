import { useState } from "react";
import { useLoaderData, useSubmit, useNavigation } from "react-router-dom";
import {
  ProfileWrapper,
  Counter,
  SubmitContent,
  RemainingPoints,
} from "./HeroProfileUI";
import Border from "./Border";
import { SubmitButton } from "./SubmitButton";
import Ability from "../Ability/Ability";

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
    <ProfileWrapper>
      <Border position="top" />
      <Counter>
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
      </Counter>
      <SubmitContent>
        <SubmitButton
          disabled={isSubmitting}
          onClick={() => handleSave(abilities)}
        >
          <span>{isSubmitting ? "更新中..." : "儲存"}</span>
        </SubmitButton>
      </SubmitContent>
      <Border position="bottom" />
    </ProfileWrapper>
  );
}




