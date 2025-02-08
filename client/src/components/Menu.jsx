import Wrapper from "../assets/wrappers/Menu";
import { NavLinks } from "../components";
import { BiLogOutCircle } from "react-icons/bi";
import { useDashboardContext } from "../layouts/Dashboard";
import { MdOutlineLogout } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

const Menu = () => {
  const { logOutUser } = useDashboardContext();
  return (
    <Wrapper>
      <div className="sidebar-container">
        <NavLinks />
        <button className="logout-btn" onClick={logOutUser}>
          log out <HiOutlineLogout className="logout-icon" size={16} />
        </button>
      </div>
    </Wrapper>
  );
};
export default Menu;
