import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/appBar';
import Container from './components/container/container';

const Movies = lazy(() => import('./views/movies/movies'));
const TrendingToday = lazy(() =>
  import('./views/TrendingMoviesToday/trendingToday'),
);
const MovieCard = lazy(() => import('./views/movieCard/movieCard'));
const AdditionalInformation = lazy(() =>
  import('./views/additionalInformation/additionalInformation'),
);
const Cast = lazy(() => import('./views/cast/cast'));
const Reviews = lazy(() => import('./views/reviews/reviews'));

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
            <AdditionalInformation />
            <Route path="/movies/:movieId/cast">
              <Cast />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <Reviews />
            </Route>
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
