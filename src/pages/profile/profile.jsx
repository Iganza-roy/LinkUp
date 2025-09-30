import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { colors, getColor } from '../../lib/utils';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import apiClient from '../../lib/apiClient';
import { ADD_PROFILE_PIC_ROUTE } from '../../utils/constants';
import { toast } from 'sonner';
const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const fileInputRef = useRef(null);

  const getJoinedText = (iso) => {
    if (!iso) return '';
    try {
      const d = new Date(iso);
      const month = d.toLocaleString('default', { month: 'long' });
      const year = d.getFullYear();
      return `Joined on ${month} ${year}`;
    } catch (e) {
      return '';
    }
  };

  const saveChanges = async () => {};

  const handleFileInput = () => {
    fileInputRef.current.click();
  };

  const handlePicChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profile_pic', file);
      const response = await apiClient.post(ADD_PROFILE_PIC_ROUTE, formData);
      if (response.status === 200) {
        setCurrentUser({
          ...currentUser,
          profile_pic: response.data.profile_pic,
        });
        toast.success('Profile picture updated successfully');
        setImage(response.data.profile_pic);
      }
    }
  };

  const handleDeletePic = async () => {};

  return (
    <div className='flex h-screen items-center flex-col justify-center gap-6 pt-8'>
      <div className='flex flex-col gap-5 w-[86vw] max-w-[720px] md:w-[60vw] bg-[#0D0C36]/58 rounded-lg p-6'>
        <IoArrowBack
          onClick={() => navigate(-1)}
          className='text-3xl lg:text-4xl text-white/90 cursor-pointer'
        />
        <h1 className='text-center font-bold text-2xl'>Create Your Profile</h1>
        <div className='flex flex-row gap-8 justify-center items-center'>
          <div className=' flex flex-col gap-3'>
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
                <div
                  className='absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer ring-fuchsia-50'
                  onClick={image ? handleDeletePic : handleFileInput}
                >
                  {image ? (
                    <FaTrash className='text-3xl text-white cursor-pointer' />
                  ) : (
                    <FaPlus className='text-3xl text-white cursor-pointer' />
                  )}
                </div>
              )}
              <input
                type='file'
                ref={fileInputRef}
                className='hidden'
                onChange={handlePicChange}
                name='profile_pic'
                accept='.png ,.jpg,.jpeg, .webp, .svg'
              />
            </div>
            <div className='flex flex-row justify-center items-center gap-1'>
              <IoCalendarOutline className='text-center text-xs text-white/70' />
              <p className='text-center text-xs italic text-white/70'>
                {getJoinedText(currentUser?.date_joined)}{' '}
              </p>
            </div>
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
        <h1 className='text-center'>Choose your Accent color</h1>
        <div className='w-full flex gap-5 items-center justify-center'>
          {colors.map((color, index) => (
            <div
              className={`${color} h-8 w-8 rounded-full cursor-pointer duration-300 transition-all ${
                selectedColor === index ? 'outline-2 outline-white' : ''
              }`}
              key={index}
              onClick={() => setSelectedColor(index)}
            ></div>
          ))}
        </div>
        <div className='w-full flex justify-center '>
          <button
            className='bg-blue-500 text-white rounded-lg px-4 py-2 w-1/3 cursor-pointer hover:bg-blue-600 duration-300'
            onClick={saveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
