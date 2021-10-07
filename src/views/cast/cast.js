import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './cast.module.css';
import themoviedbApi from '../../services/themoviedbApi';
export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    themoviedbApi.GetMovieActors(movieId).then(movie => setActors(movie.cast));
  }, [movieId]);

  const actorPhoto = actor => {
    let photoAlt = '';
    if (actor.profile_path) {
      photoAlt = `https://image.tmdb.org/t/p/original${actor.profile_path}`;
    } else {
      photoAlt =
        'https://cdn.pixabay.com/photo/2013/07/12/13/58/camera-147680_960_720.png';
    }
    return photoAlt;
  };

  return (
    <ul className={s.actorsSet}>
      {actors &&
        actors.map(actor => {
          return (
            <li key={actor.credit_id} className={s.actor}>
              <img
                src={actorPhoto(actor)}
                alt={actor.name}
                loading="lazy"
                height="140px"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
    </ul>
  );
}
