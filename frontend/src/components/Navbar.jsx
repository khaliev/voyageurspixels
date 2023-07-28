import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavbarItems">
      <div className="navbarLogo">
        <h1>Voyageur's Pixels</h1>
      </div>
      <ul className="navbarMenu">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/grid">
          <li>Gallery</li>
        </Link>
        <Link to="/admin">
          <li>Admin</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
