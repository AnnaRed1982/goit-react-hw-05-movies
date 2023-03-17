import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/api';
import { useParams } from 'react-router-dom';
import poster from '../../images/poster.png';
import css from './Cast.module.css'

const Cast = () => {
  const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');

  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        console.log(response);

        setCast(response);
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
    if (cast.length === 0) {
      return <p>We don't have any cast for this movie</p>;
    }

    return (
      <>
        <ul className={css.castCard}>
          {cast.map(cast => {
            return (
              <li key={cast.cast_id} className={css.castCard}>
                {cast.profile_path ? (
                  <img
                    className={css.castPoster}
                    src={`${POSTER_PATH}${cast.profile_path}`}
                    alt="movie poster"
                    height="100"
                  />
                ) : (
                  <img
                    className={css.castPoster}
                    src={poster}
                    alt="movie poster"
                    height="100"
                  />
                )}
                <h5>{cast.name}</h5>
                <p>Character: {cast.character}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Cast;
