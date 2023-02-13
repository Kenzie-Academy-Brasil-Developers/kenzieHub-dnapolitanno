import { toast } from "react-toastify";
import { api } from "./api";

export const UpdateTech = async (
  formData,
  techId,
  RequiredTechs,
  handleClose
) => {
  try {
    const { data } = await api.put(`/users/techs/${techId}`, formData, {
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
