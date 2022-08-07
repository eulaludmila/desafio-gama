import React, { useState } from 'react';
import Cart from '../../components/Cart';
import Header from '../../components/Header';
import MainContent from '../../components/Main';
import { Container } from './styles';

function Home() {
  const [search, setSearch] = useState('');

  const searchText = (text: string) => {
    setSearch(text);
  }

  return (
    <>
      <Header search={searchText}/>
      <Container>
        <MainContent text={search}/>
        <Cart/>
      </Container>
    </>
  );
}

export default Home;
