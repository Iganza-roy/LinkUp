import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
            className='h-full w-32 md:48 md:h-48 relative flex items-center justify-center'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Avatar>
              {' '}
              {image ? (
                <AvatarImage src='https://github.com/shadcn.png' />
              ) : (
                <div>
                  {firstName
                    ? firstName.split('').shift()
                    : currentUser.email.split('').shift()}
                </div>
              )}
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
