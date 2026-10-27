import React from 'react';
import './SearchBar.css';

export function SearchBar({ searchTerm, onSearchChange, types, selectedType, onSelectType }) {
  return (
    <div className="search-and-filter-container">
      <div className="search-bar-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Pesquise seu Pokémon" 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button className="search-button">🔍</button>
      </div>

      <select 
        className="type-filter-select" 
        value={selectedType} 
        onChange={(e) => onSelectType(e.target.value)}
      >
        <option value="">Todos os Tipos</option>
        {types.map((type) => (
          type.id !== 0 && (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          )
        ))}
      </select>
    </div>
  );
}