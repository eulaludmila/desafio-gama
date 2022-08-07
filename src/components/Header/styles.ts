import styled from 'styled-components'

export const Cabecalho = styled.header`
    /* background-color: #225cf0;; */
    background-color: #1542b3;
    height: 100px;
    grid-area: header;
    margin-bottom: 30px;
    @media(max-width: 430px){
        height: 80px;
        padding-bottom: 10px;
    }

`

export const Container = styled.div`
    max-width: 1300px;
    height: inherit;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 1300px){
        padding: 0 10px;
    }
    @media(max-width: 430px){
        flex-direction: column-reverse;
    }
`

export const Search = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    @media(max-width: 430px){
        width: 100%;
        justify-content: center;
    }

    input{
        width: 300px;
        height: 30px;
        outline: none;
        border: none;
        border-radius: 16px;
        box-sizing: border-box;
        padding: 0 12px;
        &::placeholder{

        }
    }

    img{
        width: 20px;
        height: 20px;
        margin-left: 5px;
        cursor: pointer;
    }
`

export const MiniCart = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    @media(max-width: 430px){
        width: 100%;
        height: 50px;
    }
    .text-cart{
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 24%;
        right: 4px;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        @media(max-width: 1300px){
            margin: 0;
        }
    }
    img{
        width: 22px;
        height: 22px;
        margin-right: 50px;
        @media(max-width: 1300px){
            margin: 20px;
        }
    }
`