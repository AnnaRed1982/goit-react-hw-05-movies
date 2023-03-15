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
  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }
  if (status === 'rejected') {
    return <h2>Whoops, something went wrong: {error}</h2>;
  }
  if (status === 'resolved') {
    return (
      <>
        <button type="button">Go back</button>
        <img
          src={`${POSTER_PATH}${movie.poster_path}`}
          alt="movie poster"
          height="400"
        />
        <h2>{movie.title}</h2>
        <p>({movie.release_date.slice(0, 4)})</p>
        <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
        <p>Overview</p>
        <p> {movie.overview}</p>
        <p>Genres</p>
        {/* <p> {movie.genres}</p> */}
      </>
    );
  }
};

export default MovieDetails;
