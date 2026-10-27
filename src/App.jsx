import React, { useState } from 'react';
import { PokemonList } from './components/PokemonList.jsx';
// Importa o ficheiro JSON (ajusta o caminho se a tua pasta tiver outro nome)
import pokedexData from './data/pokedex-data.json';

function App() {
  const [pokemonList, setPokemonList] = useState(pokedexData.pokemon);

  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: 'white', marginBottom: '20px' }}>Todos os Pokemon</h1>
      
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}

export default App;