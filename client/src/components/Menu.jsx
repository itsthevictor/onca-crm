import Wrapper from "../assets/wrappers/Menu";
import { NavLinks } from "../components";
const Menu = () => {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <NavLinks />
      </div>
    </Wrapper>
  );
};
export default Menu;
