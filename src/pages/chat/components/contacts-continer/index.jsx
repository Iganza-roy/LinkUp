import logo1 from '../../../../assets/logo1.png';
import {
  MdOutlineGroups,
  MdOutlinePerson,
  MdEdit,
  MdSettings,
} from 'react-icons/md';
import { getColor } from '../../../../lib/utils';
import { DUMMY_CHATS } from '../../../../utils/constants';

const ContactsContainer = () => {
  return (
    <div className='relative md:w-[35vw] lg:w-[30vw] xl:w-[25vw] bg-[#0D0C36]/58 border-r-2 border-[#0f0e4a] w-full'>
      <div className='pt-2'>
        <img
          className='md:w-[150px] w-[120px] hover:scale-105 transition-all cursor-pointer'
          src={logo1}
          alt='logo'
        />
      </div>
      <hr className='border-[#34466E] my-3' />
      <div className='flex flex-col'>
        <div className='flex items-center justify-between px-5'>
          <h2 className='text-xl md:text-lg font-semibold'>Messages</h2>
          <button className='bg-[#2563EB] md:text-xs cursor-pointer rounded-lg text-lg text-white py-1 px-3 hover:scale-105 transition-all '>
            + New Chat
          </button>
        </div>

        <div className='px-5 mt-4'>
          <div className='bg-[#162447] hover:bg-[#1E3250] transition-colors duration-200 rounded-full flex items-center px-4 py-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4 text-white/70 mr-3 flex-shrink-0'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z'
              />
            </svg>
            <input
              type='text'
              placeholder='Search'
              className='bg-transparent outline-none text-white placeholder-white/60 w-full text-sm'
            />
          </div>
        </div>

        <div className='flex items-center justify-between px-4 mt-4'>
          <div className='flex items-center justify-center pr-5 gap-1 cursor-pointer hover:text-[#2563EB] transition-colors duration-200'>
            <MdOutlinePerson className='text-lg ' />
            <Title text='Chats' className='border' />
          </div>
          <div className='flex  gap-1 items-center cursor-pointer hover:text-[#2563EB] justify-center pr-5 transition-colors duration-200'>
            <MdOutlineGroups className='text-lg ' />
            <Title text='Groups' />
          </div>
        </div>
        <hr className='border-[#34466E] mt-3' />

        <div className='px-2'>
          <div className='overflow-y-auto max-h-[calc(100vh-220px)] pr-2 pb-24 custom-scroll'>
            {DUMMY_CHATS.map((chat) => (
              <div
                key={chat.id}
                className='flex items-center gap-3 px-4 py-3 hover:bg-[#0f1530] rounded-md cursor-pointer'
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${chat.colorClass}`}
                >
                  <span className='text-sm text-white'>{chat.initials}</span>
                </div>

                <div className='flex-1'>
                  <div className='flex items-center justify-between'>
                    <div className='text-white font-semibold'>{chat.name}</div>
                    {chat.unread && (
                      <div className='w-[8px] h-[8px] bg-[#2563EB] rounded-full'></div>
                    )}
                  </div>
                  <div className='text-xs text-white/60'>
                    {chat.lastMessage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='absolute bottom-0 w-full'>
          <div className='bg-[#162863] border border-[#1b2a4d] rounded-t-xl px-3 py-2 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div
                className={`w-12 h-12 rounded-full ${getColor(
                  0
                )} flex items-center justify-center text-white font-bold`}
              >
                RI
              </div>
              <div>
                <div className='text-white font-semibold'>Roy Iganza</div>
                <div className='text-xs text-white/60'>Active now</div>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <button
                className='p-2 rounded-md hover:bg-white/5 transition-colors'
                aria-label='Edit profile'
              >
                <MdEdit className='text-white/80' />
              </button>
              <button
                className='p-2 rounded-md hover:bg-white/5 transition-colors'
                aria-label='Settings'
              >
                <MdSettings className='text-white/80' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsContainer;

const Title = ({ text }) => {
  return (
    <h6 className='uppercase tracking-wide font-light text-opacity-90 text-sm '>
      {text}
    </h6>
  );
};
