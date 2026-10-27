import React, { useState } from 'react';
import { PokemonList } from './components/PokemonList.jsx';
import { PokemonDetails } from './components/PokemonDetails.jsx';
import pokedexData from './data/pokedex-data.json';

function App() {
  const [pokemonList] = useState(pokedexData.pokemon);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: 'white', marginBottom: '20px' }}>Todos os Pokemon</h1>
      
      <PokemonList 
        pokemonList={pokemonList} 
        onSelectPokemon={setSelectedPokemon} 
      />

      {selectedPokemon && (
        <PokemonDetails 
          pokemon={selectedPokemon} 
          onClose={() => setSelectedPokemon(null)} 
        />
      )}
    </div>
  );
}

export default App;