'use client'

// pages/search-location.tsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from '@/app/location/Maps.module.css'; 

const SearchLocation: React.FC = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (query.length > 2) {
      try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
          params: {
            input: query,
            types: '(cities)',
            components: 'country:BR',
            key: 'AIzaSyASCXiUWjTfJhbM5F75DMK0lVbhuTbC1ko',
          },
        });
        setSuggestions(response.data.predictions);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    }
  };

  const handleSelectLocation = (location: any) => {
    setSelectedLocation(location);
    setSuggestions([]);
    setQuery(location.description);
  };

  return (
    <div className={styles.maps}>
      <h1>Monitoramento dos Oceanos e Praias</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Digite um local"
      />
      <button onClick={handleSearch}>Pesquisar</button>
      <ul>
        {suggestions.map((suggestion: any) => (
          <li key={suggestion.place_id} onClick={() => handleSelectLocation(suggestion)}>
            {suggestion.description}
          </li>
        ))}
      </ul>
      <div>
        <iframe
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyASCXiUWjTfJhbM5F75DMK0lVbhuTbC1ko&q=${selectedLocation ? selectedLocation.description : 'Rio de Janeiro, Brazil'}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SearchLocation;
