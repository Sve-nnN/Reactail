import { useState, useEffect } from "react";
import loading from "./assets/loading.gif";
import "./App.css";
import { Navbar } from "./components/navbar";
import Loading from "./components/loading";
import Card from "./components/card";

async function FetchCocktail(setIsLoading) {
  try {
    setIsLoading(true);

    let RandomCocktail = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    let RandomCocktailJson = await RandomCocktail.json();
    let DrinkData = RandomCocktailJson.drinks;
    return DrinkData;
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [DrinksData, setDrinksData] = useState([]);
  const [DrinkName, SetDrinkName] = useState("");
  const [Drinkimg, setDrinkimg] = useState("");

  useEffect(() => {
    async function DrinkList() {
      const DrinksArray = await FetchCocktail(setLoading);
      setDrinksData(DrinksArray);
    }
    DrinkList();
    console.log(isLoading);
  }, [setIsLoading, DrinksData]);
  return (
    <div className="App">
      <Navbar />

      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid gap-2 col-span-2">
          {DrinksData.map((drink) => (
            <Card name={drink.strDrink} />
          ))}
        </div>
      )}
      <br />

      <br />
    </div>
  );
}

function CocktailList(DrinksData) {
  return <>{DrinksData.map((drink) => console.log(drink))}</>;
}

export default App;
