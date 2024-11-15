import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { useDashboardContext } from "../layouts/Dashboard";
import { LogoutContainer } from ".";
import { useState } from "react";
const Navbar = () => {
  const { user, logOutUser, activeCompany, setActiveCompany } =
    useDashboardContext();
  const [selectCompany, setSelectCompany] = useState(false);

  return (
    <Wrapper>
      <div className="nav-container">
        <div className="logo">
          <Logo />
        </div>
        <div className="search">
          <div className="search-box">
            <div
              class="active-company"
              onClick={() => setSelectCompany(!selectCompany)}
            >
              {activeCompany}
            </div>
            {selectCompany && (
              <div class="options">
                <button
                  className="option"
                  value="hai sincer"
                  onClick={(e) => {
                    setActiveCompany(e.target.value);
                    setSelectCompany(false);
                  }}
                >
                  hai sincer
                </button>
                <button
                  className="option"
                  value="foaie verde"
                  onClick={(e) => {
                    setActiveCompany(e.target.value);
                    setSelectCompany(false);
                  }}
                >
                  foaie verde
                </button>
                <button
                  className="option"
                  value="foaie verde"
                  onClick={(e) => {
                    setActiveCompany(e.target.value);
                    setSelectCompany(false);
                  }}
                >
                  foaie verde
                </button>
                <button
                  className="option"
                  value="foaie verde"
                  onClick={(e) => {
                    setActiveCompany(e.target.value);
                    setSelectCompany(false);
                  }}
                >
                  foaie verde
                </button>
              </div>
            )}
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
