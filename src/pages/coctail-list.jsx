import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading";
import { fetchCoctails } from "../redux/slices/coctails";
import {
  getCoctailsData,
  getCoctailsisLoading,
  getCoctailsError,
} from "../redux/slices/selectors";
import Card from "../components/card";
/**
 * It's a function that returns a div with a grid of cards. Each card is a link to a page with more
 * information about the drink.
 * @returns The CoctailList component is being returned.
 */
export default function CoctailList() {
  const { drinkId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(getCoctailsisLoading);
  const CoctailsData = useSelector(getCoctailsData);
  const error = useSelector(getCoctailsError);

  useEffect(() => {
    dispatch(fetchCoctails(drinkId));
  }, [drinkId]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h6>Ha ocurrido un error inesperado</h6>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-3 place-content-center">
      {CoctailsData.map((drink) => (
        <Link to={`../../../drink/${drink.idDrink}`} key={drink.idDrink}>
          <Card
            name={drink.strDrink}
            img={drink.strDrinkThumb}
            alhocholic={drink.strAlcoholic}
            glass={drink.strGlass}
            category={drink.strCategory}
            copy={drink.strInstructions}
          />
        </Link>
      ))}
    </div>
  );
}
