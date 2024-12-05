import { Form, Link } from 'react-router-dom';
import { FormRow, Logo } from '../components';

import styles from '../styles/RegisterAndLogin.module.css';

const Login = () => {
  return (
    <>
      <nav>
        <Logo />
      </nav>
      <h1>Sign In</h1>
      <Form method="post" className="form">
        <FormRow
          type="email"
          name="email"
          placeholder="Enter email"
          defaultValue="john@gmail.com"
        />
        <FormRow
          type="password"
          name="password"
          placeholder="Enter pasword"
          defaultValue="secret123"
        />
        <button type="submit" className="btn-medium-primary btn-form">
          Sign In
        </button>
        <p>
          Not a user yet?{' '}
          <Link to="/register" className={styles.link}>
            Sign up here
          </Link>
        </p>
      </Form>
    </>
  );
};
export default Login;
