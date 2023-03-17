import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovieSearch } from 'services/api';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');
  const [movieSearch, setMovieSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    setStatus('pending');
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieSearch(movieName);

        setMovieSearch(response);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };
    fetchMovie();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }
  if (status === 'rejected') {
    return <h2>Whoops, something went wrong: {error}</h2>;
  }
  if (status === 'resolved') {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" name="query" />
          <button type="submit">Search</button>
        </form>

        <ul>
          {movieSearch.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Movies;
