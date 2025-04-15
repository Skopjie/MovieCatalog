// src/components/MovieList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import { IMG_BASE_URL } from '../utils/apiURL';

export default function MovieList({ peliculas }) {
  if (!peliculas?.length) return <p>No se encontraron resultados.</p>;

  return (
    <div className='movie-catalog'>
      {peliculas.map((pelicula) => (
        <Link to={`/pelicula/${pelicula.id}`} className='movie-slot' key={pelicula.id}>
          <img src={IMG_BASE_URL + pelicula.poster_path} alt={pelicula.original_title} width="100" />
          <div className='movie-slot-info'>
            <h3>{pelicula.original_title}</h3>
            <p>{pelicula.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
