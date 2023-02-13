import { useEffect } from "react";
import { Userloged } from "../../services/user";
import { HeaderContainer } from "./style";

export const Userinfo = ({ user, setUser }) => {
  Userloged(setUser);

  return (
    <HeaderContainer>
      <section>
        <p>Olá, {user.name}</p>
        <span>{user.course_module}</span>
      </section>
    </HeaderContainer>
  );
};
