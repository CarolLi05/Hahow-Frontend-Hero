import { useLoaderData } from "react-router-dom";
import HeroCard from "../HeroCard/HeroCard";
import { Col } from "../UI/Layout";
import { ListWrapper } from "./HeroListUI";

export default function HeroList() {
  const data = useLoaderData();  

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
