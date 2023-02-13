import { useState } from "react";
import { api } from "../../services/api";
import { ComponentsListTechs } from "../Listechs";
import { HeaderTechs } from "../Modal";
import { Container, Usercomp } from "./style";

import { useEffect } from "react";

export const Maindash = () => {
  const [techs, setTechs] = useState([]);

  async function RequiredTechs() {
    try {
      const { data } = await api.get("/profile", {
        headers: { Authorization: `Bearer ${localStorage.Token}` },
      });

      setTechs(data.techs);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    // async function RequiredTechs() {
    //   try {
    //     const { data } = await api.get("/profile", {
    //       headers: { Authorization: `Bearer ${localStorage.Token}` },
    //     });
    //     setTechs(data.techs);
    //   } catch (error) {
    //     return error;
    //   }
    // }
    RequiredTechs();
  }, []);

  return (
    <Container>
      <HeaderTechs setTechs={setTechs} />
      <Usercomp>
        {techs.length ? (
          techs.map(({ title, status, id }) => (
            <ComponentsListTechs
              key={id}
              name={title}
              status={status}
              techId={id}
              RequiredTechs={RequiredTechs}
            />
          ))
        ) : (
          <p>Nenhuma tecnologia foi cadastrada.</p>
        )}
      </Usercomp>
    </Container>
  );
};
