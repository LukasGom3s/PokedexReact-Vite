import React, { useState } from 'react';
import { PokemonList } from './components/PokemonList.jsx';
import { PokemonDetails } from './components/PokemonDetails.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import pokedexData from './data/pokedex-data.json';
import './index.css'; 

function App() {
  const [pokemonList] = useState(pokedexData.pokemon);
  const [typesList] = useState(pokedexData.types);
  
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState(''); 

  const filteredPokemon = pokemonList.filter(pokemon => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          String(pokemon.id).includes(searchTerm);
    
    const matchesType = selectedType === '' || 
                        pokemon.types.some(t => t.name === selectedType);

    return matchesSearch && matchesType;
  });

  return (
    <div className="app-layout">
      {/* Removemos a Sidebar daqui */}
      
      <main className="main-content">
        <header className="app-header">
          {/* O SearchBar agora cuida da pesquisa e do filtro de tipos */}
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm}
            types={typesList}
            selectedType={selectedType}
            onSelectType={setSelectedType}
          />
        </header>
        
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
      </main>
    </div>
  );
}

export default App;