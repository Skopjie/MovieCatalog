// src/dep/components/MovieList.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { IMG_BASE_URL } from '@/dep/apiURL'; // Ajustá la ruta si es necesario

export default function MovieList({ peliculas }) {
  if (!peliculas?.length) return <p>No se encontraron resultados.</p>;

  return (
    <div className='movie-catalog'>
      {peliculas.map((pelicula) => (
        <Link href={`/pelicula/${pelicula.id}`} key={pelicula.id} className='movie-slot'>
          <div>
            <img
              src={IMG_BASE_URL + pelicula.poster_path}
              alt={pelicula.original_title}
              width="100"
            />
            <div className='movie-slot-info'>
              <h3>{pelicula.original_title}</h3>
              <p>{pelicula.release_date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
