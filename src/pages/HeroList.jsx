import { styled } from "styled-components";
import HeroCard from "../components/HeroCard";
import breakpoint from "../utils/breakpoint";

const Container = styled.div`
  max-width: 1280px;
`;

const CardList = styled.div`
  margin-top: 5rem;
  margin-right: calc(-0.5 * 1.5rem);
  margin-left: calc(-0.5 * 1.5rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-center;
  align-items: center;
`;

const Col = styled.div`
  flex: 1 0 0%
  flex-basis: 100%;
  padding-right: calc(0.5 * 1.5rem);
  padding-left: calc(0.5 * 1.5rem);
  box-sizing: border-box;

  @media screen and ${breakpoint.sm} {
    flex-basis: 50%;
  }

  @media screen and ${breakpoint.md} {
    flex-basis: 25%;
  }
`;

export default function HeroList() {
  return (
    <Container>
      <h1>Hero List</h1>
      <CardList>
        <Col>
          <HeroCard />
        </Col>
        <Col>
          <HeroCard />
        </Col>
        <Col>
          <HeroCard />
        </Col>
        <Col>
          <HeroCard />
        </Col>
      </CardList>
    </Container>
  )
}

// export function loader() {

// }
