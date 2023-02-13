import { toast } from "react-toastify";
import { api } from "./api";

export const createTech = async (formData, setTechs) => {
  try {
    const { data } = await api.post("/users/techs", formData, {
      headers: { Authorization: `Bearer ${localStorage.Token}` },
    });

    toast.success("Tecnologia cadastrada!");
    setTechs((oldData) => [...oldData, data]);
  } catch (error) {
    toast.info("Tecnologia já cadastrada.");
    return error;
  }
};
