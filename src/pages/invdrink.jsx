import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchInvCoctails } from "../redux/slices/invCoctail";
import { useSelector } from "react-redux";
import {
  getInvCoctailsData,
  getInvCoctailsError,
  getInvCoctailsisLoading,
} from "../redux/slices/selectors";
import Loading from "../components/loading";

export default function InvDrink() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-3 ">
      Hola
    </div>
  );
}
