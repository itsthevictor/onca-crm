import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Users';
import { AddButton } from '../components';
import { mainFetch } from '../utils/customFetch';
import { toast } from 'react-toastify';
import SortingTable from '../components/tables/SortingTable';
import { USER_COLUMNS } from '../components/tables/columns';
import FilteringTable from '../components/tables/FilteringTable';
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
        <h3 className='title'>Useri</h3>
        <Link to='adauga-user'>{' + adaugă user'}</Link>
      </header>
      <div className='container'>
        <div className='user-list '>
          <SortingTable tableData={users} COLUMNS={USER_COLUMNS} />
          <FilteringTable tableData={users} COLUMNS={USER_COLUMNS} />
        </div>
      </div>
    </Wrapper>
  );
};
export default Users;
