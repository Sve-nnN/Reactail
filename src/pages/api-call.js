export default async function apiCall({ param }) {
  try {
    const RandomCocktail = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/${param}`
    );
    const RandomCocktailJson = await RandomCocktail.json();
    const DrinkData = RandomCocktailJson.drinks;
    return Promise.resolve(DrinkData);
  } catch (error) {
    return Promise.reject(error);
  }
}
