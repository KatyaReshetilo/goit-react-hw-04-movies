import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar/appBar';
import Container from './components/container/container';

const Movies = lazy(() => import('./views/movies/movies'));
const TrendingToday = lazy(() =>
  import('./views/TrendingMoviesToday/trendingToday'),
);
const MovieCard = lazy(() => import('./views/movieCard/movieCard'));

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <TrendingToday />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movies/:movieId">
            <MovieCard />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
