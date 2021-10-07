import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import themoviedbApi from '../../services/themoviedbApi';
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    themoviedbApi.Reviews(movieId).then(reviews => setReviews(reviews.results));
  }, [movieId]);

  return (
    <ul>
      {reviews === [] ? (
        reviews.map(review => {
          return (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
}
