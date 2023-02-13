import { Link } from "react-router-dom";
import { Formlogin } from "../../components/Form/Formlogin";
import { Mainlogin } from "../../style/mainforms";

export const Login = ({ user, setUser }) => {
  return (
    <Mainlogin>
      <h1>Kenzie Hub</h1>
      <section>
        <h3>Login</h3>
        <Formlogin user={user} setUser={setUser}/>
        <span>Ainda não possui uma conta?</span>
        <Link className="btnRouteRegister" to="/register">
          Cadastre-se
        </Link>
      </section>
    </Mainlogin>
  );
};
