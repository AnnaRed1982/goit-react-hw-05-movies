import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchPopularMovie } from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');

  const location = useLocation();

  useEffect(() => {
    //http request
    setStatus('pending');
    const fetchMovie = async () => {
      try {
        const response = await fetchPopularMovie();
        // console.log(response);

        setMovies(response);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        setError(error.message);
      }
    };
    fetchMovie();
  }, []);

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }
  if (status === 'rejected') {
    return <h2>Whoops, something went wrong: {error}</h2>;
  }

  if (status === 'resolved') {
    // console.log(movies);
    return (
      <>
        <h1>Tranding today</h1>
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Home;
