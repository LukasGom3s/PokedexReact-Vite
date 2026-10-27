import React from 'react';
import './PokemonDetails.css';

export function PokemonDetails({ pokemon, onClose }) {
  if (!pokemon) return null;

  const formattedId = String(pokemon.id).padStart(3, '0');
  const getStatWidth = (value) => `${Math.min((value / 255) * 100, 100)}%`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        
        <div className="modal-header">
          <h2>{pokemon.name} <span className="modal-id">#{formattedId}</span></h2>
        </div>

        <div className="modal-body">
          <div className="modal-image-container">
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
              alt={pokemon.name} 
              className="modal-image"
            />
            <div className="pokemon-types">
              {pokemon.types.map((typeObj, index) => (
                <span 
                  key={index} 
                  className="type-badge"
                  style={{ backgroundColor: `var(--type-${typeObj.name.toLowerCase()})` }}
                >
                  {typeObj.name}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-stats">
            <h3>Estatísticas Base</h3>
            {Object.entries(pokemon.stats).map(([statName, statValue]) => (
              <div className="stat-row" key={statName}>
                <span className="stat-name">{statName.replace(/([A-Z])/g, ' $1').trim()}</span>
                <span className="stat-value">{statValue}</span>
                <div className="stat-bar-bg">
                  <div 
                    className="stat-bar-fill" 
                    style={{ 
                      width: getStatWidth(statValue),
                      backgroundColor: `var(--type-${pokemon.types[0]?.name.toLowerCase()})` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}