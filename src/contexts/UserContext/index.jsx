import { api } from "../../services/api";
import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [registerUser, setRegisterUser] = useState(false);
  const [loadWaitScreen, setLoadWaitScreen] = useState(true);

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
    setUser({});
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
          navigate("/dashboard");
          const { data } = await api.get(`/users/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.Token}` },
          });

          setUser(data);
          setLoadWaitScreen(false);
        } else {
          navigate("/");
        }
      } catch (error) {
        setLoadWaitScreen(true);
        localStorage.clear();
        return error;
      }
    };
    requestUser();
  }, [navigate]);

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
