import React, { useState, useEffect } from 'react';
import logoImg from './assets/images/Logo.png';
import { PokemonList } from './components/PokemonList.jsx';
import { PokemonDetails } from './components/PokemonDetails.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { TrainersModal } from './components/TrainersModal.jsx';
import pokedexData from './data/pokedex-data.json';
import './css/index.css';

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [typesList, setTypesList] = useState([]);
    const [trainersList, setTrainersList] = useState([]); 

    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');
    
    const [showTrainers, setShowTrainers] = useState(false); 

    useEffect(() => {
        setPokemonList(pokedexData.pokemon);
        setTypesList(pokedexData.types);
        setTrainersList(pokedexData.trainers); 
    }, []);

    const filteredPokemon = pokemonList.filter(pokemon => {
        const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(pokemon.id).includes(searchTerm);
        const matchesType = selectedType === '' ||
            pokemon.types.some(t => t.name === selectedType);
        return matchesSearch && matchesType;
    });

    return (
        <div className="app-layout">
            <main className="main-content">
                <header className="app-header">
                    <img src={logoImg} alt="Legends Pokédex Logo" className="app-logo" />
                    
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%', maxWidth: '600px' }}>
                        <SearchBar
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                            types={typesList}
                            selectedType={selectedType}
                            onSelectType={setSelectedType}
                        />
                        {/* Botão para abrir os Treinadores */}
                        <button 
                            onClick={() => setShowTrainers(true)}
                            className="btn-primary"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            Treinadores
                        </button>
                    </div>
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

                {/* Modal dos Treinadores */}
                {showTrainers && (
                    <TrainersModal
                        trainers={trainersList}
                        pokemonList={pokemonList}
                        onClose={() => setShowTrainers(false)}
                    />
                )}
            </main>
        </div>
    );
}

export default App;