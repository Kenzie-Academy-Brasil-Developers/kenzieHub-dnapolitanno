import { toast } from "react-toastify";
import { api } from "./api";

export const UpdateTech = async (data, techId) => {
  console.log(data);
  console.log(techId);

  try {
    const { data } = await api.put(`/users/techs/${techId}`, data, {
      headers: { Authorization: `Bearer ${localStorage.Token}` },
    });
    console.log(data);

    toast.success("Tecnologia atualizada.");
  } catch (error) {
    toast.error("Ops! Algo deu errado");
    return error;
  }
};
