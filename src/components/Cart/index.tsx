import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../../store';
import { CartContainer } from './styles';
import { useDispatch } from 'react-redux'
import { decrementCart, incrementCart, removeCart, clearCart } from '../../store/modules/pokemon';
import { Pokemon } from '../../types/pokemon';
import Modal from '../Modal';

function Cart() {
  const pokemons = useSelector((store: RootStore) => store.pokemonReduce)
  const dispatch = useDispatch();
  const [useModal, setUseModal] = useState(false);

  const totalCart = 
    pokemons.map(item => 
      item.amount * item.price
    ).reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0)
  
  const incrementItem = (data: Pokemon) => {
    dispatch(incrementCart(data))
  }

  const decrementItem = (data: Pokemon) => {
    if(data.amount === 1){
      if(window.confirm('Você deseja mesmo excluir?')){
        dispatch(removeCart(data));
      }
    }else{
      dispatch(decrementCart(data))
    }
  }

  const openModal = () => {
    setUseModal(true);
  }
  
  const closeModal = async() => {
    setUseModal(false);
    await dispatch(clearCart());
  }

  return (
    <CartContainer>
      <div className='container-title'>Carrinho {pokemons.length > 0 && <span className='clear-cart' onClick={() => dispatch(clearCart())}>Limpar</span>}</div>
      <div className='container-item'>
        {pokemons.map(data => (
          <div key={data.id} className='item'>
            <img src={data.image} alt={data.name} />
            <div className='item-info'>
              <p className='item-name'>{data.name}</p>
              <p className='item-price'>R$ {data.price},00</p>
              <div className='item-amount'>
                <button onClick={() => decrementItem(data)}>-</button>
                <p className='text-amount'>{data.amount}</p>
                <button onClick={() => incrementItem(data)} disabled={data.amount === data.stock ? true : false}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='container-price'>
        <span>TOTAL</span>
        <span>R${totalCart},00</span>
      </div>
      <button className='container-finish' onClick={() => openModal()} disabled={pokemons.length === 0 ? true : false}>Finalizar</button>
      {useModal && pokemons.length > 0 && <Modal closeModal={() => closeModal()}/>}
    </CartContainer>
  )
}

export default Cart;