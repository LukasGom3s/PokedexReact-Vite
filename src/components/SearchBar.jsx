import React from 'react';
import './SearchBar.css';

export function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar-container">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Pesquise seu Pokémon" 
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button className="search-button">
        🔍
      </button>
    </div>
  );
}