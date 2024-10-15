import { json } from "react-router-dom";
import { getProfile } from "../api/apis";

export async function HeroProfileLoader({ params }) {
  const id = params.heroId;
  const response = await getProfile(id);
  if (!response.ok) {
    throw json(
      { message: "Couldn't get Hero Profile Data." },
      { status: 500 }
    );
  } else {
    return response;
  }
}
