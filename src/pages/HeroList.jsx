// import { styled } from "styled-components";
import HeroProfile from "./HeroProfile";
import HeroCard from "../components/HeroCard";
import { Container, Content, Row, Col } from "../components/UI/Layout";

export default function HeroList() {
  return (
    <Container>
      <Content>
        <Row $justifyContent="center" $alignItem="center">
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
        </Row>
        <HeroProfile></HeroProfile>
      </Content>
    </Container>
  );
}

// export function loader() {

// }
