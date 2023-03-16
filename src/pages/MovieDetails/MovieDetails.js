import { useState, useEffect } from 'react';
import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import { HiArrowLeft } from 'react-icons/hi';
import poster from '../../images/poster.png';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
        <Link to={backLinkHref} className={css.buttonLink}>
          <button type="button" className={css.buttonBack}>
            <HiArrowLeft size="20" />
            Go back
          </button>
        </Link>
        <div>
          {movie.poster_path ? (
            <img
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt="movie poster"
              height="400"
            />
          ) : (
            <img src={poster} alt="movie poster" height="400" />
          )}
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
        </div>
        <h3>Addditional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
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
