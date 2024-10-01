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
