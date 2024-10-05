import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const Navbar = ({ data }) => {
  console.log(data);
  const fullName = data[0];
  var names = fullName.split(/(\s+)/);
  console.log(names);

  const avatarURL = `https://avatar.iran.liara.run/username?username=${names[0]}+${names[2]}`;

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
          <img src={avatarURL} alt="avatar" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
