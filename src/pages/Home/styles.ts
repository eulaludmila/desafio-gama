import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  column-gap: 40px;
  grid-template-areas: 
    "header header header header"
    "main main cart cart";

    @media(max-width: 1300px){
      padding: 0 20px;
      grid-template-areas: 
      "header header"
      "cart cart"
      "main main";
      justify-content: center;
    }
    
`