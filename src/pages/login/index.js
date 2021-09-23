import React from "react"
import { Container, Background, Content, AnimationContainer } from "./style"
import Button from "../../components/Button"
import {Link, Redirect} from "react-router-dom"
import Input from "../../components/Input"
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../services/api"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"
const Login = ({authenticated, setAuthenticated}) => {
    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().email("Email invalido").required("Campo obrigatório!"),
        password: yup.string().min(8, "Minimo de 8 digitos").required("Campo obrigatório!"),
       
    });


    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitFunction = (data) => {
        api
        .post("/user/login", data)
        .then((response) => {
            const { token } = response.data;
            localStorage.setItem("@Doit:token",  JSON.stringify(token))

            setAuthenticated(true)

            return history.push("/dashboard")
        })
        .catch((err) => toast.error("Email ou Senha inválidos"))
    }

    if (authenticated) {
        return <Redirect to = "dashboard" />
    }
    return(
        <Container>
          
            <Content> 
                <AnimationContainer>
                    <form onSubmit = {handleSubmit(onSubmitFunction)}>
                        <h1>Login</h1>
         
                        <Input register = {register} name = "email"  icon = {FiMail} placeholder = "Digite seu e-mail"label = "E-mail"
                        error = {errors.email?.message}
                        />

                        <Input register = {register} name = "password"  icon = {FiLock} placeholder = "Digite sua senha"type = "password" label = "Senha"
                         error = {errors.password?.message}
                        />

                        <Button type = "submit">Enviar</Button>
                        <p>
                            Não tem uma conta? Faça seu <Link to = "/signup">Cadastro</Link>
                       </p>
                    </form>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
  
}
export default Login