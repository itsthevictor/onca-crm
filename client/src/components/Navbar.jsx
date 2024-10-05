import { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const Navbar = ({ data }) => {
  const fullName = data[0];
  var names = fullName.split(/(\s+)/);
  const avatarURL = `https://avatar.iran.liara.run/username?username=${names[0]}+${names[2]}`;
  const [avatarHover, setAvatarHover] = useState(false);
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
            title={data[0]}
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
