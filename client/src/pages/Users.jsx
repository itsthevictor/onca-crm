import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Users';
import { AddButton } from '../components';
import { mainFetch } from '../utils/customFetch';
import { toast } from 'react-toastify';
export const usersLoader = async () => {
  try {
    const response = await mainFetch.get('/users');
    return response.data;
  } catch (error) {
    return toast.error(error?.response?.data?.msg);
  }
};
const Users = () => {
  const { users } = useLoaderData();

  return (
    <Wrapper>
      <header>
        {' '}
        <div className='container'>Useri</div>
        <Link to='adauga-user'>
          <AddButton text=' + adaugă user' />
        </Link>
      </header>
      <div className='user-list'>
        {users.map((item, i) => (
          <div className='user' key={i}>
            {item.firstName}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default Users;
