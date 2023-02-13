import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { Input } from "../../Input";
import { Forms } from "../../../style/form.js";
import { loginSchema } from "./loginschema.jsx";
import { requestLogin } from "../../../services/login.js";

export const Formlogin = ({ setUser }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const loginUser = async (formData) => {
    await requestLogin(formData, setLoading, setUser);
  };

  useEffect(() => {
    if (loading) {
      navigate("/dashboard");
      setLoading(false);
    }
  }, [loading]);

  return (
    <Forms onSubmit={handleSubmit(loginUser)}>
      <Input
        type="email"
        placeholder="Digite aqui seu email"
        label="Email"
        {...register("email")}
        errors={errors.email?.message}
      />
      <Input
        type="password"
        placeholder="Digite aqui sua senha"
        label="Senha"
        {...register("password")}
        errors={errors.password?.message}
      />
      <button type="submit">Entrar</button>
    </Forms>
  );
};
