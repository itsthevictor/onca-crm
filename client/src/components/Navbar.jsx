import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { useDashboardContext } from "../layouts/Dashboard";
import { Avatar } from "../components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {
    user,
    logOutUser,
    activeCompany,
    setActiveCompany,
    setSelectCompany,
    selectCompany,
    showLogout,
    setShowLogout,
  } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-container">
        <div className="logo">
          <Logo />
        </div>
        <div className="search">
          <div
            className="search-box"
            onClick={() => setSelectCompany(!selectCompany)}
          >
            <div class="active-company">{activeCompany}</div>
          </div>
        </div>
        <div className="status">
          <Link to="/profil">
            <Avatar />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
