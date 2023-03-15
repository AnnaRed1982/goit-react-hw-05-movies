import axios from 'axios';

const API_KEY = '7b4917c1c89b56950d6ac1f3ef5382d2';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovie = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  return response.data.results;
};
