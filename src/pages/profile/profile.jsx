import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getColor } from '../../lib/utils';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState('');
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const saveChanges = async () => {};
  return (
    <div className='flex items-center flex-col justify-center gap-10'>
      <div className='flex flex-col gap-10 w-[80vw] md:w-max'>
        <div>
          <IoArrowBack className='text-4xl lg:text-6xl text-white/90 cursor-pointer' />
        </div>
        <div className='grid grid-cols-1'>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
