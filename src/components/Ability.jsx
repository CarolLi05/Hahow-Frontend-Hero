import { styled } from "styled-components";
import { PlusSvg, MinusSvg } from "../components/UI/Icon";

const Wrapper = styled.div`
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  margin-bottom: 0.5rem;
  padding: 1rem 0.5rem;
`;

const Content = styled.span`
  display: inline-flex;
  align-items: center;
`;

const Title = styled.span`
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 0.5rem;
`;

const Points = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
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

export default function Ability({ title, points, noMorePoint }) {
  return (
    <Wrapper>
      <Button type="button" disabled={noMorePoint}>
        <MinusSvg />
      </Button>
      <Content>
        <Title>STR{title}</Title>
        <Points>5{points}</Points>
      </Content>
      <Button type="button" disabled={noMorePoint}>
        <PlusSvg />
      </Button>
    </Wrapper>
  );
}
