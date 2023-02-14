import { api } from "../../services/api";
import { toast } from "react-toastify";
import { createContext, useState } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
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

  const createTech = async (formData, handleClose) => {
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: { Authorization: `Bearer ${localStorage.Token}` },
      });

      toast.success("Tecnologia cadastrada!");
      setTechs((oldData) => [...oldData, data]);
      handleClose();
    } catch (error) {
      toast.info("Tecnologia já cadastrada.");
      return error;
    }
  };

  const UpdateTech = async (formData, techId, handleClose) => {
    try {
      await api.put(`/users/techs/${techId}`, formData, {
        headers: { Authorization: `Bearer ${localStorage.Token}` },
      });

      toast.success("Tecnologia atualizada.");
      RequiredTechs();
      handleClose();
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
      return error;
    }
  };

  const DeleteTechRequest = async (techId) => {
    try {
      await api.delete(`/users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${localStorage.Token}` },
      });
      toast.success("Tecnologia deletada.");
      RequiredTechs();
    } catch (error) {
      toast.error("Erro ao deletar a tecnologia! Tente novamente.");
      return error;
    }
  };

  return (
    <TechContext.Provider
      value={{
        techs,
        setTechs,
        RequiredTechs,
        createTech,
        UpdateTech,
        DeleteTechRequest,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
