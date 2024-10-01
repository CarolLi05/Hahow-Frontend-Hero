import { Outlet } from "react-router-dom";
import { Container, Col } from "../components/UI/Layout";
import HeroList from "../components/HeroList";

export default function Heroes() {
  return (
    <Container>
      <HeroList />
      <Col>
        <Outlet />
      </Col>
    </Container>
  );
}
