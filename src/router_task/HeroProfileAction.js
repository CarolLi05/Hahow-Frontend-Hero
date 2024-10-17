import { json } from "react-router-dom";
import { updateProfile } from "../api/apis";

export async function HeroProfileAction({ request, params }) {
  const id = params.heroId;
  const heroData = await request.json();
  const method = request.method;

  const response = await updateProfile(id, method, heroData);
  if (!response.ok) {
    throw json({ message: "Couldn't update Hero Profile Data." }, { status: 500 });
  } else {
    return { message: '更新成功！'};
  }
}
