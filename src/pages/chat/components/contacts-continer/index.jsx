import logo1 from '../../../../assets/logo1.png';
import { MdOutlineGroups, MdOutlinePerson } from 'react-icons/md';
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
        <hr className='border-[#34466E] my-3' />
      </div>
    </div>
  );
};

export default ContactsContainer;

const Title = ({ text }) => {
  return (
    <h6 className='uppercase tracking-widefont-light text-opacity-90 text-sm '>
      {text}
    </h6>
  );
};
