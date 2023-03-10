import { useRouteError } from "react-router-dom";

/**
 * It's a function that returns an error when the page has not been found
 * @returns The error object is being returned.
 */
export default function ErrorSearch() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page text-gray-900 dark:text-white">
      <h1>Error 404</h1>
      <p>
        Disculpa, no tenemos ninguna bebida que contenga tu término de búsqueda,
        inténtalo de nuevo con otro nombre
      </p>
    </div>
  );
}
