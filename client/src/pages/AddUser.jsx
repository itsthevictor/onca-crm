import { useEffect, useState } from 'react';
import { Form, Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AddUser';
import { mainFetch } from '../utils/customFetch';
import { toast } from 'react-toastify';
import { AddButton } from '../components';
import { USER_ROLES } from '../../../utils/constants';

export const addUserAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await mainFetch.post('/auth/register', data);
    toast.success('user registered');
    return redirect('/useri');
  } catch (error) {
    return toast.error(error?.response?.data?.msg);
  }
};
const AddUser = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  });
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { firstName, lastName, email } = userData;

  useEffect(() => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !isValidEmail ||
      userData.role === ''
    ) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [userData]);

  const validateEmail = (value) => {
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)); // Simple email regex
    setUserData({ ...userData, email: value });
  };
  return (
    <Wrapper>
      <div className='wrapper'>
        <div className='form-container'>
          <Form method='post'>
            <div className='page-title'>
              <h2>Adaugă user</h2>
            </div>
            <div className='form-row'></div>
            <div className='form-row'>
              {' '}
              <label htmlFor='firstName'>prenume</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
            </div>
            <div className='form-row'>
              {' '}
              <label htmlFor='lastName'>nume</label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </div>
            <div className='form-row'>
              {' '}
              <label htmlFor='email'>email</label>
              <input
                type='email'
                id='email'
                name='email'
                onChange={(e) => validateEmail(e.target.value)}
              />
            </div>
            <div className='form-row'>
              {' '}
              <label htmlFor='role'>rol</label>
              <div className='role'>
                <select
                  id='rol'
                  onChange={(e) =>
                    setUserData({ ...userData, role: e.target.value })
                  }
                >
                  <option value=''>alege rolul</option>
                  <option value='admin'>{USER_ROLES.ACCOUNT}</option>
                  <option value='admin'>{USER_ROLES.OFFICER}</option>{' '}
                  <option value='admin'>{USER_ROLES.ADMIN}</option>{' '}
                  <option value='admin'>{USER_ROLES.TEMP}</option>
                </select>
              </div>
            </div>
            <div className='form-row'></div>
            <div className='btn-row'>
              <AddButton text={'adaugă'} disabled={!isDisabled} />
            </div>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default AddUser;
