import styled from 'styled-components'

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;

`

export const ContainerInfo = styled.div`
  background-color: #fff;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img{
    width: 24px;
    height: 24px;
    position: absolute;
    top: 2px;
    right: 2px;
    cursor: pointer;
  }
`

export const Info = styled.div`
  background-color: #a3bdff;
  width: 250px;
  height: 250px;

  .title{
    text-align: center;
  }

  .message{
    margin: 40px 10px 10px;
    font-size: 18px;
  }
`