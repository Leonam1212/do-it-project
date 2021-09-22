import {Container, InputContainer} from "./style"

const Input = ({label, icon: Icon, ...rest}) => {
    return (
        <Container >
            <div>
                {label}
            </div>
            <InputContainer>
                <span>{Icon && <Icon />}</span>
                <input {...rest} />
            </InputContainer>
        </Container>
    )
}

export default Input 