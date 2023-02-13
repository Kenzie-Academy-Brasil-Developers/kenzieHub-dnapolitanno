import { api } from "./api";
import { toast } from "react-toastify";

export const registertest = async (body, setRegisterUser) => {
  try {
    await api.post("/users", body);

    toast.success("Cadastro realizado com sucesso!");

    setRegisterUser(true);
  } catch (error) {
    toast.error("Ops! Algo deu errado");
    return error;
  }
};
