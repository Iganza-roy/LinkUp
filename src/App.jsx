import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Chat from './pages/chat';
import Profile from './pages/profile/profile';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
}

export default App;
