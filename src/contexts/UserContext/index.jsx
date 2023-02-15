import { api } from "../../services/api";
import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [registerUser, setRegisterUser] = useState(false);

  const requestLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);

      toast.success("Login efetuado com sucesso!");

      localStorage.setItem("Token", data.token);
      localStorage.setItem("Id", data.user.id);

      setLoading(true);
      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      return error;
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("Token");
    localStorage.removeItem("Id");
    navigate("/");
  };

  const requestRegister = async (body) => {
    try {
      await api.post("/users", body);

      toast.success("Cadastro realizado com sucesso!");

      setLoading(true);
      setRegisterUser(true);
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      return error;
    } finally {
      setRegisterUser(false);
    }
  };

  useEffect(() => {
    const requestUser = async () => {
      const id = localStorage.getItem("Id");

      try {
        if (localStorage.Token) {
          const { data } = await api.get(`/users/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.Token}` },
          });

          navigate("/dashboard");
          setUser(data);
        }
      } catch (error) {
        localStorage.clear();
        return error;
      }
    };
    requestUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        registerUser,
        setRegisterUser,
        requestLogin,
        requestRegister,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
