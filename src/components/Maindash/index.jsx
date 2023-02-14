import { useContext, useState } from "react";
import { api } from "../../services/api";
import { ComponentsListTechs } from "../Listechs";
import { HeaderTechs } from "../Modal";
import { Container, Usercomp } from "./style";

import { useEffect } from "react";
import { TechContext } from "../../contexts/TechContext";

export const Maindash = () => {
  const { RequiredTechs, techs } = useContext(TechContext);

  useEffect(() => {
    RequiredTechs();
  }, []);

  return (
    <Container>
      <HeaderTechs />
      <Usercomp>
        {techs.length ? (
          techs.map(({ title, status, id }) => (
            <ComponentsListTechs
              key={id}
              name={title}
              status={status}
              techId={id}
            />
          ))
        ) : (
          <p>Nenhuma tecnologia foi cadastrada.</p>
        )}
      </Usercomp>
    </Container>
  );
};
