import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/AddUser";
import { AddButton } from "../components";
const Users = () => {
  return (
    <Wrapper>
      <div className="container">Users list</div>
      <Link to="adauga-user">
        <AddButton text="adaugă user" />
      </Link>
    </Wrapper>
  );
};
export default Users;
