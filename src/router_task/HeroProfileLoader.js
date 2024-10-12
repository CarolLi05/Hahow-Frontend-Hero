import { getProfile } from "../api/apis";

export async function HeroProfileLoader({ params }) {
  const id = params.heroId;
  const response = await getProfile(id);
  return response;
}
