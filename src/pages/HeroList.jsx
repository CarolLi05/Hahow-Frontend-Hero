import { styled } from "styled-components";
import { useLoaderData } from "react-router-dom";
import HeroProfile from "./HeroProfile";
import HeroCard from "../components/HeroCard";
import { Container, Row, Col } from "../components/UI/Layout";

const ListWrapper = styled(Row)`
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
`;

export default function HeroList() {
  const data = useLoaderData();

  return (
    <Container>
      <ListWrapper>
        {data.map((hero) => (
          <Col key={hero.id}>
            <HeroCard name={hero.name} image={hero.image} />
          </Col>
        ))}
        <Col>
          <HeroProfile></HeroProfile>
        </Col>
      </ListWrapper>
    </Container>
  );
}
