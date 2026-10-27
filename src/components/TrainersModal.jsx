import React from 'react';
import '../css/TrainersModal.css';

export function TrainersModal({ trainers, pokemonList, onClose }) {
  // Função auxiliar para encontrar a imagem do Pokémon pelo ID
  const getPokemonImage = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content trainers-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        
        <div className="modal-header">
          <h2>Treinadores Pokémon</h2>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-header">
                <h3>{trainer.name}</h3>
                <span className="badges">🏅 {trainer.badges} Insígnias</span>
              </div>
              
              <div className="trainer-pokemon-list">
                {trainer.pokemonIds.map((pokeId, index) => {
                  const pokemon = pokemonList.find(p => p.id === pokeId);
                  return (
                    <div key={`${pokeId}-${index}`} className="trainer-pokemon-mini" title={pokemon?.name}>
                      <img 
                        src={getPokemonImage(pokeId)} 
                        alt={`Pokémon ${pokeId}`} 
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}