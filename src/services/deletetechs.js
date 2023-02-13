import { toast } from "react-toastify";
import { api } from "./api";

export const DeleteTechRequest = async (techId) => {
  try {
    const { data } = await api.delete(`/users/techs/${techId}`, {
      headers: { Authorization: `Bearer ${localStorage.Token}` },
    });
    toast.success("Tecnologia deletada.");
    setTechs(data);
  } catch (error) {
    toast.error("Erro ao deletar a tecnologia! Tente novamente.");
    return error;
  }
};
