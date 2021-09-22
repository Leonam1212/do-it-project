import React from "react"
import { Container, Background, Content, AnimationContainer } from "./style"
import Button from "../../components/Button"
import {Link} from "react-router-dom"
import Input from "../../components/Input"
import { FiUser, FiMail, FiLock } from "react-icons/fi"
const Signup = () => {

    return(
        <Container>
            <Background />
            <Content> 
                <AnimationContainer>
                    <form>
                        <h1>Faça seu cadastro</h1>
                        <Input icon = {FiUser} placeholder = "Digite seu Nome"label = "Nome"/>
                        <Input icon = {FiMail} placeholder = "Digite seu e-mail"label = "E-mail"/>
                        <Input icon = {FiLock} placeholder = "Digite sua senha"type = "password" label = "Senha"/>
                        <Input icon = {FiLock} placeholder = "Confirme sua senha"type = "password" label = "Confirmar Senha"/>

                        <Button>Enviar</Button>
                        <p>
                            Já tem uma conta? Faça seu <Link to = "/link">Login</Link>
                       </p>
                    </form>
                </AnimationContainer>
            </Content>
        </Container>
    )
  
}
export default Signup