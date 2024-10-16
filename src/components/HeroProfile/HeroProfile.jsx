import { useLoaderData, useNavigation } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import {
  ProfileWrapper,
  Counter,
  SubmitContent,
  RemainingPoints,
} from "./HeroProfileUI";
import Border from "./Border";
import { SubmitButton } from "./SubmitButton";
import Ability from "../Ability/Ability";
import { Toaster } from "react-hot-toast";

export default function HeroProfile() {
  const heroProfileData = useLoaderData();
  const {
    abilities,
    remainingPoints,
    handleIncrease,
    handleDecrease,
    handleSave,
  } = useProfile(heroProfileData);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Toaster />
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
    </>
  );
}
