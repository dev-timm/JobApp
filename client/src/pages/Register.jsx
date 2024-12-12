import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import { FormRow, Logo } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

import styles from '../styles/RegisterAndLogin.module.css';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
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
        <button
          type="submit"
          className="btn-medium-primary btn-form"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
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
