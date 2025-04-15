import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

import {getPopularMoviesUrl} from '../utils/apiURL';
import MovieList from '../components/MovieList';

function HomeMovie() {
  const [url, setUrl] = useState(null);
  const { data, loading, error } = useFetch(url);

    useEffect(() => {
        const newURL = getPopularMoviesUrl()
        setUrl(newURL);
    }, []);

  return (
    <div className='movies-catalog-container'>
        <h2>Peliculas más populares</h2>
      {loading && url ? <p>Cargando...</p> : <MovieList peliculas={data?.results} />}
    </div>
  );
}

export default HomeMovie;
