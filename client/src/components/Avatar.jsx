import { useDashboardContext } from '../layouts/Dashboard';
import { BiLogOutCircle } from 'react-icons/bi';
import { useState } from 'react';
import Wrapper from '../assets/wrappers/Avatar';

const Avatar = () => {
  const { user } = useDashboardContext();

  const avatarURL = `https://avatar.iran.liara.run/username?username=${user.firstName}+${user.lastName}`;

  return (
    <Wrapper>
      <button type='button' className='btn user-btn'>
        <img
          src={user.avatar ? user.avatar : avatarURL}
          alt='avatar'
          className='avatar'
          title={`${user.firstName} ${user.lastName}`}
        />
      </button>
    </Wrapper>
  );
};
export default Avatar;
