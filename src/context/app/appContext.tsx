import React from 'react';
import AuthContextProvider from '../auth/authContext';

const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default AppContextProvider;
