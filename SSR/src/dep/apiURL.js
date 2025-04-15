//import 'dotenv/config';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';


export const getPopularMoviesUrl = (page = 1, language = 'es-ES') =>
  `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`;

export const getMovieByIdUrl = (movieId, language = 'es-ES') =>
  `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${language}`;

export const searchMoviesUrl = (query, page = 1, language = 'es-ES') =>
  `${BASE_URL}/search/movie?api_key=${API_KEY}&language=${language}&query=${encodeURIComponent(query)}&page=${page}`;
