import { useState, useEffect, useRef } from 'react';
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

  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setStatus('pending');
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieDetails(movieId);

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
        <Link to={backLinkHref.current} className={css.buttonLink}>
          <button type="button" className={css.buttonBack}>
            <HiArrowLeft size="20" />
            Go back
          </button>
        </Link>

        <div className={css.card}>
          {movie.poster_path ? (
            <img
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt="movie poster"
              className={css.cardPoster}
            />
          ) : (
            <img src={poster} alt="movie poster" className={css.cardPoster} />
          )}

          <div className={css.cardDescription}>
            <h2>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h2>

            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>

            <h3>Overview</h3>
            <p> {movie.overview}</p>
            <div>
              <h4>Genres</h4>
              <ul className={css.cardGenres}>
                {movie.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <h4>Additional information</h4>
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
