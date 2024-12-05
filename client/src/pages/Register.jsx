import { Form, Link } from 'react-router-dom';
import { FormRow, Logo } from '../components';

import styles from '../styles/RegisterAndLogin.module.css';

const Register = () => {
  return (
    <>
      <nav>
        <Logo />
      </nav>
      <h1>Sign Up</h1>
      <Form method="post" className="form">
        <FormRow
          type="text"
          name="name"
          placeholder="Enter first name"
          defaultValue="john"
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          placeholder="Enter last name"
          defaultValue="Smith"
        />
        <FormRow
          type="text"
          name="location"
          placeholder="Enter location"
          defaultValue="earth"
        />
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
          Sign Up
        </button>
        <p>
          Already a user?{' '}
          <Link to="/login" className={styles.link}>
            Sign in here
          </Link>
        </p>
      </Form>
    </>
  );
};
export default Register;
