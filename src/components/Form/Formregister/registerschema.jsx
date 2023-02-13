import * as yup from "yup";

export const registerSchema = yup.object({
    name: yup
      .string()
      .required("Campo obrigatório!")
      .min(3, "O nome precisa ter no mínimo 3 caracteres."),
    email: yup.string().required("Campo obrigatório!").email("Email inválido."),
    password: yup
      .string()
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
      .min(8, "Deve conter no mínimo 8 caracteres"),
    passwordconfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não correspondem.")
      .required("Por favor, confirme sua senha."),
    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!"),
    course_module: yup
      .string()
      .required("Campo obrigatório!")
      .oneOf([
        "Primeiro módulo (Introdução ao Frontend)",
        "Segundo módulo (Frontend Avançado)",
        "Terceiro módulo (Introdução ao Backend)",
        "Quarto módulo (Backend Avançado)",
      ])
      .label("Selecionar Módulo"),
  });