import React, { useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({
  children,
}) => {
  const [user, updateUser] = useState(null);

  useEffect(
    () => {
      const localStorageUser = localStorage.getItem('userToken');
      if (localStorageUser) {
        updateUser(JSON.parse(localStorageUser));
      }
    },
    [],
  );

  const logout = () => {
    localStorage.removeItem('userToken');
    updateUser(null);
  };

  const login = async (form) => {
    console.log(form);
    const loggedUser = { name: 'prueba', lastname: 'test' };
    updateUser(loggedUser);
    localStorage.setItem('userToken', JSON.stringify(loggedUser));
    return Promise.resolve();
  };

  return (
    <AppContext.Provider value={{
      user,
      updateUser,
      login,
      logout,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
