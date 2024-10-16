import { useState, useCallback, useEffect } from "react";
import { useSubmit, useActionData, useNavigation } from "react-router-dom";
import toast from "react-hot-toast";

export function useProfile(heroProfileData) {
  const [abilities, setAbilities] = useState({
    str: heroProfileData.str,
    int: heroProfileData.int,
    agi: heroProfileData.agi,
    luk: heroProfileData.luk,
  });
  const [remainingPoints, setRemainingPoints] = useState(0);
  const submit = useSubmit();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (actionData === "OK" && !isSubmitting) {
      toast.success("更新成功");
    }

    if (isSubmitting) {
      toast.loading("更新中...");
    }

    return () => {
      toast.remove();
    };
  }, [actionData, isSubmitting]);

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
  
  const handleSave = useCallback(
    (data) => {
      const totalPoints = Object.values(heroProfileData).reduce(
        (result, point) => result + point
      );
      const currentTotalPoints = Object.values(abilities).reduce(
        (result, point) => result + point
      );

      if (remainingPoints > 0) {
        toast.error(`你還有 ${remainingPoints} 點沒有分配到唷！`);
      }

      if (totalPoints === currentTotalPoints) {
        submit(data, {
          method: "PATCH",
          encType: "application/json"
        });
      }
    },
    [heroProfileData, abilities, remainingPoints, submit]
  );

  return {
    abilities,
    remainingPoints,
    handleIncrease,
    handleDecrease,
    handleSave,
  };
}
