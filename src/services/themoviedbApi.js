const apiKey = 'eb0d0367818cd79735feb2881fbbeeec';
const mainURL = 'https://api.themoviedb.org/3';

function TrendingMovies() {
  return fetch(`${mainURL}/trending/movie/day?api_key=${apiKey}`).then(res =>
    res.json(),
  );
}

function SearchMovies(movieName) {
  return fetch(
    `${mainURL}/search/movie?api_key=${apiKey}&query=${movieName}&page=1`,
  ).then(res => res.json());
}

function MovieInfo(movieId) {
  return fetch(
    `${mainURL}/movie/${movieId}?api_key=${apiKey}&language=en-US`,
  ).then(res => res.json());
}

function GetMovieActors(movieId) {
  return fetch(
    `${mainURL}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`,
  ).then(res => res.json());
}

function Reviews(movieId) {
  return fetch(
    `${mainURL}/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`,
  ).then(res => res.json());
}
const api = {
  TrendingMovies,
  SearchMovies,
  MovieInfo,
  GetMovieActors,
  Reviews,
};
export default api;
