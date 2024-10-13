import { PlusSvg, MinusSvg } from "../UI/Icons";
import { Wrapper, Title, Control, Points, Button } from "./AbilityUI";

export default function Ability({
  title,
  points,
  noMorePoint,
  onIncrease,
  onDecrease,
}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Control>
        <Button type="button" disabled={points <= 0} onClick={onDecrease}>
          <MinusSvg />
        </Button>
        <Points>{points}</Points>
        <Button type="button" disabled={noMorePoint} onClick={onIncrease}>
          <PlusSvg />
        </Button>
      </Control>
    </Wrapper>
  );
}
