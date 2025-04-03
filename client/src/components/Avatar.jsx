import { useDashboardContext } from '../layouts/Dashboard';
import { BiLogOutCircle } from 'react-icons/bi';
import { useState } from 'react';
import Wrapper from '../assets/wrappers/Avatar';

const Avatar = ({ firstName, lastName, userAvatar }) => {
  const avatarURL = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;

  return (
    <Wrapper>
      <button type='button' className='btn user-btn'>
        <img
          src={userAvatar ? userAvatar : avatarURL}
          alt='avatar'
          className='avatar'
          title={`${firstName} ${lastName}`}
        />
      </button>
    </Wrapper>
  );
};
export default Avatar;
