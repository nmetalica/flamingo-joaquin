import React from 'react';
import axios from 'axios';

const QueryContext = React.createContext({});

const QueryProvider = ({
  children,
}) => {
  const isDevelopment = () => process.env.NODE_ENV === 'development';

  const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}${isDevelopment ? '/test' : ''}`,
  });

  const getAll = () => new Promise(async (resolve) => {
    try {
      const resp = await axiosInstance.get('/all');
      resolve(resp.data);
    } catch (err) {
      resolve({});
    }
  });

  return (
    <QueryContext.Provider value={{
      getAll,
    }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export { QueryContext, QueryProvider };
