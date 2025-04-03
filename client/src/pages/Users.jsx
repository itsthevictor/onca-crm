import { Link, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Users';
import { AddButton, CustomModal } from '../components';
import { mainFetch } from '../utils/customFetch';
import { toast } from 'react-toastify';
import SortingTable from '../components/tables/SortingTable';
import { USER_COLUMNS } from '../components/tables/columns';
import FilteringTable from '../components/tables/FilteringTable';
import DataTable from '../components/tables/DataTable';
import { useState } from 'react';
import AddUser from './AddUser';
import Avatar from '../components/Avatar';
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
  console.log(users);

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
      Header: 'Nume',
      accessor: 'fullName', // Virtual field
      Cell: ({ row }) => {
        const user = row.original;

        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar
              alt={`${user.firstName} ${user.lastName}`}
              avatarUrl={user.avatar} // Pass the avatar URL if it exists
              firstName={user.firstName} // Pass firstName for fallback
              lastName={user.lastName} // Pass lastName for fallback
            />
            <p style={{ marginLeft: '10px' }}>
              {`${user.firstName} ${user.lastName}`}
            </p>
          </div>
        );
      },
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

  const [open, setOPen] = useState(false);

  const handleClose = () => {
    setOPen(false);
  };

  return (
    <Wrapper>
      <header>
        <h3 className='title'>Useri</h3>
        {/* <Link to='adauga-user'>{' + adaugă user'}</Link> */}
        <AddButton onClick={() => setOPen(true)} text={' + adaugă user'} />
      </header>
      <div className='container'>
        <div className='user-list '>
          <DataTable
            data={users}
            columns={USER_COLUMNS}
            rowLink={(user) => `edit-user/${user._id}`}
          />
        </div>
      </div>
      <CustomModal
        content={<AddUser />}
        handleClose={handleClose}
        open={open}
        backDropActive
      />
    </Wrapper>
  );
};
export default Users;
