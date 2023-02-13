import { Link } from "react-router-dom";
import { Registerform } from "../../components/Form/Formregister";
import { Mainregister } from "../../style/mainforms";
import { Headerform } from "./style";

export const Register = () => {
  return (
    <Mainregister>
      <Headerform>
        <h1>Kenzie Hub</h1>
        <Link to={"/"}>Voltar</Link>
      </Headerform>
      <section>
        <h3>Crie sua conta</h3>
        <p>Rapido e grátis, vamos nessa</p>
        <Registerform />
      </section>
    </Mainregister>
  );
};
