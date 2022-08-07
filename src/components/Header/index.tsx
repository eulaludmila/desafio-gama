import React, { FormEvent, useState } from 'react'
import { Cabecalho, Container, Search, MiniCart } from './styles';
import searchimg from'../../assets/images/search.png'
import cart from'../../assets/images/cart.png'
import { useSelector } from 'react-redux'
import { RootStore } from '../../store';

interface HeaderProps {
  search: (text: string) => void;
}

function Header(props:HeaderProps){
  const pokemons = useSelector((store: RootStore) => store.pokemonReduce);
  const [search, setSearch] = useState('');

  const handleChange = (text: string) => {
    setSearch(text);
    props.search(text);
  }

  return(
   <Cabecalho>
      <Container>
        <Search>
          <input placeholder="Buscar pokémons"  value={search} onChange={(e) => handleChange(e.target.value)}/>
          <img src={searchimg} alt="Pesquisar"/>
        </Search>
        <MiniCart>
          {pokemons.length > 0 && <div className='text-cart'>{pokemons.length}</div>}
          <img src={cart} alt="Carrinho"/>
        </MiniCart>
      </Container>
   </Cabecalho>
  )
}

export default Header;