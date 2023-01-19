export default async function apiCall({ param }) {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    return Promise.reject(error);
  }
}
