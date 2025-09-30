import Lottie from 'react-lottie';
import { defaultOptions } from '../../../../lib/utils';

const EmptyChatContainer = () => {
  return (
    <div className='flex-1 md:bg-[#08072C] md:flex flex-col justify-center items-center hidden duration-1000 transition-all'>
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        height={200}
        width={200}
      />
      <div className='text-opacity-60 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl text-center transition-all duration-300'>
        <h3 className='poppins-medium '>
          Hi! Welcome to
          <span className='text-[#2B9BFD]'> LinkUp</span>
        </h3>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
