import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  grid-area: main;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  height: fit-content;
  width: 850px;

  @media(max-width: 1300px){
    width: 100%;
  }

  @media(max-width: 800px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 500px){
    grid-template-columns: repeat(2, 1fr);
  }

  div{
    border: solid 1px #ccc;
    border-radius: 8px;
    padding: 15px;
    box-sizing: border-box;
    img{
      display:block ;
      width: 96px;
      height: 96px;
      margin: 0 auto;
    }
    .name::first-letter{
      text-transform: uppercase;
    }
    .price{
      font-weight: 500;
    }

    button{
      border-radius: 8px;
      outline: none;
      border: 0;
      width: 100% ;
      background-color: #f4dc26;
      color: #000;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
      font-weight: 600;
    }
  }
`