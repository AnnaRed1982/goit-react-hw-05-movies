import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  useEffect(() => {
    //http request
  }, []);

  return <div>Reviews</div>;
};

export default Reviews;
