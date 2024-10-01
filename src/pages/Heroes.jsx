import { Outlet, useNavigation } from "react-router-dom";
import { Container, Col } from "../components/UI/Layout";
import HeroList from "../components/HeroList";
import Loading from "../components/Loading";
import { getHeroes } from "../api/apis";

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

export async function HeroesLoader() {
  const response = await getHeroes();
  if (!response.ok) {
    throw new Error("Couldn't get Heroes Data!");
  } else {
    return response;
  }
}