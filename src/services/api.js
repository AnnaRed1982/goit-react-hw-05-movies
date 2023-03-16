import axios from 'axios';

const API_KEY = '7b4917c1c89b56950d6ac1f3ef5382d2';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovie = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

export const fetchMovieSearch = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  );
  return response.data.results;
};
