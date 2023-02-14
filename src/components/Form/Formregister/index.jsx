import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../Input";
import { Select } from "../../Select";
import { registerSchema } from "./registerschema";

import { Forms } from "../../../style/form.js";
import { UserContext } from "../../../contexts/UserContext";

export const Registerform = () => {
  const { requestRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const requestRegisterApi = async (formData) => {
    delete formData.passwordconfirm;
    await requestRegister(formData);
  };

  return (
    <Forms onSubmit={handleSubmit(requestRegisterApi)}>
      <Input
        type="text"
        placeholder="Digite aqui seu nome"
        label="Nome"
        {...register("name")}
        errors={errors.name?.message}
      />
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
      <Input
        type="password"
        placeholder="Digite novamente sua senha"
        label="Confirmar senha"
        {...register("passwordconfirm")}
        errors={errors.passwordconfirm?.message}
      />
      <Input
        type="text"
        placeholder="Fale sobre você"
        label="Bio"
        {...register("bio")}
        errors={errors.bio?.message}
      />
      <Input
        type="text"
        placeholder="Opção de contato"
        label="Contato"
        {...register("contact")}
        errors={errors.contact?.message}
      />
      <Select
        id="module"
        label="Selecionar Módulo"
        {...register("course_module")}
        errors={errors.course_module?.message}
      >
        <option defaultValue={true} value="">
          Selecione seu módulo
        </option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
      </Select>
      <button type="submit">Cadastrar</button>
    </Forms>
  );
};
