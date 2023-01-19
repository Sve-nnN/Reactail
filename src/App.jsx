import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "./components/navbar";
import Loading from "./components/loading";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "./App.css";
import ScreenContact from "./pages/contact";
import ScreenInvDrink from "./pages/invdrink";
import Pagination from "./components/pagination";
import CoctailList from "./pages/coctail-list";
import ScreenNotFound from "./pages/error";
import { getCoctailsisLoading } from "./redux/slices/selectors";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

/*     ROUTER         */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ScreenError />,
    children: [
      { index: true, element: <ScreenCoctailList /> },
      { path: "*", element: <ScreenNotFound /> },
      {
        path: "drink/:drinkId",
        element: <ScreenInvDrink />,
      },
    ],
  },
  {
    path: "contact",
    element: <ScreenContact />,
  },

  /*
  {
    path: "contact",
    element: <Contact />,
  },*/
]);
/**
 * FUNCTION PARA EL MODO OSCURO
 */
function DarkMode() {
  console.log("si sirve");
  document.documentElement.classList.toggle("dark");
}
function Main({ children }) {
  return (
    <div className="App">
      <Sidebar darkMode={DarkMode} />
      <section className="sm:ml-64">
        <Navbar />
        {children}
        <Outlet />
        <Footer />
      </section>
    </div>
  );
}

function ScreenError() {
  const error = useRouteError();
  return (
    <ScreenNotFound>
      <i>{error.message}</i>
    </ScreenNotFound>
  );
}
function ScreenCoctailList() {
  return (
    <>
      <CoctailList />
      <Pagination />
    </>
  );
}
function App() {
  return <RouterProvider router={router} />;
}

export default App;
