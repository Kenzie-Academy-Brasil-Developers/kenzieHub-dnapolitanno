import { toast } from "react-toastify";
import { api } from "./api";

export const createTech = async (formData, setTechs, handleClose) => {
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
