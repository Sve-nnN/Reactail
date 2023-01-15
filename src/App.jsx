import { useState, useEffect } from "react";
import loading from "./assets/loading.gif";
import "./App.css";
import { Navbar } from "./components/navbar";
import Loading from "./components/loading";
import Card from "./components/card";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { useSelector, useDispatch } from "react-redux";
import { loadingTrue, loadingFalse } from "./redux/loadingSlice";
import Pagination from "./components/pagination";

async function FetchCocktail(loadingTrue, loadingFalse) {
  try {
    loadingTrue;

    let RandomCocktail = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    let RandomCocktailJson = await RandomCocktail.json();
    let DrinkData = RandomCocktailJson.drinks;
    return DrinkData;
  } catch (error) {
    console.log(error);
  } finally {
    loadingFalse;
  }
}

/**
 * FUNCTION PARA EL MODO OSCURO
 */
function DarkMode() {
  console.log("si sirve");
  document.documentElement.classList.toggle("dark");
}

function DrinkColumns({ DrinksData }) {
  return (
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
  );
}
function App() {
  const [DrinksData, setDrinksData] = useState([]);
  const loading = useSelector((state) => state.loading.value);
  console.log(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    async function DrinkList() {
      const DrinksArray = await FetchCocktail(
        dispatch(loadingTrue()),
        dispatch(loadingFalse())
      );
      setDrinksData(DrinksArray);
    }
    DrinkList();
    console.log(loading);
  }, []);
  return (
    <div className="App">
      <Sidebar darkMode={DarkMode} />
      <section className="sm:ml-64">
        <Navbar />
        {loading ? <Loading /> : <DrinkColumns DrinksData={DrinksData} />}
        <Pagination />
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
