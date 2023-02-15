import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { HeaderContainer } from "./style";

export const Userinfo = () => {
  const { user } = useContext(UserContext);

  return (
    <HeaderContainer>
      <section>
        <p>Olá, {user.name}</p>
        <span>{user.course_module}</span>
      </section>
    </HeaderContainer>
  );
};
