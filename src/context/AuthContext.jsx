import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(
      `https://mady.tech/api/v1/auth/login/client/`,
      inputs
    );
    console.log(res.data);
    setCurrentUser(res.data.user);
    localStorage.setItem('accessToken', res.data.tokens.access);
    localStorage.setItem('refreshToken', res.data.tokens.refresh);
  };

  const logout = async (inputs) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      await axios.post(
        `https://mady.tech/api/v1/auth/logout/`,
        { refresh: refreshToken },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setCurrentUser(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    } catch (error) {
      toast.error('Error logging out');
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
