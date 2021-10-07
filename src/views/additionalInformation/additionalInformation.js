import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import s from './addInfo.module.css';
export default function AdditionalInformation() {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <div className={s.info}>
      <h4>Additional Information</h4>
      <ul>
        <li>
          <Link
            to={{
              pathname: `${url}/cast`,
              state: { from: location },
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `${url}/reviews`,
              state: { from: location },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
}
