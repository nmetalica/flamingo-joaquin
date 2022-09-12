import React from 'react';
import axios from 'axios';

const QueryContext = React.createContext({});

const QueryProvider = ({
  children,
}) => {
  const isDevelopment = () => process.env.NODE_ENV === 'production';

  const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}${isDevelopment() ? '/api/test' : ''}`,
  });

  const getInvestments = () => new Promise(async (resolve) => {
    try {
      const resp = await axiosInstance.get('/oportunity/allGrouped');
      resolve(resp.data);
    } catch (err) {
      resolve([]);
    }
  });

  const login = (form) => new Promise(async (resolve, reject) => {
    try {
      const resp = await axiosInstance.post('/auth/login', form);
      resolve(resp.data);
    } catch (err) {
      reject(new Error('Login error'));
    }
  });

  return (
    <QueryContext.Provider value={{
      getInvestments,
      login,
    }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export { QueryContext, QueryProvider };
