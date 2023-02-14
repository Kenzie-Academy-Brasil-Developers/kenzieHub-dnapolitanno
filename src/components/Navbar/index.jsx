import { useContext } from "react";
import { Link } from "react-router-dom";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { NavbarContainer } from "./style";

export const Navbar = () => {
  const { logOut } = useContext(UserContext);

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
