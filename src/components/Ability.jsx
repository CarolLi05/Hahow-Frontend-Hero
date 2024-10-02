import { styled } from "styled-components";
import { PlusSvg, MinusSvg } from "../components/UI/Icon";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 1rem 0.5rem;
`;

const Title = styled.span`
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 0.5rem;
`;

const Control = styled.span`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
`;

const Points = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0.75rem;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  fill: none;
  stroke: ${({ theme }) => theme.colors.black};
  stroke-width: 4px;
  stroke-linecap: round;
  stroke-linejoin: round;
  border-radius: 50%;
  padding: 0.5rem;

  &:hover {
    stroke: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function Ability({ title, points, noMorePoint, onIncrease, onDecrease }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Control>
        <Button type="button" disabled={points === 0} onClick={onDecrease}>
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
