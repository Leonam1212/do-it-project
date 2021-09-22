import styled from "styled-components"

export const Container = styled.div`
    text-align: left;

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