import styled, {css} from "styled-components"

export const Container = styled.div`
    text-align: left;
    div{
        span {
            color: var(--red)
        }
    }

`

export const InputContainer = styled.div`
    background: var(--white);
    border-radius: 10px;
    border: 2px solid var(--gray);
    color: var(--gray);
    padding: 1rem;
    width: 100%;
    display: flex;
    transition: 0.5s;
    display:flex;
    align-items: center;
    justify-content: center;

  
    ${
        (props) => props.isErrored && css`
            border-color: var(--red);
            svg {
                color: var(--red)
            }
        `
    }
    svg {
        margin-right: 16px;
        font-size: 20px
    }
    span {
        display:flex;
        width: 25px;
    }
    input {
        background: transparent;
        align-items: center;
        flex:1;
        border: 0;
        color: var(--black);
        &::placeholder {
            color: var(--gray)
        }
    }
`