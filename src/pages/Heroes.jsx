import { Outlet, useNavigation } from "react-router-dom";
import { Container, Col } from "../components/UI/Layout";
import HeroList from "../components/HeroList";
import Loading from "../components/Loading";

export default function Heroes() {
  const navigation = useNavigation();
  return (
    <Container>
      <HeroList />
      <Col>
        {navigation.state === "loading" && <Loading />}
        <Outlet />
      </Col>
    </Container>
  );
}
