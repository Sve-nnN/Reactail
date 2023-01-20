import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Drink from "./routes/drink";
import Drinks from "./routes/drinks";
import Root from "./routes/root";

// ROUTER
const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/a" />,
        errorElement: <ErrorPage />,
      },
      {
        path: ":drinkId",
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
