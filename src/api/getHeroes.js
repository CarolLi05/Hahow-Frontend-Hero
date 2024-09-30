export default async function getHeroes() {
  const response = await fetch("https://hahow-recruit.herokuapp.com/heroes");
  if (!response.ok) {
    console.dir(response.status);
  } else {
    return response;
  }
}
