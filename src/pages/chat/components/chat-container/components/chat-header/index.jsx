import { getColor } from '../../../../../../lib/utils';
import { IoClose } from 'react-icons/io5';
const ChatHeader = () => {
  return (
    <div className='h-15 border-b border-[#34466E] flex items-center'>
      <div className='flex justify-between items-center w-full px-6 py-10'>
        <div className='flex items-center gap-3'>
          <div
            className={`w-12 h-12 rounded-full ${getColor(
              2
            )} flex items-center justify-center text-white font-bold`}
          >
            CK
          </div>
          <div>
            <div className='text-white font-semibold'>Chloe Kim</div>
          </div>
        </div>
        <IoClose className='text-lg' />
      </div>
    </div>
  );
};

export default ChatHeader;
