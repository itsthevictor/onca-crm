import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Users';
import { AddButton } from '../components';
import { mainFetch } from '../utils/customFetch';
import { toast } from 'react-toastify';
import SortingTable from '../components/tables/SortingTable';
// import { USER_COLUMNS } from '../components/tables/columns';
import FilteringTable from '../components/tables/FilteringTable';
import DataTable from '../components/tables/DataTable';
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

  // Sample data
  const userData = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      role: 'User',
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      role: 'Editor',
    },
    {
      firstName: 'Bob',
      lastName: 'White',
      email: 'bob.white@example.com',
      role: 'Admin',
    },
  ];

  // Columns definition for the DataTable
  const USER_COLUMNS = [
    {
      Header: 'Prenume',
      accessor: 'firstName',
    },
    {
      Header: 'Nume',
      accessor: 'lastName',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Rol',
      accessor: 'role',
    },
  ];
  return (
    <Wrapper>
      <header>
        {' '}
        <h3 className='title'>Useri</h3>
        <Link to='adauga-user'>{' + adaugă user'}</Link>
      </header>
      <div className='container'>
        <div className='user-list '>
          <DataTable data={users} columns={USER_COLUMNS} />
        </div>
      </div>
    </Wrapper>
  );
};
export default Users;
