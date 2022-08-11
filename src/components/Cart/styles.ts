import styled from 'styled-components'

export const CartContainer = styled.div`
  min-height: 400px;
  width: 350px;
  grid-area: cart;
  border-radius: 8px;

  @media(max-width: 1300px){
    margin: 0 auto 30px;
  }

  @media(max-width: 350px){
    width: 100%;
  }

  .container-title{
    height: 40px;
    background-color: #1542b3;
    border-radius: 8px 8px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    position: relative;

    .clear-cart{
      position: absolute;
      right: 5px;
      top: 9px;
      font-size: 14px;
      cursor: pointer;
    }
  }

  .container-item{
    height: 320px;
    border-left: solid 1px #ccc;
    border-right: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 6px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
      background: #fff;        /* color of the tracking area */
    }
    ::-webkit-scrollbar-thumb {
      background-color: #f4dc26;    /* color of the scroll thumb */
      border-radius: 20px;       /* roundness of the scroll thumb */
    }

    .item{
      display: grid;
      grid-template-columns:  96px auto;
      column-gap: 4px;
      border-bottom: solid 1px #ccc;
        .item-info{
          display: grid;
          grid-template-areas: 
            "name name"
            "price amount";
          .item-name{
            grid-area: name;
            margin-bottom: 0;
            &::first-letter{
              text-transform:uppercase;
            }
          }
          .item-price{
            grid-area: price;
            font-weight: 500;
          }
          .item-amount{
            grid-area: amount;
            display: flex;
            justify-content: center;
            align-items: center;
            .text-amount{
              padding: 0 10px
            }
            button{
              height: 22px;
              width: 22px;
              border-radius: 50%;
              outline: 0;
              border: 0;
              background-color: #a3bdff;
              color: #000;
              font-size: 16px;
              font-weight: 500;
              cursor: pointer;
              &:disabled{
                cursor: not-allowed;
              }
            }
          }
        }
    }
  }

  .container-price{
    display: flex;
    justify-content: space-between;
    border-left: solid 1px #ccc;
    border-right: solid 1px #ccc;
    padding: 10px 15px;
    box-sizing: border-box;

    span{
      display: block;
      font-weight: 500;
    }
  }

  .container-finish{
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: #1542b3;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:disabled{
      opacity: 0.6;
    }
  }
`