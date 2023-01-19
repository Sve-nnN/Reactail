import "./App.css";
import Pagination from "./components/pagination";
import CoctailList from "./pages/coctail-list";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Drink from "./routes/drink";
import Drinks from "./routes/drinks";
import Root from "./routes/root";

// ROUTER
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Drinks />,
        errorElement: <ErrorPage />,
      },
      {
        path: "drink/:drinkId",
        element: <Drink />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
