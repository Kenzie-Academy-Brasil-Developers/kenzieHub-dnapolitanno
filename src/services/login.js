import { api } from "./api";
import { toast } from "react-toastify";

export const requestLogin = async (formData, setLoading, setUser) => {
  try {
    const { data } = await api.post("/sessions", formData);

    toast.success("Login efetuado com sucesso!");

    localStorage.setItem("Token", data.token);
    localStorage.setItem("Id", data.user.id);

    setLoading(true);
    setUser(data.user);
  } catch (error) {
    toast.error("Ops! Algo deu errado");
    return error;
  }
};
