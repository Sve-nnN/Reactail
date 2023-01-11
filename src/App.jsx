import { useState, useEffect } from "react";
import loading from "./assets/loading.gif";
import "./App.css";
import { Navbar } from "./components/navbar";
import Loading from "./components/loading";
import Card from "./components/card";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
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
      const DrinksArray = await FetchCocktail(setIsLoading);
      setDrinksData(DrinksArray);
    }
    DrinkList();
    console.log(isLoading);
  }, [setIsLoading]);
  return (
    <div className="App">
      <Sidebar />
      <section className="sm:ml-64">
        <Navbar />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-3 place-content-center">
            {DrinksData.map((drink) => (
              <Card
                name={drink.strDrink}
                img={drink.strDrinkThumb}
                alhocholic={drink.strAlcoholic}
                glass={drink.strGlass}
                category={drink.strCategory}
                copy={drink.strInstructionsES}
              />
            ))}
          </div>
        )}
        <Footer />
      </section>

      <br />
    </div>
  );
}

function CocktailList(DrinksData) {
  return <>{DrinksData.map((drink) => console.log(drink))}</>;
}

export default App;
