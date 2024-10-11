import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Menu";
const Menu = () => {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="row">
          {" "}
          <NavLink to="/">Overview</NavLink>
        </div>
        <div className="row">
          <NavLink to="adauga-user">Adaugă user</NavLink>
        </div>
        <div className="row">
          {" "}
          <NavLink to="/">Leaduri</NavLink>
        </div>
        <div className="row">
          {" "}
          <NavLink to="/">Clienti</NavLink>
        </div>
        <div className="row">
          {" "}
          <NavLink to="/">Contracte</NavLink>
        </div>
        <div className="row">
          {" "}
          <NavLink to="/">Overview</NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Menu;
