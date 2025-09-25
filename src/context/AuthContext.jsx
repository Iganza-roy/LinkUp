import { createContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import apiClient from '../lib/apiClient';
import { LOGIN_ROUTE, LOGOUT_ROUTE } from '../utils/constants';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = async (inputs) => {
    const res = await apiClient.post(LOGIN_ROUTE, inputs);
    console.log(res);
    setCurrentUser(res.data.user);
    localStorage.setItem('accessToken', res.data.access);
    localStorage.setItem('refreshToken', res.data.refresh);
  };

  const logout = async (inputs) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      await apiClient.post(
        LOGOUT_ROUTE,
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
