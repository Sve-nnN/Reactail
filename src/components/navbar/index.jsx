import { NavbarContent } from "./navbar-content";
export function Navbar({ children }) {
  return (
    <div className="navbar">
      <NavbarContent />
      {children}
    </div>
  );
}
