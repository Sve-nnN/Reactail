import { useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading";
import search, { fetchSearch } from "../redux/slices/search";
import {
  getSearchData,
  getSearchLoading,
  getSearchError,
} from "../redux/slices/selectors";
import Card from "../components/card";
/**
 * It's a function that returns a div with a grid of cards. Each card is a link to a page with more
 * information about the drink.
 * @returns The search component is being returned.
 */
export default function Search() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getSearchLoading);
  const SearchData = useSelector(getSearchData);
  const error = useSelector(getSearchError);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");
  useEffect(() => {
    dispatch(fetchSearch(searchTerm));
  }, [searchTerm]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h6>Ha ocurrido un error inesperado</h6>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-3 place-content-center">
      {SearchData.map((drink) => (
        <Link to={`../../../drink/${drink.idDrink}`} key={drink.idDrink}>
          <Card
            name={drink.strDrink}
            img={drink.strDrinkThumb}
            alhocholic={drink.strAlcoholic}
            glass={drink.strGlass}
            category={drink.strCategory}
            copy={drink.strInstructionsES}
          />
        </Link>
      ))}
    </div>
  );
}
