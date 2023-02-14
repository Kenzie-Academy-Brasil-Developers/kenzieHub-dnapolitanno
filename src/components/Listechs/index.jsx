import { Dialog } from "@mui/material";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";

import { Input } from "../Input";
import { Select } from "../Select";
import { Modalcontainer } from "../../style/modal";
import { TechContext } from "../../contexts/TechContext";

export const ComponentsListTechs = ({ name, status, techId }) => {
  const { UpdateTech, DeleteTechRequest } = useContext(TechContext);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section>
        <li id={techId} onClick={handleClickOpen}>
          <p>{name}</p>
          <div>
            <span>{status}</span>
          </div>
        </li>
      </section>
      <Dialog open={open} onClose={handleClose}>
        <Modalcontainer>
          <div className="headerTechs">
            <h4>Tecnologia Detalhes</h4>
            <button onClick={handleClose}>X</button>
          </div>
          <form
            onSubmit={handleSubmit((data) =>
              UpdateTech(data, techId, handleClose)
            )}
          >
            <Input
              type="text"
              placeholder={name}
              label="Nome"
              disabled="disabled"
            />
            <Select
              id="select-techs"
              label="Status"
              {...register("status")}
              errors={errors.status?.message}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <div className="containerBtn">
              <button className="updateBtn" type="submit">
                Salvar alterações
              </button>
              <button
                className="deleteBtn"
                type="button"
                onClick={() => DeleteTechRequest(techId)}
              >
                Excluir
              </button>
            </div>
          </form>
        </Modalcontainer>
      </Dialog>
    </>
  );
};
