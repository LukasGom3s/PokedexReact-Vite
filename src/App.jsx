import React, { useState } from 'react';
import { PokemonList } from './components/PokemonList.jsx';
import { PokemonDetails } from './components/PokemonDetails.jsx';
import { SearchBar } from './components/SearchBar.jsx'; // Nova importação
import pokedexData from './data/pokedex-data.json';

function App() {
  const [pokemonList] = useState(pokedexData.pokemon);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Estado da barra de pesquisa

  // Filtra a lista com base no nome ou ID digitado
  const filteredPokemon = pokemonList.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    String(pokemon.id).includes(searchTerm)
  );

  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <h1 style={{ color: 'white' }}>Todos os Pokemon</h1>
      
      {/* Barra de pesquisa inserida acima da lista */}
      <SearchBar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />

      {/* Passamos a lista filtrada em vez da lista completa */}
      <PokemonList 
        pokemonList={filteredPokemon} 
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