import React from 'react';
import './PokemonCard.css';

export function PokemonCard({ pokemon, onClick }) {
  const formattedId = String(pokemon.id).padStart(3, '0');

  return (
    <div className="pokemon-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="pokemon-card-header">
        <h3 className="pokemon-name">{pokemon.name}</h3>
        <span className="pokemon-id">#{formattedId}</span>
      </div>
      
      <div className="pokemon-image-container">
        <img 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
          alt={`Imagem do ${pokemon.name}`} 
          className="pokemon-image"
        />
      </div>

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
  );
}