import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

import {searchMoviesUrl} from '../utils/apiURL';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

function MovieCatalog() {
  const [url, setUrl] = useState(null);
  const { data, loading, error } = useFetch(url);

  const handleBuscar = (data) => {
    const newURL = searchMoviesUrl(encodeURIComponent(data))
    setUrl(newURL);
  };

  return (
    <div className='movies-catalog-container'>
      <SearchBar inputInit={""} urlParamInit={"search"} onSearch={handleBuscar} />
      
      {loading && url ? <p>Cargando...</p> : <MovieList peliculas={data?.results} />}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default MovieCatalog;
