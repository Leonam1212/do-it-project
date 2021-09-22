import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 100vh;

` 

export const Content = styled.div`
    max-width: 400px;
    margin: 150px auto;
    
    h1{
        text-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
        font-size: 2.5rem;
        
        span { 
            color: var(--orange)
        }
    }

    div {
        flex:1;
        display: flex;
        margin-top: 1rem;

        button + button {
            margin-left: 1rem;
        }

        span {
            margin-bottom: 2rem;
            font-size: 1.8rem;
            flex-wrap: wrap;
        }
    }

 @media (min-width: 768px) {
    margin-left: 180px;
 }

`

export const ImageHome = styled.img`

   width: 100%;
   height: 100vh;
  
@media (min-width: 768px) {
    width: 50%;
}

    

`