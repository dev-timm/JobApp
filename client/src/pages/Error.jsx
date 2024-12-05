import { Link, useRouteError } from 'react-router-dom';

import styles from '../styles/Error.module.css';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className={`${styles.page} container`}>
        <img src={img} alt="not found" />
        <h2>Lost in Space!</h2>
        <p>
          Oops! It looks like you've drifted off course. Our friendly alien is
          beaming up the spaceship to help you find your way back. Let’s head
          home and try again!
        </p>
        <Link to="/dashboard" className="btn-primary">
          Return Home
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h3>Something went wrong</h3>
    </div>
  );
};
export default Error;
