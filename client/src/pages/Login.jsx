import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import { FormRow, Logo } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

import styles from '../styles/RegisterAndLogin.module.css';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

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
        <button
          type="submit"
          className="btn-medium-primary btn-form"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signin in...' : 'Sign In'}
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
