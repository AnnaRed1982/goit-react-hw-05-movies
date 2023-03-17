import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('start');

  const { movieId } = useParams();
  useEffect(() => {
    setStatus('pending');
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieReviews(movieId);

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
        <ul className={css.reviewItem}>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h4 className={css.reviewAuthor}>Author: {review.author}</h4>
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
