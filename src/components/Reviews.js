import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');

  const { movieId } = useParams();
  useEffect(() => {
    //http request
    setStatus('pending');
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        // console.log(response);

        setReviews(response);
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
    if (reviews.length === 0) {
      return <p>We don't have any reviews for this movie</p>;
    }
    return (
      <>
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default Reviews;
