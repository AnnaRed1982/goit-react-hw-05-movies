import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieId } from '../services/api';

const MovieDetails = () => {
  const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');

  useEffect(() => {
    //http request
    setStatus('pending');
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieId(movieId);
        console.log(response);

        setMovie(response);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <button type="button">Go back</button>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt="movie poster" />
      <h2>{movie.title}</h2>
      <p>({movie.release_date.slice(0, 4)})</p>
    </>
  );
};

export default MovieDetails;
