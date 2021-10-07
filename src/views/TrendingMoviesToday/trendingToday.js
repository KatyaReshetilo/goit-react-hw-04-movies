import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import themoviedbApi from '../../services/themoviedbApi';
import PageHeading from '../../components/pageHeading/pageHeading';
export default function TrendingToday() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    themoviedbApi
      .TrendingMovies()
      .then(movies => setTrendingMovies(movies.results));
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      <ul>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}movies/${movie.id}`,
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
