import { FormRow, FormRowSelect } from '../components';
import { useOutletContext } from 'react-router-dom';
import {
  JOB_STATUS,
  JOB_TYPE,
  REMOTE,
  SKILL_LEVEL,
} from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/jobs', data);
    toast.success('Job added successfully');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddJob = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method="post" className="form">
      <h2 className="form-title">Add Job</h2>
      <div className="form-center">
        <FormRow type="text" name="position" />
        <FormRow type="text" name="company" />
        <FormRow type="text" name="salary" />
        <FormRow
          type="text"
          labelText="job location"
          name="jobLocation"
          defaultValue={user.location}
        />
        <FormRowSelect
          labelText="Job Status"
          name="jobStatus"
          defaultValue={JOB_STATUS.PENDING}
          list={Object.values(JOB_STATUS)}
        />
        <FormRowSelect
          labelText="Job type"
          name="jobType"
          defaultValue={JOB_TYPE.FULL_TIME}
          list={Object.values(JOB_TYPE)}
        />
        <FormRowSelect
          name="remote"
          defaultValue={REMOTE.HYBRID}
          list={Object.values(REMOTE)}
        />
        <FormRowSelect
          labelText="Skill Level"
          name="skillLevel"
          defaultValue={SKILL_LEVEL.ENTRY_LEVEL}
          list={Object.values(SKILL_LEVEL)}
        />
        <button
          type="submit"
          className="btn-medium-primary btn-form"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Add Job'}
        </button>
      </div>
    </Form>
  );
};
export default AddJob;
