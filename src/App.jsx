import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "./components/navbar";
import Loading from "./components/loading";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "./App.css";
import Pagination from "./components/pagination";
import CoctailList from "./pages/coctail-list";
import { getCoctailsisLoading } from "./redux/slices/selectors";

/**
 * FUNCTION PARA EL MODO OSCURO
 */
function DarkMode() {
  console.log("si sirve");
  document.documentElement.classList.toggle("dark");
}

function App() {
  return (
    <div className="App">
      <Sidebar darkMode={DarkMode} />
      <section className="sm:ml-64">
        <Navbar />
        <CoctailList />
        <Pagination />
        <Footer />
      </section>
    </div>
  );
}

export default App;
