import Showcase from "../components/showcase";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading";
import {
  getDrinkData,
  getDrinkError,
  getDrinkLoading,
} from "../redux/slices/selectors";
import { fetchDrink } from "../redux/slices/drink";
/**
 * It's a function that returns a component that shows the information of a drink.
 * @returns An object with the following properties:
 * 
 * {
 *   "drinks": [
 *     {
 *       "idDrink": "11007",
 *       "strDrink": "Margarita",
 *       "strDrinkAlternate": null,
 *       "strDrinkES": null,
 *       "strDrinkDE
 */
export default function Drink() {
  const { drinkId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(getDrinkLoading);
  const DrinkData = useSelector(getDrinkData);
  const error = useSelector(getDrinkError);
  const DrinkObj = DrinkData[0];

  useEffect(() => {
    dispatch(fetchDrink(drinkId));
  }, [drinkId]);

  if (error) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Showcase
      img={DrinkObj?.strDrinkThumb}
      name={DrinkObj?.strDrink}
      category={DrinkObj?.strCategory}
      alcoholic={DrinkObj?.strAlcoholic}
      glass={DrinkObj?.strGlass}
      prep={DrinkObj?.strInstructions}
      ingredients1={DrinkObj?.strIngredient1}
      ingredients2={DrinkObj?.strIngredient2}
      ingredients3={DrinkObj?.strIngredient3}
      cantidad1={DrinkObj?.strMeasure1}
      cantidad2={DrinkObj?.strMeasure2}
      cantidad3={DrinkObj?.strMeasure3}
    />
  );
}
