import React from 'react';
import { PokemonCard } from './PokemonCard.jsx';
import './PokemonList.css';

export function PokemonList({ pokemonList, onSelectPokemon }) {
  if (!pokemonList || pokemonList.length === 0) {
    return (
      <div className="empty-list">
        <p>Nenhum Pokémon encontrado.</p>
      </div>
    );
  }

  return (
    <div className="pokemon-grid">
      {pokemonList.map((pokemon) => (
        <PokemonCard 
          key={pokemon.id} 
          pokemon={pokemon} 
          onClick={() => onSelectPokemon(pokemon)}
        />
      ))}
    </div>
  );
}