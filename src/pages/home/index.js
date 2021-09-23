import { Container, Content, ImageHome } from "./style"
import Button from "../../components/Button/index"
import { useHistory, Redirect } from "react-router-dom"
const Home = ({authenticated}) => {
    const history = useHistory()
    const handleNavigation = (path) => {
        return history.push(path)
    }

    if (authenticated) {
        return <Redirect to = "dashboard" />
    }
    return (
        <Container>  
            <Content>
            <h1>
                do<span>.</span>it
            </h1>
            <span>Organize suas tarefas de forma facil e efetiva</span>
            <div>
                <Button whiteSchema onClick = {() => handleNavigation("/signup")}>Cadastre-se</Button>
                <Button onClick = {() => handleNavigation("/login")}>Login</Button>
             </div>
            </Content>

         
                <ImageHome src = "https://cdn.dribbble.com/users/3880277/screenshots/6880223/campsite.gif"/>
           
           
        </Container>
    )
}

export default Home