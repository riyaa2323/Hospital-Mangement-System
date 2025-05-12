import { createContext, useState, useEffect } from 'react';

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  // use the same localStorage key for the auth token everywhere: 'token'
  const [aToken, setAToken] = useState(() => {
    return localStorage.getItem('token') || '';
  });

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // keep localStorage in sync whenever aToken changes
  useEffect(() => {
    if (aToken) {
      localStorage.setItem('token', aToken);
    } else {
      localStorage.removeItem('token');
    }
  }, [aToken]);

  const value = {
    aToken,
    setAToken,
    backendUrl,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export default AdminContextProvider;
