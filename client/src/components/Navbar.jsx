import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
const Navbar = ({ data }) => {
  const avatarURL = `https://avatar.iran.liara.run/username?username=${data.firstName}+${data.lastName}`;
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
          <img
            src={avatarURL}
            alt="avatar"
            className="avatar"
            title={`${data.firstName} ${data.lastName}`}
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
