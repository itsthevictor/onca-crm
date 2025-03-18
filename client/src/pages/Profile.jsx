import { FormRow, AddButton, Loading } from '../components';
import Wrapper from '../assets/wrappers/AddUser';
import { mainFetch } from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useState, useEffect, useRef } from 'react';
import { useDashboardContext } from '../layouts/Dashboard';
import { GoPencil } from 'react-icons/go';

const Profile = () => {
  const { user } = useDashboardContext();
  const avatarURL = `https://avatar.iran.liara.run/username?username=${user.firstName}+${user.lastName}`;

  const { firstName, lastName, email, role, avatar } = user;

  const [userData, setUserData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const [file, setFile] = useState(false);
  const fileInput = useRef(null);

  const [imageSrc, setImageSrc] = useState('');
  const [tempAvatar, setTempAvatar] = useState(
    user.avatar ? user.avatar : avatarURL
  );
  useEffect(() => {
    if (user.avatar) {
      setTempAvatar(user.avatar);
    } else {
      setTempAvatar(avatarURL);
    }
  }, []);
  const handleImageChange = (e) => {
    setFile(true);
    setIsDisabled(false);
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = new FormData(e.currentTarget);
    let formObject = Object.fromEntries(data);

    const file = formObject.avatar;
    if (file && file.size > 500000) {
      toast.error('file size too  large');
      return null;
    }
    try {
      await mainFetch.patch('/users/update-user', formObject, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      toast.success('profile updated successfully');
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <div className='wrapper'>
        <div className='page-title'>
          <h2>Profilul meu</h2>
        </div>
        <div className='form-container'>
          <form method='post' onSubmit={handleSubmit}>
            <div className='row'>
              <img
                className='image'
                src={imageSrc ? imageSrc : tempAvatar}
                alt='Uploaded'
              />
              <label htmlFor='fileInput' className='upload-label'>
                <GoPencil size={20} className='icon' />
              </label>
              <input
                className='hidden'
                id='fileInput'
                type='file'
                accept='image/*'
                name='avatar'
                ref={fileInput}
                onChange={handleImageChange}
              />
            </div>
            <div className='form-row'></div>
            <div className='form-row'>
              <label htmlFor='firstName'>prenume</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                defaultValue={firstName}
                onChange={() => setIsDisabled(false)}
              />
            </div>
            <div className='form-row'>
              {' '}
              <label htmlFor='lastName'>nume</label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                defaultValue={lastName}
                onChange={() => setIsDisabled(false)}
              />
            </div>
            <div className='form-row'>
              {' '}
              <label htmlFor='email'>email</label>
              <input
                type='email'
                id='email'
                name='email'
                defaultValue={email}
                disabled
              />
            </div>

            <div className='form-row'>
              {' '}
              <label htmlFor='rol'>rol</label>
              <input
                type='rol'
                id='rol'
                name='role'
                defaultValue={role}
                disabled
              />
            </div>
            <div className='form-row'>
              <input
                type='hidden'
                name='avatarPublicId'
                value={user.avatarPublicId}
              />
            </div>

            <div className='btn-row'>
              <AddButton
                text={'actualizează'}
                disabled={isDisabled}
                type='submit'
              />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Profile;
