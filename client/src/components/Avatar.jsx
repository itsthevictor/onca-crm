import { useDashboardContext } from "../layouts/Dashboard";
import { BiLogOutCircle } from "react-icons/bi";
import { useState } from "react";
import Wrapper from "../assets/wrappers/Avatar";

const Avatar = () => {
  const { user, logOutUser, setShowLogout, showLogout } = useDashboardContext();

  const avatarURL = `https://avatar.iran.liara.run/username?username=${user.firstName}+${user.lastName}`;

  return (
    <Wrapper>
      <button
        type="button"
        className="btn user-btn"
        onClick={() => {
          setShowLogout(!showLogout);
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
    </Wrapper>
  );
};
export default Avatar;
