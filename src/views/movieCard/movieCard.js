import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory, Route } from 'react-router-dom';
import s from './movieCard.module.css';
import themoviedbApi from '../../services/themoviedbApi';
import AdditionalInformation from '../additionalInformation/additionalInformation';
import Cast from '../cast/cast';
import Reviews from '../reviews/reviews';
export default function MovieCard() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    themoviedbApi.MovieInfo(movieId).then(setMovie);
  }, [movieId]);

  const moviePoster = movie => {
    let posterAlt = '';
    if (movie.poster_path) {
      posterAlt = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    } else {
      posterAlt =
        'https://cdn.pixabay.com/photo/2013/07/12/13/58/camera-147680_960_720.png';
    }
    return posterAlt;
  };

  const dateRelease = movie => {
    let movieDateRelease = '';
    if (movie.release_date) {
      movieDateRelease = movie.release_date.slice(0, 4);
    }
    return movieDateRelease;
  };

  const handleGoBack = () => {
    history.push(location.state?.from ? location.state.from : '/');
  };

  return (
    <>
      <button className={s.button} type="button" onClick={handleGoBack}>
        Go back
      </button>
      {movie && (
        <div className={s.movieCard}>
          <img
            src={moviePoster(movie)}
            alt={movie.original_title}
            className={s.poster}
            loading="lazy"
            width="274px"
            heigth="398px"
          />
          <div>
            <h2>
              {movie.original_title} ({dateRelease(movie)})
            </h2>
            <p>User Score: {Math.round(movie.vote_count)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
      )}
      <AdditionalInformation />
      <Route path="/movies/:movieId/cast">
        <Cast />
      </Route>
      <Route path="/movies/:movieId/reviews">
        <Reviews />
      </Route>
    </>
  );
}
