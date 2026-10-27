import React from 'react';
import { PokemonCard } from './components/PokemonCard.jsx';

function App() {
  // Testando o pokemon card
  const mockPokemon = {
    id: 1,
    name: 'bulbasaur',
    types: ['Grass', 'Poison']
  };

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
      <PokemonCard pokemon={mockPokemon} />
    </div>
  );
}

export default App;