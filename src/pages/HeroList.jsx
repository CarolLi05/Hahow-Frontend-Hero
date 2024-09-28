import { styled } from "styled-components";
import HeroProfile from "./HeroProfile";
import HeroCard from "../components/HeroCard";
import { Container, Row, Col } from "../components/UI/Layout";

const ListWrapper = styled(Row)`
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
`;

export default function HeroList() {
  return (
    <Container>
      <ListWrapper>
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
        <Col>
          <HeroProfile></HeroProfile>
        </Col>
      </ListWrapper>
    </Container>
  );
}

// export function loader() {

// }
