import { updateProfile } from "../api/apis";

export async function HeroProfileAction({ request, params }) {
  const id = params.heroId;
  const heroData = await request.json();
  const method = request.method;

  const response = await updateProfile(id, method, heroData);
  if (!response.ok) {
    throw new Error("Couldn't update Heroes Data!");
  } else {
    return response;
  }
}
