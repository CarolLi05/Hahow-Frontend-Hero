import { styled } from "styled-components";
import { useLoaderData } from "react-router-dom";
import HeroCard from "./HeroCard";
import { Row, Col } from "./UI/Layout";

const ListWrapper = styled(Row)`
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
`;

export default function HeroList() {
  const data = useLoaderData();
  console.log('data', data);
  

  return (
    <ListWrapper>
      {data.map((hero) => (
        <Col key={hero.id}>
          <HeroCard id={hero.id} name={hero.name} image={hero.image} />
        </Col>
      ))}
    </ListWrapper>
  );
}
