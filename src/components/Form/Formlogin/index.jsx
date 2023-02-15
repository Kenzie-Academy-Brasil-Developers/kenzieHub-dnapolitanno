import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../Input";
import { Forms } from "../../../style/form.js";
import { loginSchema } from "./loginschema.jsx";
import { UserContext } from "../../../contexts/UserContext";

export const Formlogin = () => {
  const { requestLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  return (
    <Forms onSubmit={handleSubmit((data) => requestLogin(data))}>
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
