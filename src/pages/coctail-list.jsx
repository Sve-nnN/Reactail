import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../components/card";
import Loading from "../components/loading";
import { fetchCoctails } from "../redux/slices/coctails";
import {
  getCoctailsData,
  getCoctailsisLoading,
  getCoctailsError,
} from "../redux/slices/selectors";
export default function CoctailList() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(getCoctailsisLoading);
  const CoctailsData = useSelector(getCoctailsData);
  const error = useSelector(getCoctailsError);

  useEffect(() => {
    dispatch(fetchCoctails(id));
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <h6>Ha ocurrido un error inesperado</h6>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-3 place-content-center">
      {CoctailsData.map((drink) => (
        <Link to={`drink/${drink.idDrink}`}>
          <Card
            key={drink.idDrink}
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
