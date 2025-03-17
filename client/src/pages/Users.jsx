import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Users';
import { AddButton } from '../components';
const Users = () => {
  return (
    <Wrapper>
      <header>
        {' '}
        <div className='container'>Useri</div>
        <Link to='adauga-user'>
          <AddButton text=' + adaugă user' />
        </Link>
      </header>
    </Wrapper>
  );
};
export default Users;
