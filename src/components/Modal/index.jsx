import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog } from "@mui/material";

import { registerModalSchema } from "./modalschema";
import { Select } from "../Select";
import { Input } from "../Input";
import { HeaderNavTechs } from "./style";
import { Modalcontainer } from "../../style/modal";
import { TechContext } from "../../contexts/TechContext";

export const HeaderTechs = () => {
  const { createTech } = useContext(TechContext);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerModalSchema),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <HeaderNavTechs>
        <h3>Tecnologias</h3>
        <button onClick={handleClickOpen}>+</button>
      </HeaderNavTechs>
      <Dialog open={open} onClose={handleClose}>
        <Modalcontainer>
          <div className="headerTechs">
            <h4>Cadastrar Tecnologia</h4>
            <button onClick={handleClose}>X</button>
          </div>
          <form
            onSubmit={handleSubmit((data) => createTech(data, handleClose))}
          >
            <Input
              type="text"
              placeholder="Digite o nome da tecnologia"
              label="Nome"
              {...register("title")}
              errors={errors.title?.message}
            />
            <Select
              id="select-techs"
              label="Selecionar status"
              {...register("status")}
              errors={errors.status?.message}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <button className="registerBtn" type="submit">
              Cadastrar Tecnologia
            </button>
          </form>
        </Modalcontainer>
      </Dialog>
    </div>
  );
};
