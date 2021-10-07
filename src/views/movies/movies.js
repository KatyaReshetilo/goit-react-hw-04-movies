import { useState } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import Searchbar from '../../components/searchBar/searchBar';
import themoviedbApi from '../../services/themoviedbApi';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();
  const location = useLocation();
  const getMovies = movieName => {
    themoviedbApi
      .SearchMovies(movieName)
      .then(movies => setMovies(movies.results));
  };
  return (
    <>
      <Searchbar onSubmit={getMovies} />
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${url}/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
