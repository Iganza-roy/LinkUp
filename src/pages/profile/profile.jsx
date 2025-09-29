import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getColor } from '../../lib/utils';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const saveChanges = async () => {};
  return (
    <div className='flex h-screen items-center flex-col justify-center gap-6 pt-8'>
      <div className='flex flex-col gap-6 w-[86vw] max-w-[720px] md:w-[60vw] bg-[#0D0C36]/58 rounded-lg p-6'>
        <div>
          <IoArrowBack
            onClick={() => navigate(-1)}
            className='text-3xl lg:text-4xl text-white/90 cursor-pointer'
          />
        </div>
        <h1 className='text-center font-bold text-2xl'>Create Your Profile</h1>
        <div className='flex flex-row gap-8 justify-center items-center'>
          <div
            className='h-full w-32 md:w-48 md:h-48 relative flex items-center justify-center'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Avatar className='h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden'>
              {' '}
              {image ? (
                <AvatarImage
                  src={image}
                  alt='profile'
                  className='w-full object-cover h-full bg-black'
                />
              ) : (
                <div
                  className={`upperCase h-32 w-32 md:h-48 md:w-48 flex items-center justify-center text-5xl rounded-full  ${getColor(
                    selectedColor
                  )}`}
                >
                  {firstName
                    ? firstName.split('').shift()
                    : currentUser.email.split('').shift()}
                </div>
              )}
            </Avatar>
            {hovered && (
              <div className='absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer ring-fuchsia-50'>
                {image ? (
                  <FaTrash className='text-3xl text-white cursor-pointer' />
                ) : (
                  <FaPlus className='text-3xl text-white cursor-pointer' />
                )}
              </div>
            )}
          </div>
          <div className='flex min-w-32 md:min-w-64 flex-col gap-4 text-white justify-center items-center w-full'>
            <div className='flex flex-row gap-4 w-full'>
              <input
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='rounded-lg p-3 bg-[#181754] border-none text-sm w-full'
              />
              <input
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='rounded-lg p-3 bg-[#181754] border-none text-sm w-full'
              />
            </div>
            <input
              type='email'
              placeholder='email'
              disabled
              value={currentUser.email}
              className='rounded-lg p-3 bg-[#181754] w-full text-sm'
            />
            <input
              type='text'
              placeholder='Phone Number'
              value={currentUser.phone_number}
              className='rounded-lg p-3 bg-[#181754] w-full text-sm'
            />
            <input
              type='text'
              placeholder='Bio'
              value={currentUser.bio}
              className='rounded-lg p-3 bg-[#181754] w-full h-24 text-sm'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
