import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { useDashboardContext } from "../layouts/Dashboard";
import { LogoutContainer } from ".";
const Navbar = () => {
  const { user, logOutUser } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-container">
        <div className="logo">
          <Logo />
        </div>
        <div className="search">
          <SearchBox />
        </div>
        <div className="status">
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
