import ContactsContainer from './components/contacts-continer';
import ChatContainer from './components/chat-container';
import EmptyChatContainer from './components/empty-chat-container';

const Chat = () => {
  return (
    <div className='text-white h-[100vh] flex overflow-hidden'>
      <ContactsContainer />
      <ChatContainer />
      <EmptyChatContainer />
    </div>
  );
};

export default Chat;
