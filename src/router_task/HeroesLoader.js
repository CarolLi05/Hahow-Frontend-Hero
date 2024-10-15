import { json } from "react-router-dom";
import { getHeroes } from "../api/apis";

export async function HeroesLoader() {
  const response = await getHeroes();
  if (!response.ok) {
    throw json({ message: "Couldn't get Heroes Data." }, { status: 500 });
  } else {
    return response;
  }
}
