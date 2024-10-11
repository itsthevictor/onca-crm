import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/AddUser";
const Users = () => {
  return (
    <Wrapper>
      <div className="container">Users list</div>
      <Link to="/adauga-user">
        <button>add user</button>
      </Link>
    </Wrapper>
  );
};
export default Users;
