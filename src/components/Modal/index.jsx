import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog } from "@mui/material";

import { registerModalSchema } from "./modalschema";
import { Select } from "../Select";
import { Input } from "../Input";
import { createTech } from "../../services/techs";
import { HeaderNavTechs } from "./style";
import { Modalcontainer } from "../../style/modal";

export const HeaderTechs = ({ setTechs }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerModalSchema),
  });

  const techsRequest = async (formData) => {
    await createTech(formData, setTechs, handleClose);
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
          <form onSubmit={handleSubmit(techsRequest)}>
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
