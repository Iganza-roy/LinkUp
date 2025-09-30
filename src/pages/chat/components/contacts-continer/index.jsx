import logo1 from '../../../../assets/logo1.png';
const ContactsContainer = () => {
  return (
    <div className='relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#0D0C36]/58 border-r-2 border-[#0f0e4a] w-full'>
      <div className='pt-2'>
        <img className='md:w-[150px] w-[120px]' src={logo1} alt='logo' />
      </div>
      <hr className='border-[#34466E] my-3' />
      <div className='flex flex-col'>
        <div className='flex items-center justify-between px-5'>
          <h2 className='text-xl md:text-lg font-semibold'>Messages</h2>
          <button className='bg-[#2563EB] md:text-xs rounded-lg text-lg text-white py-1 px-3 '>
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

        <div className='flex items-center justify-between px-5 mt-4'>
          <div className='my-5'>
            <div className='flex items-center justify-between pr-5'>
              <Title text='Chats' />
            </div>
          </div>
          <div className='my-5'>
            <div className='flex items-center justify-between pr-5'>
              <Title text='Group' />
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
    <h6 className='uppercase tracking-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm '>
      {text}
    </h6>
  );
};
