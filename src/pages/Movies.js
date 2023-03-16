import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'services/api';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');
  const [movieSearch, setMovieSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName');

  useEffect(() => {
    //http request
    setStatus('pending');
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieSearch(query);
        console.log(response);

        setMovieSearch(response);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };
    fetchMovie();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setQuery(form.elements.query.value);
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
                <Link to={`${movie.id}`}>{movie.title}</Link>
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
