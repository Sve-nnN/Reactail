import { Navbar } from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import { getCoctailsData } from "../redux/slices/selectors";

/**
 * FUNCTION PARA EL MODO OSCURO
 */
function DarkMode() {
  console.log("si sirve");
  document.documentElement.classList.toggle("dark");
}

export default function Root() {
  return (
    <div className="min-h-screen	max-h-full	">
      <Sidebar darkMode={DarkMode} />
      <section className="sm:ml-64 ">
        <Navbar darkMode={DarkMode} />
        <div className="flex flex-col items-center justify-center">
          <Outlet />
        </div>
        <Footer />
      </section>
    </div>
  );
}
