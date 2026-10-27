import React from 'react';
import { PokemonCard } from './PokemonCard.jsx';
import './PokemonList.css';

export function PokemonList({ pokemonList }) {
  // Tratamento para quando a pesquisa ou filtro não devolve resultados
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
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}