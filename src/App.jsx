import { useState, useEffect } from "react";
import loading from "./assets/loading.gif";
import "./App.css";
import { Navbar } from "./components/navbar";

async function FetchCocktail(SetDrinkName, setDrinkimg, setLoading) {
  try {
    setLoading(true);

    let RandomCocktail = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    let RandomCocktailJson = await RandomCocktail.json();
    let DrinkData = RandomCocktailJson.drinks;
    DrinkData.forEach((data) => {
      console.log(data.strDrink);
    });
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

function App() {
  const [Loading, setLoading] = useState(false);
  const [DrinkName, SetDrinkName] = useState("");
  const [Drinkimg, setDrinkimg] = useState("");

  useEffect(() => {
    FetchCocktail(SetDrinkName, setDrinkimg, setLoading);
  }, []);

  return (
    <div className="App">
      <Navbar />

      {Loading && (
        <img
          src="https://previews.123rf.com/images/asmati/asmati1705/asmati170500238/77102960-ilustraci%C3%B3n-de-signo-de-c%C3%B3ctel-vector-iconos-en-blanco-y-negro-e-%C3%ADcono-de-l%C3%ADnea-en-el-tablero-de-aje.jpg"
          style={{ width: 100 }}
        />
      )}
      <br />
      {DrinkName}
      <br />

      <img src={Drinkimg} style={{ width: 100 }} />
    </div>
  );
}

export default App;
