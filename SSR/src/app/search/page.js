"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { useFetch } from '@/dep/hooks/useFetch';
import SearchBar from '@/dep/components/SearchBar';
import MovieList from '@/dep/components/MovieList';
import { searchMoviesUrl } from '@/dep/apiURL';

function MovieCatalog() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const [url, setUrl] = useState(null);
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (search) {
      const newURL = searchMoviesUrl(encodeURIComponent(search));
      setUrl(newURL);
    }
  }, [search]);

  const handleBuscar = (value) => {
    const newURL = searchMoviesUrl(encodeURIComponent(value));
    setUrl(newURL);
  };

  return (
    <div className='movies-catalog-container'>
      <SearchBar inputInit={search || ""} urlParamInit={"search"} onSearch={handleBuscar} />
      {loading && url ? <p>Cargando...</p> : <MovieList peliculas={data?.results} />}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default MovieCatalog;
