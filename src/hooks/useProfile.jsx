import { useState } from "react";
import { useSubmit } from "react-router-dom";

export function useProfile(heroProfileData) {
  const [abilities, setAbilities] = useState({
    str: heroProfileData.str,
    int: heroProfileData.int,
    agi: heroProfileData.agi,
    luk: heroProfileData.luk,
  });
  const [remainingPoints, setRemainingPoints] = useState(0);
  const submit = useSubmit();

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


  return {
    abilities,
    remainingPoints,
    handleIncrease,
    handleDecrease,
    handleSave,
  };
}
