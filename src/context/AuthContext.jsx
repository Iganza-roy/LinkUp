import { createContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import apiClient from '../lib/apiClient';
import { LOGIN_ROUTE, LOGOUT_ROUTE, PROFILE_ROUTE } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = async (inputs) => {
    try {
      const res = await apiClient.post(LOGIN_ROUTE, inputs);
      console.log(res);
      localStorage.setItem('accessToken', res.data.access);
      localStorage.setItem('refreshToken', res.data.refresh);

      const profileRes = await apiClient.get(PROFILE_ROUTE, {
        headers: {
          Authorization: `Bearer ${res.data.access}`,
        },
      });

      const profile = profileRes.data;
      setCurrentUser(profile);
      localStorage.setItem('user', JSON.stringify(profile));

      if (profile.isProfileComplete) {
        navigate('/chat');
      } else {
        navigate('/profile');
      }
    } catch (err) {
      toast.error('Login failed', err);
    }
  };

  const logout = async () => {
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
      localStorage.removeItem('user');
    } catch (error) {
      toast.error('Error logging out');
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      apiClient
        .get(PROFILE_ROUTE, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setCurrentUser(res.data);
          localStorage.setItem('user', JSON.stringify(res.data));
        })
        .catch(() => {
          localStorage.clear();
          navigate('/login');
        });
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
