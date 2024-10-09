import { Link } from "react-router-dom";
const Users = () => {
  return (
    <>
      <div>Users list</div>
      <Link to="/adauga-user">
        <button>add user</button>
      </Link>
    </>
  );
};
export default Users;
