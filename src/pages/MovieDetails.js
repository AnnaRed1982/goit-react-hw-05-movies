import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';

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
        const response = await fetchMovieDetails(movieId);
        // console.log(response);

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
        <ul>
          {movie.genres.map(genre => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
        </ul>
        <h3>Addditional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </>
    );
  }
};

export default MovieDetails;
