import { getHeroes } from "../api/apis";

export async function HeroesLoader() {
  const response = await getHeroes();
  if (!response.ok) {
    throw new Error("Couldn't get Heroes Data!");
  } else {
    return response;
  }
}