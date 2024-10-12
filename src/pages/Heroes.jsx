import { Outlet, useNavigation } from "react-router-dom";
import { Container } from "../components/UI/Layout";
import HeroList from "../components/HeroList/HeroList";
import Loading from "../components/Loading";

export default function Heroes() {
  const navigation = useNavigation();
  return (
    <Container>
      <HeroList />
      {navigation.state === "loading" ? <Loading /> : <Outlet />}
    </Container>
  );
}

