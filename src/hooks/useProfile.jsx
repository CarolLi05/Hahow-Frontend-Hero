import { useState, useCallback, useEffect } from "react";
import { useFetcher } from "react-router-dom";
import toast from "react-hot-toast";
import ObjCompare from "../utils/ObjCompare.js";

export function useProfile(heroProfileData) {
  const [abilities, setAbilities] = useState({
    str: heroProfileData.str,
    int: heroProfileData.int,
    agi: heroProfileData.agi,
    luk: heroProfileData.luk,
  });
  const [remainingPoints, setRemainingPoints] = useState(0);
  const fetcher = useFetcher({ key: "update-profile" });
  const { data: fetcherData, state: fetcherState } = fetcher;
  const isSameValue = ObjCompare(abilities, heroProfileData);

  useEffect(() => {
    if (fetcherState === "submitting") {
      toast.loading("更新中...");
    }

    if (fetcherState === "idle" && fetcherData && fetcherData.message) {
      toast.success(fetcherData.message);
    }

    return () => {
      toast.remove();
    };
  }, [fetcherData, fetcherState]);

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
      if (isSameValue) {
        toast("調整看看能力值吧！");
        return;
      }

      const totalPoints = Object.values(heroProfileData).reduce(
        (result, point) => result + point
      );
      const currentTotalPoints = Object.values(abilities).reduce(
        (result, point) => result + point
      );

      if (remainingPoints > 0) {
        toast.error(`你還有 ${remainingPoints} 點沒有分配到唷！`, {
          id: "hasRemainingPoints",
        });
      }

      if (totalPoints === currentTotalPoints) {
        fetcher.submit(data, {
          method: "PATCH",
          encType: "application/json",
          key: "update-profile",
        });
      }
    },
    [heroProfileData, abilities, remainingPoints, fetcher, isSameValue]
  );

  return {
    abilities,
    remainingPoints,
    handleIncrease,
    handleDecrease,
    handleSave,
  };
}
