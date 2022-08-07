import {configureStore} from '@reduxjs/toolkit'
import pokemonReduce from './modules/pokemon';

const store = configureStore({
  reducer: {
    pokemonReduce
  }
})

export type RootStore =  ReturnType<typeof store.getState>

export default store;