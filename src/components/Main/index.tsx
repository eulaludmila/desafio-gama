import React, { useEffect, useState } from 'react'
import { getPokemonList } from '../../services/api';
import { Pokemon } from '../../types/pokemon';
import { useDispatch } from 'react-redux'
import { addCart } from '../../store/modules/pokemon';
import { Main } from './styles'

interface PokemonData {
  name: string,
  url: string
}


interface CartProps{
  text: string
}

function MainContent(props:CartProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getList();

  }, [])

  async function getList() {
    await getPokemonList('https://pokeapi.co/api/v2/pokemon?&limit=20').then((res) => {
      listMap(res.results)
    })
  }

  async function listMap(list: PokemonData[]) {
    let arrayPokemons = [] as Pokemon[];
    for (let index = 0; index < list.length; index++) {
      await getPokemonList(list[index].url).then((res: any) => {
        arrayPokemons.push({
          id: res.id,
          name: res.name,
          price: res.base_experience,
          image: res.sprites.front_default,
          stock: 10,
          amount: 1
        })
      })
    }
    setPokemons(arrayPokemons)
  }

  function handleAddCart(pokemon: Pokemon) {
    dispatch(addCart(pokemon))
  }

  return (
    <Main>
      {
        pokemons.length > 0 && 
        pokemons
        .filter((dt: any) => (dt.name.toLowerCase()).search((props.text.toLowerCase())) >= 0)
        .map((res: any, index: number) => (
          <div key={index}>
            <img src={res.image} alt={res.name} />
            <p className='name'>{res.name}</p>
            <p className='price'>R${res.price},00</p>
            <button onClick={() => handleAddCart(res)}>Adicionar ao carrinho</button>
          </div>
        ))
      }
    </Main>
  )
}

export default MainContent;