import { Link } from "react-router-dom";
import { NavbarContainer } from "./style";

export const Navbar = ({ setUser }) => {
  const logOut = () => {
    setUser({});
    localStorage.clear();
  };

  return (
    <NavbarContainer>
      <nav>
        <h1>Kenzie Hub</h1>
        <ul>
          <li>
            <Link to="/" onClick={logOut}>
              Sair
            </Link>
          </li>
        </ul>
      </nav>
    </NavbarContainer>
  );
};
