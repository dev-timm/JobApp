import styles from '../styles/Landing.module.css';

import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <nav>
        <Logo />
      </nav>
      <div className={`${styles.page} container`}>
        <h1 className={styles.headingDisplay}>
          Organize Every Job Application
        </h1>
        <p className="text-large">
          An app for documenting job application details like sent CVs, contact
          information, and notes, keeping everything organized in one place.
        </p>
        <div className={styles.actions}>
          <Link to="/register" className="btn-primary">
            Register Now
          </Link>
          <Link to="/login" className="btn-secondary">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};
export default Landing;
