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
    </div>
  );
};

export default EmptyChatContainer;
