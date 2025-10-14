import { useRef } from 'react';
import { MdAttachFile, MdOutlineEmojiEmotions, MdSend } from 'react-icons/md';

const MessageBar = () => {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  return (
    <div className='w-full px-6 py-4 border-t border-[#34466E] bg-transparent mt-auto flex-none'>
      <div className='flex items-center gap-3'>
        <button
          aria-label='Attach'
          className='hidden sm:inline-flex p-3 rounded-full bg-[#0E1636]/60 hover:bg-[#0E1636]/75 text-white/80'
        >
          <MdAttachFile className='w-5 h-5' />
        </button>

        <div className='flex items-center flex-1 bg-[#162A4A]/60 hover:bg-[#172C52] rounded-full px-4 py-2 gap-3'>
          <MdAttachFile className='w-5 h-5 text-white/60 sm:hidden' />

          <textarea
            ref={textareaRef}
            rows={1}
            onInput={handleInput}
            placeholder='Type message here'
            className='resize-none bg-transparent outline-none placeholder-white/50 text-white text-sm flex-1 max-h-40 overflow-y-auto custom-scroll'
          />

          <button
            aria-label='Emoji'
            className='p-2 rounded-md hover:bg-white/5 transition-colors'
          >
            <MdOutlineEmojiEmotions className='w-5 h-5 text-white/80' />
          </button>
        </div>

        <button
          aria-label='Send'
          className='ml-2 w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center shadow-lg hover:scale-105 transition-transform'
        >
          <MdSend className='w-5 h-5 text-white' />
        </button>
      </div>
    </div>
  );
};

export default MessageBar;
