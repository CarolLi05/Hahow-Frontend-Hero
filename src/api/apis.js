export async function getHeroes() {
  const response = await fetch("https://hahow-recruit.herokuapp.com/heroes");
  return response;
}

export async function getProfile(heroId) {
  const response = await fetch(
    `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`
  );
  return response;
}

export async function updateProfile(heroId, method, heroData) {
  const response = await fetch(
    `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
    {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(heroData),
    }
  );
  return response;
}
