import React from 'react';
import { PokemonList } from './components/PokemonList.jsx';

function App() {
  // Array de teste com múltiplos objetos
  const mockPokemonList = [
    { id: 1, name: 'bulbasaur', types: ['Grass', 'Poison'] },
    { id: 4, name: 'charmander', types: ['Fire'] },
    { id: 7, name: 'squirtle', types: ['Water'] },
    { id: 25, name: 'pikachu', types: ['Electric'] }
  ];

  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: 'white', marginBottom: '20px' }}>Todos os Pokemon</h1>
      <PokemonList pokemonList={mockPokemonList} />
    </div>
  );
}

export default App;