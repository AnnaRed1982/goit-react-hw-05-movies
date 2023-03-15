import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  useEffect(() => {
    //http request
  }, []);

  return <div>{movieId}</div>;
};

export default MovieDetails;
