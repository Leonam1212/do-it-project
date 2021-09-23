import React from "react";
import { Container, Background, Content, AnimationContainer } from "./style";
import Button from "../../components/Button";
import { Link, Redirect } from "react-router-dom";
import Input from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const Signup = ({ authenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email invalido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Minimo de 8 digitos")
      .required("Campo obrigatório!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ name, email, password }) => {
    const user = { name, email, password };

    api
      .post("/user/register", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/login");
      })
      .catch((err) => {
        toast.error("Erro ao criar a conta");
      });
  };

  if (authenticated) {
    return <Redirect to="dashboard" />;
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Faça seu cadastro</h1>
            <Input
              register={register}
              name="name"
              icon={FiUser}
              placeholder="Digite seu Nome"
              label="Nome"
              error={errors.name?.message}
            />

            <Input
              register={register}
              name="email"
              icon={FiMail}
              placeholder="Digite seu e-mail"
              label="E-mail"
              error={errors.email?.message}
            />

            <Input
              register={register}
              name="password"
              icon={FiLock}
              placeholder="Digite sua senha"
              type="password"
              label="Senha"
              error={errors.password?.message}
            />

            <Input
              register={register}
              name="confirmPassword"
              icon={FiLock}
              placeholder="Confirme sua senha"
              type="password"
              label="Confirmar Senha"
              error={errors.confirmPassword?.message}
            />

            <Button type="submit">Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default Signup;
