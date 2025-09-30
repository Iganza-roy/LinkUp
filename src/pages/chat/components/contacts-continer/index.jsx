import logo1 from '../../../../assets/logo1.png';
const ContactsContainer = () => {
  return (
    <div className='relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#0D0C36]/58 border-r-2 border-[#0f0e4a] w-full'>
      <div className='pt-1'>
        <img className='md:w-[150px] w-[120px]' src={logo1} alt='logo' />
      </div>
      <div className='my-5'>
        <div className='flex items-center justify-between pr-5'>
          <Title text='Direct Messages' />
        </div>
      </div>
      <div className='my-5'>
        <div className='flex items-center justify-between pr-5'>
          <Title text='Group' />
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
