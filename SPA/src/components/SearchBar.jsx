import React, { useState, useEffect } from 'react';

export default function SearchBar({ inputInit, urlParamInit, onSearch, onChange }) {
  const [query, setQuery] = useState(inputInit);

  const handleInputChange = (inputText) => {
    setQuery(inputText);
    if (onChange) onChange(inputText);
  };

  const handleClick = () => {
    if (onSearch) onSearch(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  useEffect(() => {
    if (urlParamInit) {
      const params = new URLSearchParams(window.location.search);
      const searchParam = params.get(urlParamInit);
      if (searchParam) {
        setQuery(searchParam);
        if (onSearch) onSearch(searchParam);
      }
    }
  }, []);
  

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar película..."
        value={query}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {onSearch && (
        <button className='button' onClick={handleClick}>Buscar</button>
      )}
    </div>
  );
}
