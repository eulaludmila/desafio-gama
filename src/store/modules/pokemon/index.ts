import {createSlice} from '@reduxjs/toolkit'
import { Pokemon } from '../../../types/pokemon';

const searchState = (state:Pokemon[], id:number) => {
  return state.findIndex((st) => st.id === id) as number;
}

const pokemonReduce = createSlice({
  name: 'pokemon',
  initialState: [] as Pokemon[],
  reducers: {
    addCart(state, action){
      const index = searchState(state, action.payload.id);
      if(index > -1){
        if(state[index].amount < 10){
          state[index].amount++
        }
      }else{
        state.push(action.payload)
        }
    },
    removeCart(state, action){
      state = state.filter(item => item.id !== action.payload.id)
      return state;
    },
    incrementCart(state, action){
      const index = searchState(state, action.payload.id);
      state[index].amount++;
    },
    decrementCart(state, action){
      const index = searchState(state, action.payload.id);
      state[index].amount--;
    },
    clearCart(state){
     return state = []
    }
  }
})

export const {addCart, removeCart, incrementCart, decrementCart, clearCart} = pokemonReduce.actions;
export default pokemonReduce.reducer