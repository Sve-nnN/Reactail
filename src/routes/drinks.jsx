import CoctailList from "../pages/coctail-list";
import Pagination from "../components/pagination";
/**
 * "Drinks is a function that returns a fragment that contains a CoctailList and a Pagination."</code>
 * @returns The return value of the function is the last expression in the function body.
 */
export default function Drinks() {
  return (
    <>
      <CoctailList />
      <Pagination />
    </>
  );
}
