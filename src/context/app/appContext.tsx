import React, { PropsWithChildren } from 'react';
import AuthContextProvider from '../auth/authContext';

const AppContextProvider = ({ children }: PropsWithChildren) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default AppContextProvider;
