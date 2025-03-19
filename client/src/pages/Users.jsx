import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Users';
import { AddButton } from '../components';
import { mainFetch } from '../utils/customFetch';
import { toast } from 'react-toastify';
import SortingTable from '../components/tables/SortingTable';
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
        <Link to='adauga-user'>{' + adaugă user'}</Link>
      </header>
      <div className='user-list'>
        <SortingTable tableData={users} />
      </div>
    </Wrapper>
  );
};
export default Users;
