"use client";
import React from 'react';

import {getMovieByIdUrl, IMG_BASE_URL} from '../../../dep/apiURL';
import { useFetch } from '../../../dep/hooks/useFetch';


export default function PeliculaDetalle({ params }) {
    const { id } = params;
  const newURL = getMovieByIdUrl(id)
  const { data, loading, error } = useFetch(newURL);

  if (loading) return <p>Cargando detalles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='movie-data-container'>
      <img src={IMG_BASE_URL + data.poster_path} alt={data.title} />
      <div className='movie-data-info'>
        <h2>{data.title} ({data.release_date})</h2>
        <p><strong>Rating:</strong> {data.vote_average}</p>
        <p><strong>Resumen:</strong> {data.overview}</p>
        <a className='button' href={`/search?search=${encodeURIComponent(data.original_title)}`}>Volver</a>
      </div>
    </div>
  );
}
