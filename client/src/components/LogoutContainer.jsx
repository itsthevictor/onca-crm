import { useDashboardContext } from "../layouts/Dashboard";
import { BiLogOutCircle } from "react-icons/bi";
import { useState } from "react";
import Wrapper from "../assets/wrappers/LogoutContainer";

const LogoutContainer = () => {
  const { user, logOutUser } = useDashboardContext();
  const [showLogout, setShowLogout] = useState(false);
  const avatarURL = `https://avatar.iran.liara.run/username?username=${user.firstName}+${user.lastName}`;

  return (
    <Wrapper>
      <button
        type="button"
        className="btn user-btn"
        onClick={() => {
          setShowLogout(!showLogout);
          setTimeout(() => {
            setShowLogout(false);
          }, 5000);
        }}
      >
        {" "}
        <img
          src={avatarURL}
          alt="avatar"
          className="avatar"
          title={`${user.firstName} ${user.lastName}`}
        />
      </button>
      {showLogout && (
        <button type="button" className="btn logout-btn" onClick={logOutUser}>
          <BiLogOutCircle size={16} className="icon" /> <span>log out</span>
        </button>
      )}
    </Wrapper>
  );
};
export default LogoutContainer;
