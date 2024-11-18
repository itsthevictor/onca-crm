import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { useDashboardContext } from "../layouts/Dashboard";
import { LogoutContainer } from ".";
import { useState } from "react";
const Navbar = () => {
  const {
    user,
    logOutUser,
    activeCompany,
    setActiveCompany,
    setSelectCompany,
    selectCompany,
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
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
