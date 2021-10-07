import { useState } from 'react';
import s from './searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [movieName, setMovieName] = useState('');
  const handelSubmit = event => {
    event.preventDefault();
    if (movieName.trim() === '') {
      return;
    }
    onSubmit(movieName);
    setMovieName('');
  };

  const handelMovieNameChange = event => {
    setMovieName(event.currentTarget.value.toLowerCase());
  };
  return (
    <form className={s.searchForm} onSubmit={handelSubmit}>
      <button type="submit" className={s.searchFormButton}>
        <span className={s.searchFormButtonLabel}>Search</span>
      </button>

      <input
        className={s.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        value={movieName}
        onChange={handelMovieNameChange}
        placeholder="Search movies"
      />
    </form>
  );
}
